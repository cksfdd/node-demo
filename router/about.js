const express=require('express');

var router=express.Router();

module.exports=router;

router.get('/',function(req,res){
    res.render('about',{
        nav_index:3
    });
});





































