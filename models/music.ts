import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: [{ type: String, required: true }],
  featuringArtist: [{ type: String }],
  views: { type: Number, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
  url: { type: String, required: true },
  description: { type: String },
  rating: { type: String },
  content: [{ type: String }],
  notes: { type: String },
  isAgeRestricted: { type: String, required: true },
  safeAlternative: { type: String },
});

const Music = mongoose.models.Music || mongoose.model("Music", MusicSchema);

export default Music;
