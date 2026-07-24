import Branch from "../models/Branch.js";

export const createBranch = async (req, res) => {
  try {
    const { name, address } = req.body;

    const branch = await Branch.create({
      name,
      address,
    });

    res.status(201).json(branch);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getBranches = async (req, res) => {
  try {
    const branches = await Branch.find();

    res.json(branches);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};