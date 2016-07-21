import mongoose from 'mongoose';

const repertoireSchema = new mongoose.Schema({
    nom: String, prenom: String, telephone: String
});

let model = mongoose.model('Repertoire', repertoireSchema);

export default class Repertoire {

    findAll(req, res) {
        model.find({}, (err, todos) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(todos);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, todo) => {
            if (err || !todo) {
                res.sendStatus(403);
            } else {
                res.json(todo);
            }
        });
    }

    create(req, res) {
        model.create({
                nom: req.body.nom, prenom: req.body.prenom, telephone:req.body.telephone
            },
            (err, todo) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(todo);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            nom: req.body.nom, prenom: req.body.prenom, telephone:req.body.telephone
        }, (err, todo) => {
            if (err || !todo) {
                res.status(500).send(err.message);
            } else {
                res.json(todo);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}
