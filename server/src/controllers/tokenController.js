import Token from "../models/Token.js";
import Counter from "../models/Counter.js";
import { predictETA } from "../services/etaService.js";
export const generateToken = async (
  req,
  res
) => {
  try {
    const { branchId } = req.body;

    const tokenCount =
      await Token.countDocuments({
        branch: branchId,
      });

    const tokenNumber = `A${
      101 + tokenCount
    }`;

    const token = await Token.create({
      tokenNumber,
      user: req.user._id,
      branch: branchId,
      status: "waiting",
    });
    const io = req.app.get("io");

io.emit("analyticsUpdated");
io.emit("queueUpdated");
    res.status(201).json({
      _id: token._id,
      tokenNumber: token.tokenNumber,
      status: token.status,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTokenPosition =
  async (req, res) => {
    try {
      // const token =
      //   await Token.findById(
      //     req.params.id
      //   );
      const token = await Token.findById(req.params.id)
.populate("branch","name");

      if (!token) {
        return res.status(404).json({
          message:
            "Token not found",
        });
      }

      const peopleAhead =
        await Token.countDocuments({
          branch: token.branch,
          status: "waiting",
          createdAt: {
            $lt: token.createdAt,
          },
        });
       const totalQueue = await Token.countDocuments({
    branch: token.branch._id,
    status: {
        $in: ["waiting", "serving", "held"],
    },
});
      res.json({
          tokenId: token._id,
        tokenNumber:
          token.tokenNumber,
           status: token.status,
    position: peopleAhead + 1,
    peopleAhead,
    totalQueue,
    branch: token.branch.name,
        
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };


export const callNextToken = async (req, res) => {
  try {

    // Check if a token is already being served
    const alreadyServing = await Token.findOne({
      status: "serving",
    });

    if (alreadyServing) {
      return res.status(400).json({
        message: `Token ${alreadyServing.tokenNumber} is already being served`,
      });
    }

    // Find oldest waiting token
    const token = await Token.findOne({
      status: "waiting",
    }).sort({ createdAt: 1 });

    if (!token) {
      return res.status(404).json({
        message: "No waiting tokens",
      });
    }

    token.status = "serving";
    token.servingAt = new Date();

    await token.save();

    const io = req.app.get("io");

    io.emit("tokenCalled", {
      tokenId: token._id,
      tokenNumber: token.tokenNumber,
      status: token.status,
    });
    io.emit("analyticsUpdated");
    io.emit("queueUpdated");
    res.json(token);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// export const completeToken = async (
//   req,
//   res
// ) => {
//   try {
//     const token =
//       await Token.findById(
//         req.params.id
//       );

//     if (!token) {
//       return res.status(404).json({
//         message:
//           "Token not found",
//       });
//     }

//     token.status = "completed";
//     token.completedAt =
//       new Date();

//     await token.save();

//     // Find the next waiting token
// const nextToken = await Token.findOne({
//     branch: currentToken.branch,
//     status: "waiting",
// })
// .sort({ generatedAt: 1 }); // oldest waiting token

// if (nextToken) {

//     nextToken.status = "serving";

//     await nextToken.save();

//     // Notify all clients
//     req.io.emit("tokenCalled", nextToken);

// }


//     const io = req.app.get("io");

// io.emit("tokenCompleted", {
//   tokenId: token._id,
//   tokenNumber: token.tokenNumber,
// });
// io.emit("analyticsUpdated");
// io.emit("queueUpdated");
//     res.json(token);
//   } catch (error) {
//     res.status(500).json({
//       message:
//         error.message,
//     });
//   }
// };


export const completeToken = async (req, res) => {
  try {

    const token = await Token.findById(req.params.id);

    if (!token) {
      return res.status(404).json({
        message: "Token not found",
      });
    }

    // Mark current token as completed
    token.status = "completed";
    token.completedAt = new Date();

    await token.save();

    // Find the next waiting token in the same branch
    const nextToken = await Token.findOne({
      branch: token.branch,
      status: "waiting",
    }).sort({ generatedAt: 1 });

    const io = req.app.get("io");

    if (nextToken) {

      nextToken.status = "serving";

      await nextToken.save();

      io.emit("tokenCalled", {
        _id: nextToken._id,
        tokenNumber: nextToken.tokenNumber,
        status: nextToken.status,
        branch: nextToken.branch,
      });

    }

    io.emit("tokenCompleted", {
      tokenId: token._id,
      tokenNumber: token.tokenNumber,
    });

    io.emit("analyticsUpdated");
    io.emit("queueUpdated");

    res.json({
      completed: token,
      serving: nextToken,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

export const skipToken = async (
  req,
  res
) => {
  const token =
    await Token.findById(
      req.params.id
    );

  token.status = "skipped";
await token.save();

const io = req.app.get("io");

io.emit("analyticsUpdated");
io.emit("queueUpdated");
res.json(token);
};

export const holdToken = async (
  req,
  res
) => {
  const token =
    await Token.findById(
      req.params.id
    );

  token.status = "held";

  await token.save();
  const io = req.app.get("io");

io.emit("tokenHeld", {
  tokenId: token._id,
  tokenNumber: token.tokenNumber,
});
io.emit("analyticsUpdated");
io.emit("queueUpdated");
  res.json(token);
};

export const recallToken = async (
  req,
  res
) => {
  const token =
    await Token.findById(
      req.params.id
    );

  token.status = "serving";

  await token.save();
  const io = req.app.get("io");

io.emit("tokenRecalled", {
  tokenId: token._id,
  tokenNumber: token.tokenNumber,
});
io.emit("analyticsUpdated");
io.emit("queueUpdated");
  res.json(token);
};

export const getTokenStatus = async (req, res) => {
  try {

    const token = await Token.findById(
      req.params.id
    ).populate("branch");

    if (!token) {
      return res.status(404).json({
        message: "Token not found",
      });
    }

    const peopleAhead =
      await Token.countDocuments({
        branch: token.branch._id,
        status: "waiting",
        createdAt: {
          $lt: token.createdAt,
        },
      });

    res.json({
      tokenNumber: token.tokenNumber,
      status: token.status,
      position: peopleAhead + 1,
      peopleAhead,
      branch: token.branch.name,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const getQueueList = async (req, res) => {
  try {

    const tokens = await Token.find({
      status: {
        $in: [
          "waiting",
          "serving",
          "held",
        ],
      },
    })
      .populate("branch", "name")
      .sort({ createdAt: 1 });

    res.json(tokens);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const getCurrentServingToken = async (req, res) => {
  try {

    // const token = await Token.findOne({
    //   status: "serving",
    // });
    const token = await Token.findOne({
    status:"serving"
})
.populate("branch","name");

    res.json(token);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

export const getMyLatestToken = async (req, res) => {
  console.log("getMyLatestToken called");
    console.log(req.user);
  try {
    
    console.log("Logged In User ID:", req.user._id);

    const token = await Token.findOne({
      user: req.user._id,
    })
      .populate("branch", "name")
      .sort({ createdAt: -1 });

    console.log("Token Found:", token);

    if (!token) {
      return res.status(404).json({
        message: "No token found",
      });
    }

    const peopleAhead = await Token.countDocuments({
      branch: token.branch._id,
      status: "waiting",
      createdAt: {
        $lt: token.createdAt,
      },
    });

    res.json({
      tokenId: token._id,
      tokenNumber: token.tokenNumber,
      status: token.status,
      position: peopleAhead + 1,
      peopleAhead,
      branch: token.branch.name,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};


export const getTokenETA = async (req, res) => {

  try {

    const token = await Token.findById(req.params.id);

    if (!token) {

      return res.status(404).json({
        message: "Token not found",
      });

    }

    // Number of waiting users ahead
    const peopleAhead = await Token.countDocuments({

      branch: token.branch,

      status: "waiting",

      createdAt: {
        $lt: token.createdAt,
      },

    });

    // Active counters in this branch
    const activeCounters = await Counter.countDocuments({

      branch: token.branch,

      isActive: true,

    });

    // Total queue size
    const queueLength = await Token.countDocuments({

      branch: token.branch,

      status: {
        $in: [
          "waiting",
          "serving",
          "held",
        ],
      },

    });

    let eta;

    try {

      eta = await predictETA(

        peopleAhead,

        activeCounters,

        queueLength

      );

      console.log("\n========== ML Prediction ==========");
      console.log("Token:", token.tokenNumber);
      console.log("People Ahead:", peopleAhead);
      console.log("Active Counters:", activeCounters);
      console.log("Queue Length:", queueLength);
      console.log("Predicted ETA:", eta, "minutes");
      console.log("===================================\n");

    }

    catch (err) {

      console.log("ML Prediction Failed");
      console.log(err);

      // Fallback ETA
      eta = peopleAhead * 5;

    }

    res.json({

      tokenNumber: token.tokenNumber,

      peopleAhead,

      activeCounters,

      queueLength,

      eta,

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};

export const getLatestToken = async (req, res) => {
  try {
    const latestToken = await Token.findOne({})
      .sort({ createdAt: -1 });

    if (!latestToken) {
      return res.status(404).json({
        message: "No tokens found",
      });
    }

    res.json({
      tokenNumber: latestToken.tokenNumber,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};