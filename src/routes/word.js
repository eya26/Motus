const express = require('express');
const Router = express.Router();

const WordModel = require('../models/word');

Router.post('/', async (request, response) => {
    const { word } = request.body;

    const wordModel = new WordModel({
        name: word
    });

    try {
        await wordModel.save();

        return response.status(200).json({
            "msg": word
        });
    } catch (error) {
        return response.status(500).json({
            "error": error.message
        });
    }
});

Router.get('/', async (request, response) => {
    try {
        const words = await WordModel.find();

        return response.status(200).json({
            "words": words
        });
    } catch (error) {
        return response.status(500).json({
            "error": error.message
        });
    }
});


Router.get('/:id', async (request, response) => {
    const { id } = request.params;

    try {
        const word = await WordModel.findById(id);

        if (!word) {
            return response.status(404).json({
                "msg": "Word not found"
            });
        }

        return response.status(200).json({
            "word": word
        });
    } catch (error) {
        return response.status(500).json({
            "error": error.message
        });
    }
});

Router.put('/:id', async (request, response) => {
    const { id } = request.params;
    const { word } = request.body;

    try {
        const updatedWord = await WordModel.findByIdAndUpdate(id, { name: word }, { new: true });

        if (!updatedWord) {
            return response.status(404).json({
                "msg": "Word not found"
            });
        }

        return response.status(200).json({
            "msg": "Word updated successfully",
            "word": updatedWord
        });
    } catch (error) {
        return response.status(500).json({
            "error": error.message
        });
    }
});

Router.delete('/:id', async (request, response) => {
    const { id } = request.params;

    try {
        const deletedWord = await WordModel.findByIdAndRemove(id);

        if (!deletedWord) {
            return response.status(404).json({
                "msg": "Word not found"
            });
        }

        return response.status(200).json({
            "msg": "Word deleted successfully",
            "word": deletedWord
        });
    } catch (error) {
        return response.status(500).json({
            "error": error.message
        });
    }
});

module.exports = Router;
