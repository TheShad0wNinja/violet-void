const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    relatedGames: [{ type: Schema.Types.ObjectId, ref: "Game" }]
  },
  {
    timestamps: true
  }
);

DiscussionSchema.index({ author: 1 });
DiscussionSchema.index({ relatedGames: 1 });
DiscussionSchema.index({ category: 1 });

const Discussion = mongoose.model("Discussion", DiscussionSchema);
module.exports = Discussion;
