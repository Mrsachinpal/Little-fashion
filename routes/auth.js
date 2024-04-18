const express = require('express');
const User = require('../models/Users');
const passport = require('passport');
const router = express.Router();

router.get('/register', (req, res) => {   // to render on signup page 
    res.render('./pages/signup')
})

router.post('/register', async (req, res) => {
    let { email, password, gender, phone, name, username,role } = req.body
    let user = new User({ username, email, phone, name, phone, gender,role });
    let newUser = await User.register(user, password)
    res.redirect('/login');
})

router.get('/login', (req, res) => {
    res.render('./pages/signin')
})


router.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureMessage: true
        }),
    function (req, res) {
        res.redirect('/products')
    }
)


router.get('/logout',(req,res)=>{
    req.logout(()=>{
    res.redirect('/login');
    })
})


module.exports = router