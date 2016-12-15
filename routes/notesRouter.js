const express = require('express');
const notesRouter = express.Router();

const Note = require('../models/note');
const NoteController = require('../controllers/notecontroller.js')//(Note);

// Get all Notes
notesRouter.get('/note', NoteController.GetNote);

// Create new Note
notesRouter.post('/note', NoteController.PostNote);

// Delete a Note based on :id
notesRouter.delete('/note/:id', NoteController.DeleteNote);

// Update a Note based on :id
notesRouter.put('/note/:id', NoteController.UpdateNote);

module.exports = notesRouter;