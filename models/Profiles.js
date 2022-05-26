const mongoose = require ('mongoose');

const ProfileSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
      },
    
      userName: {
        type: String,
        required: true
      },
      userImage: {
        type: String,
        required: true
      },
      postPic: {
        type: String,
        required: true
      },
      caption: {
        type: String,
        required: true
      },
      fav: {
        type: Boolean,
        required: true,
      },
      btnFill: {
        type: String,
        required: true,
      }


})


module.exports = mongoose.models.Post||mongoose.model('Post',ProfileSchema);