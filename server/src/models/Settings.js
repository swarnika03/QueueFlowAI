import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    averageServiceTime: {
      type: Number,
      default: 5,
    },

    notifications: {
      email: {
        type: Boolean,
        default: true,
      },

      browser: {
        type: Boolean,
        default: true,
      },

      sound: {
        type: Boolean,
        default: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Settings", settingsSchema);