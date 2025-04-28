const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScreenshotSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    imageSrc: { type: String, required: true },
    game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    likes: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

ScreenshotSchema.index({ game: 1 });
ScreenshotSchema.index({ author: 1 });

const Screenshot = mongoose.model("Screenshot", ScreenshotSchema);
module.exports = Screenshot;
