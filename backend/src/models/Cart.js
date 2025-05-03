const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [{ type: Schema.Types.ObjectId, ref: "Game", required: true }]
  },
  {
    timestamps: true
  }
);

CartSchema.index({ user: 1 });

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;
