import express from 'express';
import UserInput from '../models/user_input.js';

const router = express.Router();

// POST
router.post('/', async (req, res) => { 
    try {
        const { mood, energy, food_status } = req.body;
        const newUserInput = new UserInput({ mood, energy, food_status });
        await newUserInput.save();
        res.status(201).json(newUserInput);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

export default router;