const Note = require('../models/note');

    const NoteController = {
        // Get all Notes from the Database
        GetNote: function(req, res){
            Note.find({}, function(err, notes){
              if(err) {
                res.json({result: {success: false, error: "Something went wrong"}});
                return;
              }
              res.status(200).json({success: true, result: notes});
            });
        },
        //Post a Note into Database
        PostNote: function(req, res){
           const note = new Note(req.body);
           note.save(function(err, note){
              if(err) {
                res.json({success: false, error: "Something went wrong"});
                return;
              }
              res.status(201).json({result: {success: true}});
            });
        },
        //Updating a Note status based on an ID
        UpdateNote: function(req, res){
            const completed = req.body.completed;
            Note.findById(req.params.id, function(err, note){
            Note.completed = completed;
            Note.save(function(err, note){
              if(err) {
                res.json({success: false, error: "Status not updated"});
              }
              res.status(204).json({result: {success: true}});
              });
            });
        },
        // Deleting a Note baed on an ID
        DeleteNote: function(req, res){
          Note.remove({_id: req.params.id}, function(err, notes){
            if(err) {
              res.json({success: false, error: "Deleting Note is not successfull"});
              return;
            }
            res.status(204).json({result:{success: true}});
          });
        }
    }

module.exports = NoteController;