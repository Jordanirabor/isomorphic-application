const Pet = require('../models/pet');
const express = require('express');
const path = require('path')
const multer = require('multer')
const crypto = require('crypto')
const router = express.Router();

const storage = multer.diskStorage({
    destination: 'public',
    filename: (req, file, callback) => {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return callback(err);
            callback(null, raw.toString('hex') + path.extname(file.originalname));
        });
    }
});

let upload = multer({ storage: storage })

router.post('/pet/new', upload.single('image'), (req, res) => {
    if (!req.file) {

        console.log("Please include a pet image");
        return res.send({
            success: false
        });

    } else {
        const host = req.get('host')
        const imageUrl = req.protocol + "://" + host + '/' + req.file.path;

        Pet.create({
            name: req.body.name,
            type: req.body.type,
            description: req.body.description,
            imageUrl
        }, (err, pet) => {
            if (err) {
                console.log('CREATE error: ' + err);
                res.status(500).send('Error')
            } else {
                res.status(200).json(pet)
            }
        })
    }
})

router.get('/pets', (req, res) => {
    const pets = Pet.find({}, (err, pets) => {
        if (err) {
            console.log('RETRIEVE error: ' + err);
            res.status(500).send('Error');
        } else if (pets) {
            res.status(200).json(pets);
        }
    })
})

module.exports = router;