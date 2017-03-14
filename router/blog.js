/**
 * Created by strive-智能社 on 2016/9/25.
 */
const express=require('express');

var router=express.Router();

module.exports=router;

router.get('/',function(req,res){
    res.render('blog',{
        nav_index:4
    });
});





































