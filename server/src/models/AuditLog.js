import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema(
  {
    token: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Token",
    },

    action: {
      type: String,
      required: true,
    },

    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    notes: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "AuditLog",
  auditLogSchema
);