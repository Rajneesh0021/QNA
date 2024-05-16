const express = require('express');
const Question = require('../model/questionModel');

const router = express.Router();

// GET all questions
router.get('/question', async (req, res) => {
    try {
        const questions = await Question.find().select('-_id -__v ');
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new question
router.post('/question', async (req, res) => {
    const question = new Question({
        text: req.body.text,
        audioUrl: req.body.audioUrl,
        options: req.body.options,
        correctOption: req.body.correctOption
    });

    try {
        const newQuestion = await question.save();
        res.status(201).json(newQuestion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a question by ID
router.delete('/question/:id', async (req, res) => {
    try {
      const deletedQuestion = await Question.findOneAndDelete({ id: req.params.id });
        if (!deletedQuestion) {
            return res.status(404).json({ message: "Question not found" });
        }
        res.json({ message: "Question deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
