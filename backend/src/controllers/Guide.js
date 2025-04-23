const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GuideSchema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    summary: { type: String, required: true },
    sections: [
      {
        heading: { type: String },
        content: { type: String },
        items: [{ type: String }]
      }
    ],
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true
  }
);

GuideSchema.index({ game: 1 });
GuideSchema.index({ author: 1 });

const Guide = mongoose.model("Guide", GuideSchema);
module.exports = Guide;
