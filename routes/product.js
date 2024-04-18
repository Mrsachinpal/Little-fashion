const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const { isLoggedIn,isSeller } = require('../middleware');


// Add  New Form
router.get('/product/new', isLoggedIn, isSeller,(req, res) => {
    res.render('new');
})

// Add Form Data in Database

router.post('/products',isLoggedIn, isSeller, (req, res) => {
    let { Pname, Pimg, Pprice, Pmaindesc, Pshortdesc } = req.body
    Product.create({ Pname, Pimg, Pprice, Pmaindesc, Pshortdesc,author:req.user._id })
    res.redirect('/products')
})

// show Informatoin about one Product

router.get('/product/:id',isLoggedIn, async (req, res) => {
    let { id } = req.params;
    let foundProduct = await Product.findById(id);
    req.flash('success','You have to login first');
    res.render('show', { foundProduct})
})

//  Edit Product 
router.get('/product/:id/edit',isLoggedIn,isSeller, async (req, res) => {
    let { id } = req.params;
    let foundProduct = await Product.findById(id);
    res.render('edit', { foundProduct })
})

//  save Edit Product in DataBase

router.patch('/product/:id',isLoggedIn, isSeller,async (req, res) => {
    let { id } = req.params;
    let { Pname, Pimg, Pprice, Pmaindesc, Pshortdesc } = req.body
    await Product.findByIdAndUpdate(id, { Pname, Pimg, Pprice, Pmaindesc, Pshortdesc })
    req.flash('success','Edit succesfully done');
    res.redirect(`/product/${id}`);
})

//  delete Product 

router.delete('/product/:id',isLoggedIn, isSeller,async (req, res) => {
    let { id } = req.params
    console.log(id);
    await Product.findByIdAndDelete(id);
    console.log("delete successfully ");
    req.flash('success','delete product succesfully done');
    res.redirect('/products')
})








module.exports = router;