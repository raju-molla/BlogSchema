const Blog= require('../models/blog');
const Comment = require('../models/comment');

const Post = async(req,res)=>{
    try{
        const blog= new Blog(req.body);
        const data = await blog.save();


        res.json({
            mgs: "successful",
            data
        })
    }
    catch(err){
        res.send(err);
    }
}

const commnets= async(req,res)=>{
    try{
    
        const id= req.params.id;
        const cmnts= new Comment(req.body);
        const data = await cmnts.save();
        
        await Blog.findOneAndUpdate(
            {_id:id},
            {
                $push: {comment:data._id}
            },
            {
                multi:true
            }
        )
        return res.json({
            mgs: "comment successfull",
            data
        })

    }
    catch(err){
        res.send(err);
    }
} 

const getComnt= async(req,res)=>{
     try{
        const id= req.params.id;
        await Blog.findOne({_id:id}).populate('comment').exec(function(err,data){
            if(err){
                console.log('error');
            }
            else{
                res.send(data);
            }
        })

    }
    catch(err){
        res.send(err);
    }
}

module.exports={
    Post,
    commnets,
    getComnt
}
