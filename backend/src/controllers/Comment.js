const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    parentType: { type: String, enum: ["discussion", "guide", "news", "review"], required: true },
    parentId: { type: Schema.Types.ObjectId, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

CommentSchema.index({ parentId: 1, parentType: 1 });
CommentSchema.index({ author: 1 });

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
