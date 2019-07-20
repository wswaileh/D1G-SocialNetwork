import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name: String,
    topic: String,
    content: String
});

export {postSchema};