const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../dist/img'))
      },

        filename: function (req, file, cb) {
          cb(null, Date.now() + '-' + file.originalname)
        }
      })

module.exports = storage