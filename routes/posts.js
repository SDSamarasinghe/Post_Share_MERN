const express = require('express');
const posts = require('../models/posts');
const Posts = require('../models/posts');

const router = express.Router();



//save posts


router.post('/post/save',(req,res)=>{
    let newPost =new Posts(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err

            });
        }

        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});




//get posts

router.get('/posts',(req,res) =>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});





//get specific

router.get("/post/:id",(req,res) =>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
});








//update posts

router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfuly"
            });

        }
    );
})


//delete post

router.delete('/post/delete/:id',(req,res)=>{
    posts.findByIdAndRemove(req.params.id).exec((err,deletedPosts) =>{
        if(err) return res.status(400).json({
            message: "Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successfull",deletedPosts
        });
    });
});


module.exports = router;