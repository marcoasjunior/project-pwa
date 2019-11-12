const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../frontend/src/assets'))
      },

        filename: function (req, file, cb) {
          cb(null, Date.now() + '-' + file.originalname)
        }
      })

module.exports = storage
