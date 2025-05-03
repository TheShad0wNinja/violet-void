const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeatureSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
  },
  {
    timestamps: true
  }
);

const Feature = mongoose.model("Feature", FeatureSchema);
module.exports = Feature;
