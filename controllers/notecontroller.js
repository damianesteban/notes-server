const Note = require('../models/note');

    const NoteController = {
        // Get all Notes from the Database
        GetNote: function(req, res){
            Note.find({}, function(err, notes){
              if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
              }
              res.json({status: true, note: notes});
            });
        },
        //Post a Note into Database
        PostNote: function(req, res){
           const note = new Note(req.body);
           note.save(function(err, note){
              if(err) {
                res.json({status: false, error: "Something went wrong"});
                return;
              }
              res.json({status: true, message: "Note Saved!!"});
            });
        },
        //Updating a Note status based on an ID
        UpdateNote: function(req, res){
            const completed = req.body.completed;
            Note.findById(req.params.id, function(err, note){
            Note.completed = completed;
            Note.save(function(err, note){
              if(err) {
                res.json({status: false, error: "Status not updated"});
              }
              res.json({status: true, message: "Status updated successfully"});
            });
            });
        },
        // Deleting a Note baed on an ID
        DeleteNote: function(req, res){
          Note.remove({_id: req.params.id}, function(err, notes){
            if(err) {
              res.json({status: false, error: "Deleting Note is not successfull"});
              return;
            }
            res.json({status: true, message: "Note deleted successfully!!"});
          });
        }
    }

module.exports = NoteController;