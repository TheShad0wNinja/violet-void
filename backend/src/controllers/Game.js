const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    type: {
      type: String,
      enum: ["Base Game", "DLC", "Expansion", "Bundle", "Add-On"],
      default: "Base Game"
    },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    finalPrice: { type: Number, default: 0 },
    rating: { type: Double, default: 0, min: 1, max: 5 },
    releaseDate: { type: Date },
    releaseYear: { type: Number },
    developer: { type: String },
    publisher: { type: String },
    description: { type: String },
    ageRating: { type: String },
    playersAmount: { type: String },
    images: {
      cover: { type: String },
      banner: { type: String },
      previews: [{ type: String }]
    },
    platforms: [{ type: String }],
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
    features: [{ type: String }],
    requirements: {
      minimum: {
        os: { type: String },
        processor: { type: String },
        memory: { type: String },
        graphics: { type: String }
      },
      recommended: {
        os: { type: String },
        processor: { type: String },
        memory: { type: String },
        graphics: { type: String }
      }
    },
    dlcs: [{ type: Schema.Types.ObjectId, ref: "Game" }],
    similarGames: [{ type: Schema.Types.ObjectId, ref: "Game" }],
    ranking: { type: Number, sparse: true }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// // Pre-save hook to calculate finalPrice
// GameSchema.pre("save", function (next) {
//   if (this.price && this.discount) {
//     this.finalPrice = this.price * (1 - this.discount / 100);
//   } else {
//     this.finalPrice = this.price;
//   }
//   next();
// });
//
// // Virtual for reviews
// GameSchema.virtual("reviews", {
//   ref: "Review",
//   localField: "_id",
//   foreignField: "gameId"
// });

// Indexes
GameSchema.index({ title: 1 });
GameSchema.index({ slug: 1 }, { unique: true });
GameSchema.index({ categories: 1 });
GameSchema.index({ ranking: 1 });

GameSchema.pre("save", async function (next) {
  if (this.price && this.discount) {
    this.finalPrice = this.price * (1 - this.discount / 100);
  } else {
    this.finalPrice = this.price;
  }

  // If categories are modified, update category counts
  if (this.isModified("categories")) {
    const Category = mongoose.model("Category");

    // If this is not a new document, get the old categories to decrease their counts
    if (!this.isNew) {
      const oldDoc = await this.constructor.findById(this._id);
      if (oldDoc && oldDoc.categories) {
        // Decrease count for categories that were removed
        const removedCategories = oldDoc.categories.filter(
          category => !this.categories.includes(category.toString())
        );
        if (removedCategories.length > 0) {
          await Category.updateMany(
            { _id: { $in: removedCategories } },
            { $inc: { gameCount: -1 } }
          );
        }
      }
    }

    // Increase count for new categories
    const newCategories = this.isNew
      ? this.categories
      : this.categories.filter(category => {
          const oldDoc = this.constructor.findById(this._id);
          return !oldDoc.categories || !oldDoc.categories.includes(category.toString());
        });

    if (newCategories.length > 0) {
      await Category.updateMany({ _id: { $in: newCategories } }, { $inc: { gameCount: 1 } });
    }
  }

  next();
});

// Also handle category counts on deletion
GameSchema.pre("remove", async function (next) {
  if (this.categories && this.categories.length > 0) {
    const Category = mongoose.model("Category");
    await Category.updateMany({ _id: { $in: this.categories } }, { $inc: { gameCount: -1 } });
  }
  next();
});

const Game = mongoose.model("Game", GameSchema);
module.exports = Game;
