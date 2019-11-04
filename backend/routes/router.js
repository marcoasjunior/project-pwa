const router = require('express')()
const {
    User
} = require('../models')
const {
    Event
} = require('../models')
const {
    User_preference
} = require('../models')
const {
    Event_preference
} = require('../models')
const {
    Preference
} = require('../models')

// registrar usuário

router.post('/register/user', (req, res) => {
    User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            picture: req.body.picture
        }).then(User => res.status(201).send(User))
        .catch(error => res.status(400).send(error))
})


// list all users
router.get('/list/user', (req, res) => {
    User.findAll()
        .then(User => res.status(201).send(User))
        .catch(error => res.status(400).send(error))
})



// pegar usuário pelo id

router.get('/user/:id', (req, res) => {
    User.findAll({
            where: {
                id: req.params.id
            }
        }).then(User => res.status(201).send(User[0]))
        .catch(error => res.status(400).send(error))
})

// update usuário

router.put('/update/user', (req, res) => {
    User.update({
            email: req.body.email,
            password: req.body.password
        },

            {
                where: {
                id: req.body.id
                }
            }).then(() => res.status(201).send("Usuário alterado"))
        .catch(error => res.status(400).send(error))
})

// pegar preferencias do usuario

router.get('/user/preferences/:id', (req, res) => {
    User_preference.findAll({
            where: {
                iduser: req.params.id
            }
        }).then(User_preference => res.status(201).send(User_preference))
        .catch(error => res.status(400).send(error))
})


// registrar evento

router.post('/register/event', (req, res) => {
    Event.create({
            name: req.body.name,
            local: req.body.local,
            picture: req.body.picture,
            edate: req.body.edate,
            address: req.body.address,
            UserId: req.body.UserId,
        }, {
            include: [User]
        }).then(Event => res.status(201).send(Event))
        .catch(error => res.status(400).send(error))

})

// pegar evento pelo id

router.get('/event/:id', (req, res) => {
    Event.findAll({
            where: {
                id: req.params.id
            }
        }).then(Event => res.status(201).send(Event))
        .catch(error => res.status(400).send(error))
})

// pegar todos os eventos


router.get('/eventall', (req, res) => {
    Event.findAll()
        .then(Event => res.status(201).send(Event))
        .catch(error => res.status(400).send(error))
})




// update evento - precisa fazer algumas validações

router.put('/event/update', (req, res) => {
    Event.update({
            name: req.body.name,
            local: req.body.local,
            picture: req.body.picture,
            edate: req.body.edate,
            adress: req.body.adress,

            where: {
                idevent: req.body.id
            }
        }).then(Event => res.status(201).send(Event))
        .catch(error => res.status(400).send(error))


})

// pegar eventos com preferencias

router.get('/event/preferences/:id', (req, res) => {
    Event_preference.findAll({
            where: {
                idevent: req.params.id
            }
        }).then(Event_preference => res.status(201).send(Event_preference))
        .catch(error => res.status(400).send(error))
})

// deletar evento

router.delete('/event/delete/:id', (req, res) => {
    Event.destroy({
            where: {
                idevent: req.params.id
            }
        }).then(Event => res.status(201).send(Event))
        .catch(error => res.status(400).send(error))
})

// update preference

router.put('/preference/update', (req, res) => {
    Preference.update({
            preference: req.body.preference,
            where: {
                idpreference: req.body.id
            }
        }).then(Preference => res.status(201).send(Preference))
        .catch(error => res.status(400).send(error))
})

// pegar preference

router.get('/preference/:id', (req, res) => {
    Preference.findAll({
            where: {
                idpreference: req.params.id
            }
        }).then(Preference => res.status(201).send(Preference))
        .catch(error => res.status(400).send(error))
})

// criar preference

router.post('/register/preference', (req, res) => {
    Preference.create({
            preference: req.body.preference,
        }).then(Preference => res.status(201).send(Preference))
        .catch(error => res.status(400).send(error))
})

module.exports = router