const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    displayName: { type: String },
    bio: { type: String },
    location: { type: String },
    gamesPlayed: { type: Number, default: 0 },
    role: { type: String, enum: ["user", "admin", "studio", "reviewer"], default: "user" },
    library: [{ type: Schema.Types.ObjectId, ref: "Game" }],
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Game" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Hide password when converting to JSON
UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ username: 1 }, { unique: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;
