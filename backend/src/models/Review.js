const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
    title: { type: String },
    text: { type: String, required: true },
    likes: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

ReviewSchema.index({ game: 1 });
ReviewSchema.index({ author: 1 });

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;
