const express=require('express')
const router= express.Router();
const Product=require('../models/Products')

router.get('/',(req,res)=>{
    res.redirect('/home')
})
router.get('/home',(req,res)=>{
    console.log("dispalying");
    res.render('index')
})
router.get('/story',(req,res)=>{
    res.render('./pages/story')
})
router.get('/products',async (req,res)=>{     //read 
    let products= await Product.find({})

    res.render('./pages/products',{products})
})
router.get('/faqs',(req,res)=>{
    res.render('./pages/faqs')
})
router.get('/contact',(req,res)=>{
    res.render('./pages/contact')
})


module.exports=router