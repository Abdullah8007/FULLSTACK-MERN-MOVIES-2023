import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options.js";

export default mongoose.model(
    "Review",
    mongoose.Schema({
        user: {
            type: Schema.Types.ObjectID,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        mediaType: {
            type: String,
            enum: ["tv", "movie"],
            required: true,
        },
        medeaID: {
            type: String,
            required: true,
        },
        mediaTitle: {
            type: String,
            required: true,
        },
        mediaPoster: {
            type: String,
            required: true,
        },
    }, modelOptions)
)