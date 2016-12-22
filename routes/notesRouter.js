const express = require('express');
const notesRouter = express.Router();

const Note = require('../models/note');
const NoteController = require('../controllers/notecontroller.js');

// Get all Notes
notesRouter.get('/notes', NoteController.GetNote);

// Create new Note
notesRouter.post('/notes', NoteController.PostNote);

// Delete a Note based on :id
notesRouter.delete('/notes/:id', NoteController.DeleteNote);

// Update a Note based on :id
notesRouter.put('/notes/:id', NoteController.UpdateNote);

module.exports = notesRouter;