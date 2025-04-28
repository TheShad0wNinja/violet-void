/// models/Tag.js

// Modified Game.js (only showing the changes)
// Add middleware to update tag counts when a game is saved

// Example utility functions for tag operations

// Create initial tag collection (to be run once)
async function createInitialTags() {
  const initialTags = [
    { name: 'Action', slug: 'action', description: 'Fast-paced games focusing on combat and movement' },
    { name: 'Adventure', slug: 'adventure', description: 'Games focused on exploration and narrative' },
    { name: 'RPG', slug: 'rpg', description: 'Role-playing games with character development' },
    { name: 'Strategy', slug: 'strategy', description: 'Games requiring tactical thinking and planning' },
    { name: 'Simulation', slug: 'simulation', description: 'Games simulating real-world activities' },
    { name: 'Sports', slug: 'sports', description: 'Games based on real-world sports' },
    { name: 'Puzzle', slug: 'puzzle', description: 'Games focused on puzzle solving' },
    { name: 'Indie', slug: 'indie', description: 'Games developed by independent studios' },
    { name: 'Multiplayer', slug: 'multiplayer', description: 'Games featuring online multiplayer modes' },
    { name: 'Singleplayer', slug: 'singleplayer', description: 'Games focused on single-player experience' },
    { name: 'Open World', slug: 'open-world', description: 'Games featuring large, explorable worlds' },
    { name: 'Horror', slug: 'horror', description: 'Games designed to create fear and tension' },
    { name: 'Casual', slug: 'casual', description: 'Games with simple mechanics for quick sessions' },
    { name: 'Racing', slug: 'racing', description: 'Games focused on vehicle racing' },
    { name: 'Shooter', slug: 'shooter', description: 'Games with emphasis on projectile weapons' }
  ];
  
  try {
    await Tag.insertMany(initialTags);
    console.log('Initial tags have been created');
  } catch (error) {
    console.error('Error creating initial tags:', error);
  }
}

// Function to get all available tags
async function getAllTags() {
  return await Tag.find().sort({ name: 1 });
}

// Function to get tags with game counts
async function getTagsWithCounts() {
  return await Tag.find().sort({ gameCount: -1 });
}

// Function to find games by tag
async function getGamesByTag(tagId) {
  return await Game.find({ tags: tagId })
    .populate('tags')
    .sort({ releaseDate: -1 });
}

// Function to get tag statistics
async function getTagStatistics() {
  return await Tag.aggregate([
    {
      $sort: { gameCount: -1 }
    },
    {
      $project: {
        _id: 1,
        name: 1,
        slug: 1,
        gameCount: 1,
        percentage: {
          $multiply: [
            { $divide: ['$gameCount', { $sum: '$gameCount' }] },
            100
          ]
        }
      }
    }
  ]);
}
// models/Game.js

// models/User.js

// models/UserGameActivity.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const UserGameActivitySchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   gameId: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
//   hoursPlayed: { type: Number, default: 0 },
//   lastPlayed: { type: Date },
//   achievements: [{
//     id: { type: String },
//     name: { type: String },
//     description: { type: String },
//     unlockedAt: { type: Date }
//   }]
// }, {
//   timestamps: true
// });
//
// UserGameActivitySchema.index({ userId: 1, gameId: 1 }, { unique: true });
//
// const UserGameActivity = mongoose.model('UserGameActivity', UserGameActivitySchema);
// module.exports = UserGameActivity;

// models/Category.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const CategorySchema = new Schema({
//   name: { type: String, required: true },
//   slug: { type: String, required: true, unique: true },
//   description: { type: String },
//   image: { type: String },
//   gameCount: { type: Number, default: 0 }
// }, {
//   timestamps: true
// });
//
// CategorySchema.index({ slug: 1 }, { unique: true });
//
// const Category = mongoose.model('Category', CategorySchema);
// module.exports = Category;

// models/Review.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const ReviewSchema = new Schema({
//   gameId: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
//   author: {
//     type: { type: String, enum: ['user', 'official'], required: true },
//     id: { type: Schema.Types.ObjectId, ref: 'User' },
//     name: { type: String },
//     avatarUrl: { type: String }
//   },
//   rating: { type: Number, min: 1, max: 5, required: true },
//   title: { type: String },
//   text: { type: String, required: true },
//   likes: { type: Number, default: 0 }
// }, {
//   timestamps: true
// });
//
// ReviewSchema.index({ gameId: 1 });
// ReviewSchema.index({ 'author.id': 1 });
//
// const Review = mongoose.model('Review', ReviewSchema);
// module.exports = Review;

// models/News.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const NewsSchema = new Schema({
//   title: { type: String, required: true },
//   subtitle: { type: String },
//   body: { type: String, required: true },
//   summary: { type: String },
//   image: { type: String },
//   category: { type: String },
//   relatedGames: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
//   likes: { type: Number, default: 0 },
//   views: { type: Number, default: 0 },
//   author: { type: Schema.Types.ObjectId, ref: 'User' },
//   publishDate: { type: Date, default: Date.now }
// }, {
//   timestamps: true
// });
//
// NewsSchema.index({ publishDate: -1 });
// NewsSchema.index({ category: 1 });
//
// const News = mongoose.model('News', NewsSchema);
// module.exports = News;

// models/Guide.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const GuideSchema = new Schema({
//   title: { type: String, required: true },
//   subtitle: { type: String },
//   gameId: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
//   author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   content: { type: String, required: true },
//   sections: [{
//     heading: { type: String },
//     content: { type: String },
//     items: [{ type: String }]
//   }],
//   likes: { type: Number, default: 0 },
//   views: { type: Number, default: 0 },
//   publishDate: { type: Date, default: Date.now }
// }, {
//   timestamps: true
// });
//
// GuideSchema.index({ gameId: 1 });
// GuideSchema.index({ author: 1 });
//
// const Guide = mongoose.model('Guide', GuideSchema);
// module.exports = Guide;

// models/Discussion.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const DiscussionSchema = new Schema({
//   title: { type: String, required: true },
//   body: { type: String, required: true },
//   author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   category: { type: String },
//   upvotes: { type: Number, default: 0 },
//   downvotes: { type: Number, default: 0 },
//   views: { type: Number, default: 0 },
//   tags: [{ type: String }],
//   relatedGames: [{ type: Schema.Types.ObjectId, ref: 'Game' }]
// }, {
//   timestamps: true
// });
//
// DiscussionSchema.index({ author: 1 });
// DiscussionSchema.index({ relatedGames: 1 });
// DiscussionSchema.index({ category: 1 });
//
// const Discussion = mongoose.model('Discussion', DiscussionSchema);
// module.exports = Discussion;
//
// // models/Comment.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const CommentSchema = new Schema({
//   content: { type: String, required: true },
//   author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   parentType: { type: String, enum: ['discussion', 'guide', 'news', 'review'], required: true },
//   parentId: { type: Schema.Types.ObjectId, required: true },
//   upvotes: { type: Number, default: 0 },
//   downvotes: { type: Number, default: 0 }
// }, {
//   timestamps: true
// });
//
// CommentSchema.index({ parentId: 1, parentType: 1 });
// CommentSchema.index({ author: 1 });
//
// const Comment = mongoose.model('Comment', CommentSchema);
// module.exports = Comment;

// models/Screenshot.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const ScreenshotSchema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   imageSrc: { type: String, required: true },
//   gameId: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
//   author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   likes: { type: Number, default: 0 }
// }, {
//   timestamps: true
// });
//
// ScreenshotSchema.index({ gameId: 1 });
// ScreenshotSchema.index({ author: 1 });
//
// const Screenshot = mongoose.model('Screenshot', ScreenshotSchema);
// module.exports = Screenshot;

// models/Artwork.js
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
//
// const ArtworkSchema = new Schema({
//   title: { type: String },
//   imageSrc: { type: String, required: true },
//   gameId: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
//   artist: {
//     id: { type: Schema.Types.ObjectId, ref: 'User' },
//     name: { type: String, required: true },
//     handle: { type: String },
//     profilePic: { type: String }
//   },
//   likes: { type: Number, default: 0 }
// }, {
//   timestamps: true
// });
//
// ArtworkSchema.index({ gameId: 1 });
// ArtworkSchema.index({ 'artist.id': 1 });
//
// const Artwork = mongoose.model('Artwork', ArtworkSchema);
// module.exports = Artwork;

// models/Order.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    gameId: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    finalPrice: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'completed', 'failed', 'refunded'], 
    default: 'pending' 
  },
  paymentMethod: { type: String }
}, {
  timestamps: true
});

OrderSchema.index({ userId: 1 });
OrderSchema.index({ status: 1 });
OrderSchema.index({ createdAt: -1 });

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;

// models/index.js
// module.exports = {
//   Game: require('./Game'),
//   User: require('./User'),
//   UserGameActivity: require('./UserGameActivity'),
//   Category: require('./Category'),
//   Review: require('./Review'),
//   News: require('./News'),
//   Guide: require('./Guide'),
//   Discussion: require('./Discussion'),
//   Comment: require('./Comment'),
//   Screenshot: require('./Screenshot'),
//   Artwork: require('./Artwork'),
//   Order: require('./Order')
// };
