const Pet = require('../models/pet');
const express = require('express');
const multer = require('multer')
const router = express.Router();
const upload = multer({ dest: 'uploads/' })

router.post('/pet/new', upload.single('image'), (req, res) => {
    Pet.create({
        name: req.body.name,
        type: req.body.type,
        image: req.file.image,
        description: req.body.description
    }, (err, pet) => {
        if (err) {
            console.log('CREATE error: ' + err);
            res.status(500).send('Error')
        } else {
            res.status(200).json(pet)
        }
    })
})

router.get('/pets', (req, res) => {
    console.log('stuff')
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