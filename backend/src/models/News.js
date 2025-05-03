const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    body: { type: String, required: true },
    summary: { type: String },
    image: { type: String },
    category: { type: String, enum: ["update", "event", "announcement"], required: true },
    likes: { type: Number, default: 0 },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    relatedGames: [{ type: Schema.Types.ObjectId, ref: "Game" }],
    pinned: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

NewsSchema.index({ category: 1 });

const News = mongoose.model("News", NewsSchema);
module.exports = News;
