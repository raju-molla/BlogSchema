const mongoose= require('mongoose');
const {Schema}= mongoose;

const blogSchema = new Schema({
    title: {
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String
    },
    comment: [{
        type:Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

module.exports=mongoose.model('blog',blogSchema)