const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [{ type: Schema.Types.ObjectId, ref: "Game", required: true }],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending"
    },
    paymentMethod: { type: String }
  },
  {
    timestamps: true
  }
);

OrderSchema.index({ user: 1 });
OrderSchema.index({ status: 1 });

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
