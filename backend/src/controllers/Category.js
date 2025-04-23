const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    gameCount: { type: Number, default: 0, min: 0 }
  },
  {
    timestamps: true
  }
);

CategorySchema.index({ slug: 1 }, { unique: true });

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
