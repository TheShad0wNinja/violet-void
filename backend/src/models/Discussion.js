const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: false },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    game: { type: Schema.Types.ObjectId, ref: "Game", required: false },
    image: { type: String }
  },
  {
    timestamps: true
  }
);

DiscussionSchema.index({ author: 1 });
DiscussionSchema.index({ game: 1 });
DiscussionSchema.index({ category: 1 });

const Discussion = mongoose.model("Discussion", DiscussionSchema);
module.exports = Discussion;
