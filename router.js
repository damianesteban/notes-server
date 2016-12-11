const express = require('express');
const router = express.Router();

const Note = require('./models/note');
const NoteController = require('./controllers/notecontroller.js')//(Note);

// Get all Notes
router.get('/note', NoteController.GetNote);

// Create new Note
router.post('/note', NoteController.PostNote);

// Delete a Note based on :id
router.delete('/note/:id', NoteController.DeleteNote);

// Update a Note based on :id
router.put('/note/:id', NoteController.UpdateNote);

module.exports = router;