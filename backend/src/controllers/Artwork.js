const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtworkSchema = new Schema(
  {
    title: { type: String },
    imageSrc: { type: String, required: true },
    game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
    artist: { type: Schema.Types.ObjectId, ref: "User", required: true  },
    likes: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

ArtworkSchema.index({ game: 1 });
ArtworkSchema.index({ artist: 1 });

const Artwork = mongoose.model("Artwork", ArtworkSchema);
module.exports = Artwork;
