/* eslint-disable no-console */
const router = require('express')()
const multer = require('multer')
const storage = require('../config/multer')
const upload = multer({
    storage: storage
})
const cloudinary = require('cloudinary').v2
// const cloudConfig = require('../config/cloudinary')
const uniqueFilename = new Date().toISOString()
// var bcrypt = require('bcrypt-nodejs');

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

    User.findOrCreate({
            where: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }

        })
        .then(([User, created]) => {


                console.log(User.get({
                    plain: true
                }))
                console.log(User.dataValues)

                if (created == true) {
                    console.log("usuário criado")
                    res.send(User)
                } else if (User.dataValues.email == req.body.email) {
                    console.log("email já cadastrado")
                    res.send("email_alredy_exist")
                }

                // else{
                //     console.log(" usuario cadastrado ")
                // }



                // if(User.dataValues){}

                // console.log(created.dataValues)

            }

            // , res.send()

        )
})


// list all users
router.get('/list/user', (req, res) => {
    User.findAll()
        .then(User => res.status(201).send(User))
        .catch(error => res.status(400).send(error))
})



// pegar usuário pelo id

router.get('/user/:idc', (req, res) => {
    User.findAll({
            where: {
                id: req.params.idc
            }
        }).then(User => res.status(201).send(User[0]))
        .catch(error => res.status(400).send(error))
})
// ============================================================

// pegar avatar do usuario


router.get('/avatar/:idc', (req, res) => {
    Event.findAll({
        attributes: ['UserId'],
        where: {
            id: req.params.idc
        },
        include: [{
            model: User,
            required: true,
            
        }]
    }).then(User => res.json(User[0].User.picture))
});

// ============================================================


router.post('/login/user', (req, res) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        }).then((User) => {
            console.log(User.dataValues);
            console.log(req.body.password);

            if (req.body.email) {

                if (req.body.password == User.dataValues.password) {
                    res.send(User).send("user_valid")
                } else {
                    res.send("user_not_valid")
                }
            } else {
                res.send("email_not_found")
            }


        })
        .catch(error => res.send(error))
})

// ============================================================
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

// update usuário IMAGEM

router.put('/update/user/image', upload.single('file'), (req, res) => {

    // SEND FILE TO CLOUDINARY

    cloudinary.config({
        cloud_name: 'dvzbogxib',
        api_key: '564392447589239',
        api_secret: 'lBY9lvTcbNawz-AyvEg9WMW_ga8'
    })

    cloudinary.uploader.upload(req.file.path, {
            public_id: `users/${uniqueFilename}`
        },

        function (err, image) {
            if (err) res.send(err)
            // eslint-disable-next-line no-console
            console.log('file uploaded to Cloudinary')
            // remove file from server
            const fs = require('fs')
            fs.unlinkSync(req.file.path)
            // return image details
            res.json(image)
            // eslint-disable-next-line no-console
            console.log(image.url)

            User.update({
                    picture: image.url,
                },

                {
                    where: {
                        id: req.body.id
                    }
                })
        }
    )


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
            addres: req.body.addres,
            UserId: req.body.UserId,
        }, {

            // incluindo o usuário na tabela de evento 
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

// pegar todos os eventos ORDER BY DESC


router.get('/eventall', (req, res) => {
    Event.findAll({
            order: [
                ['id', 'DESC'],
            ],
        })
        .then(Event => res.status(201).send(Event))
        .catch(error => res.status(400).send(error))
})

// pegar todos os criados pelo usuario


router.get('/eventall/:id', (req, res) => {
    Event.findAll({
            where: {
                UserId: req.params.id
            }
        })
        .then(Event => res.status(201).send(Event))
        .catch(error => res.status(400).send(error))
})


// update evento 

router.put('/updwwate/event', upload.single('file'), (req, res) => {

    // SEND FILE TO CLOUDINARY

    cloudinary.config({
        cloud_name: 'dvzbogxib',
        api_key: '564392447589239',
        api_secret: 'lBY9lvTcbNawz-AyvEg9WMW_ga8'
    })
    console.log(req.body.file.path);
    // console.log()

    
    cloudinary.uploader.upload(req.body.file.path, {
            public_id: `users/${uniqueFilename}`
        },

        function (err, image) {
            if (err) res.send(err)
            // eslint-disable-next-line no-console
            console.log('file uploaded to Cloudinary')
            // remove file from server
            const fs = require('fs')
            fs.unlinkSync(req.body.file.path)
            // return image details
            res.json(image)
            // eslint-disable-next-line no-console
            console.log(image.url)

            Event.update({
                name: req.body.name,
                local: req.body.local,
                address: req.body.address,
                picture: image.url,
                edate: req.body.edate
            }, {
                where: {
                    id: req.body.id
                }
            })
        }
    )
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

router.get('/tags/preferences', (req, res) => {
    Preference.findAll({
            preference: req.body.preference,
        }).then(Preference => res.send(Preference))
        .catch(error => res.status(400).send(error))
})



router.post('/create/event', upload.single('file'), (req, res) => {

    // SEND FILE TO CLOUDINARY

    cloudinary.config({
        cloud_name: 'dvzbogxib',
        api_key: '564392447589239',
        api_secret: 'lBY9lvTcbNawz-AyvEg9WMW_ga8'
    })

    cloudinary.uploader.upload(req.file.path, {
            public_id: `users/${uniqueFilename}`
        },

        function (err, image) {
            if (err) res.send(err)
            // eslint-disable-next-line no-console
            console.log('file uploaded to Cloudinary')
            // remove file from server
            const fs = require('fs')
            fs.unlinkSync(req.file.path)
            // return image details
            res.json(image)
            // eslint-disable-next-line no-console
            console.log(image.url)

            Event.create({
                    name: req.body.name,
                    local: req.body.local,
                    edate: req.body.edate,
                    address: req.body.address,
                    UserId: req.body.UserId,
                    picture: image.url,
                },

                // {
                //     where: {
                //         id: req.body.id
                //     }
                // }
                
                )
        }
    )


})









module.exports = router