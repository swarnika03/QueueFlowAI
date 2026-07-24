import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema(
  {
    tokenNumber: {
      type: String,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: true,
    },

    counter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Counter",
    },

    status: {
      type: String,
      enum: [
        "waiting",
        "serving",
        "held",
        "skipped",
        "completed",
        "missed",
        "cancelled",
      ],
      default: "waiting",
    },

    priority: {
      type: Number,
      default: 0,
    },

    generatedAt: {
      type: Date,
      default: Date.now,
    },

    servingAt: Date,
    completedAt: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Token",
  tokenSchema
);