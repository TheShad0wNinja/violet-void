const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    type: {
      type: String,
      enum: ["Base Game", "DLC"],
      default: "Base Game"
    },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    finalPrice: { type: Number, default: 0 },
    releaseDate: { type: Date },
    releaseYear: { type: Number },
    developer: { type: String },
    publisher: { type: String },
    description: { type: String },
    ageRating: { type: String },
    images: {
      cover: { type: String },
      banner: { type: String },
      previews: [{ type: String }]
    },
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    features: [{ type: Schema.Types.ObjectId, ref: "Feature" }],
    requirements: {
      minimum: {
        os: { type: String },
        processor: { type: String },
        memory: { type: String },
        graphics: { type: String },
        storage: { type: String }
      },
      recommended: {
        os: { type: String },
        processor: { type: String },
        memory: { type: String },
        graphics: { type: String },
        storage: { type: String }
      }
    },
    relatedGames: [
      {
        relation: {
          type: String,
          enum: ["Prequel", "Sequel", "Remaster/Remake", "DLC", "Base Game"],
          default: "DLC"
        },
        game: { type: Schema.Types.ObjectId, ref: "Game" }
      }
    ],
    similarGames: [{ type: Schema.Types.ObjectId, ref: "Game" }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

GameSchema.index({ title: 1 });
GameSchema.index({ categories: 1 });

GameSchema.pre("save", async function (next) {
  if (this.price && this.discount) {
    this.finalPrice = this.price * (1 - this.discount / 100);
  } else {
    this.finalPrice = this.price;
  }

  next();
});

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;
