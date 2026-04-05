import mongoose from "mongoose";

const userInputSchema = new mongoose.Schema({
    mood: Number,
    energy: Number,
    food_status: Number,
}, { timestamps: true});

const UserInput = mongoose.model("UserInput", userInputSchema);

export default UserInput;