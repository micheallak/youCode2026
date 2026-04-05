import express from 'express';
import UserInput from '../models/user_input.js';

const router = express.Router();

// POST
router.post('/', async (req, res) => { 
    try {
        const { clientSubmissionId, mood, energy, food_status } = req.body;
        if (!clientSubmissionId) {
            return res.status(400).json({ message: "clientSubmissionId is required" });
        }
        const existing = await UserInput.findOne({ clientSubmissionId });
        if (existing) {
            return res.status(200).json({
                message: "Already exists",
                data: existing
            });
        }
        const newUserInput = new UserInput({ clientSubmissionId, mood, energy, food_status });
        await newUserInput.save();
        res.status(201).json(newUserInput);
    } catch (error) {
        console.error("Error saving:", error);
        res.status(500).json({ message: error.message });
    }
})

// GET
router.get('/', async (req, res) => {
    try {
        const userInputs = await UserInput.find();
        res.json(userInputs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;