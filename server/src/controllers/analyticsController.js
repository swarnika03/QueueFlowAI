// import Token from "../models/Token.js";
// import User from "../models/User.js";
// import Counter from "../models/Counter.js";

// export const getDashboardAnalytics = async (req, res) => {
//   try {
//     // ----------------------------
//     // KPI Cards
//     // ----------------------------

//     const totalUsers = await User.countDocuments();

//     const totalTokens = await Token.countDocuments();

//     const activeCounters = await Counter.countDocuments({
//       isActive: true,
//     });

//     // ----------------------------
//     // Average Wait Time
//     // ----------------------------

//     const servedTokens = await Token.find({
//       servingAt: { $ne: null },
//     });

//     let totalWait = 0;

//     servedTokens.forEach((token) => {
//       totalWait +=
//         (new Date(token.servingAt) -
//           new Date(token.generatedAt)) /
//         (1000 * 60);
//     });

//     const averageWaitTime =
//       servedTokens.length > 0
//         ? Math.round(totalWait / servedTokens.length)
//         : 0;

//     // ----------------------------
//     // Daily Tokens (Last 7 Days)
//     // ----------------------------

//     const dailyTokens = [];

//     const waitTrend = [];

//     for (let i = 6; i >= 0; i--) {

//       const start = new Date();

//       start.setHours(0, 0, 0, 0);

//       start.setDate(start.getDate() - i);

//       const end = new Date(start);

//       end.setDate(end.getDate() + 1);

//       const tokens = await Token.find({
//         generatedAt: {
//           $gte: start,
//           $lt: end,
//         },
//       });

//       dailyTokens.push({
//         day: start.toLocaleDateString("en-US", {
//           weekday: "short",
//         }),
//         tokens: tokens.length,
//       });

//       const servedToday = tokens.filter(
//         (t) => t.servingAt
//       );

//       let wait = 0;

//       servedToday.forEach((t) => {
//         wait +=
//           (new Date(t.servingAt) -
//             new Date(t.generatedAt)) /
//           (1000 * 60);
//       });

//       waitTrend.push({
//         day: start.toLocaleDateString("en-US", {
//           weekday: "short",
//         }),
//         wait:
//           servedToday.length > 0
//             ? Math.round(wait / servedToday.length)
//             : 0,
//       });

//     }

//     // ----------------------------
//     // Completion Pie Chart
//     // ----------------------------

//     const completed = await Token.countDocuments({
//       status: "completed",
//     });

//     const skipped = await Token.countDocuments({
//       status: "skipped",
//     });

//     const missed = await Token.countDocuments({
//       status: "missed",
//     });

//     const completionData = [
//       {
//         name: "Completed",
//         value: completed,
//       },
//       {
//         name: "Skipped",
//         value: skipped,
//       },
//       {
//         name: "Missed",
//         value: missed,
//       },
//     ];

//     // ----------------------------

//     res.json({
//       totalUsers,
//       totalTokens,
//       averageWaitTime,
//       activeCounters,
//       dailyTokens,
//       waitTrend,
//       completionData,
//     });

//   } catch (error) {

//     console.log(error);

//     res.status(500).json({
//       message: "Analytics Error",
//     });

//   }
// };




import Token from "../models/Token.js";
import User from "../models/User.js";
import Counter from "../models/Counter.js";

export const getDashboardAnalytics = async (req, res) => {
  try {

    // ============================
    // KPI Cards
    // ============================

    const totalUsers = await User.countDocuments();

    const totalTokens = await Token.countDocuments();

    const activeCounters = await Counter.countDocuments({
      isActive: true,
    });

    // Status Counts

    const waitingTokens = await Token.countDocuments({
      status: "waiting",
    });

    const servingTokens = await Token.countDocuments({
      status: "serving",
    });

    const completedTokens = await Token.countDocuments({
      status: "completed",
    });

    const heldTokens = await Token.countDocuments({
      status: "held",
    });

    // ============================
    // Average Wait Time
    // ============================

    const servedTokens = await Token.find({
      servingAt: { $ne: null },
    });

    let totalWait = 0;

    servedTokens.forEach((token) => {
      totalWait +=
        (new Date(token.servingAt) -
          new Date(token.generatedAt)) /
        (1000 * 60);
    });

    const averageWaitTime =
      servedTokens.length > 0
        ? Math.round(totalWait / servedTokens.length)
        : 0;

    // ============================
    // Daily Tokens
    // ============================

    const dailyTokens = [];

    const waitTrend = [];

    for (let i = 6; i >= 0; i--) {

      const start = new Date();

      start.setHours(0, 0, 0, 0);

      start.setDate(start.getDate() - i);

      const end = new Date(start);

      end.setDate(end.getDate() + 1);

      const tokens = await Token.find({
        generatedAt: {
          $gte: start,
          $lt: end,
        },
      });

      dailyTokens.push({
        day: start.toLocaleDateString("en-US", {
          weekday: "short",
        }),
        tokens: tokens.length,
      });

      const servedToday = tokens.filter(
        (t) => t.servingAt
      );

      let wait = 0;

      servedToday.forEach((t) => {
        wait +=
          (new Date(t.servingAt) -
            new Date(t.generatedAt)) /
          (1000 * 60);
      });

      waitTrend.push({
        day: start.toLocaleDateString("en-US", {
          weekday: "short",
        }),
        wait:
          servedToday.length > 0
            ? Math.round(wait / servedToday.length)
            : 0,
      });
    }

    // ============================
    // Pie Chart
    // ============================

    const completionData = [
      {
        name: "Waiting",
        value: waitingTokens,
      },
      {
        name: "Serving",
        value: servingTokens,
      },
      {
        name: "Completed",
        value: completedTokens,
      },
      {
        name: "Held",
        value: heldTokens,
      },
    ];

    // ============================
    // Completion Rate
    // ============================

    const completionRate =
      totalTokens === 0
        ? 0
        : Math.round(
            (completedTokens / totalTokens) * 100
          );

    // ============================

    res.json({

      totalUsers,

      totalTokens,

      activeCounters,

      averageWaitTime,

      waitingTokens,

      servingTokens,

      completedTokens,

      heldTokens,

      completionRate,

      dailyTokens,

      waitTrend,

      completionData,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Analytics Error",
    });

  }
};