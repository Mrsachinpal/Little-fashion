const express = require('express');
const User = require('../models/Users');
const Product = require('../models/Products');
const { isLoggedIn } = require('../middleware')
const stripe = require('stripe')('sk_test_51Oyu96SDfi9YrGDJnVQRiElnioVxb7KZ1LEOsJzo9h7MfJpoTN19HEc7RPAMU6Mq1i5gVOWWPXAqVBMft1nf1MXw00bEKKjpmo')

const router = express.Router();


router.get('/user/cart', isLoggedIn, async (req, res) => {
  let userId = req.user._id;
  let user = await User.findById(userId).populate("cart");
  // console.log(user,"cart")
  let totalAmount = user.cart.reduce((sum, curr) => {
    let price = parseFloat(curr.Pprice); // Convert price to number
    // Check if price is a valid number
    if (!isNaN(price)) {
      return sum + price;
    } else {
      return sum;
    }
  }, 0);
  res.render('cart/cart', { user, totalAmount })
})

router.post('/user/:id/add', isLoggedIn, async (req, res) => {
  let { id } = req.params;
  let userId = req.user._id;
  let user = await User.findById(userId).populate("cart");
  // console.log(user, "cart")
  let product = await Product.findById(id);
  user.cart.push(product);
  await user.save();
  res.redirect(`/product/${id}`)
})

router.post('/user/cart/:id', isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const userCart = await User.findById(userId).populate("cart");
    userCart.cart = userCart.cart.filter(item => !item._id.equals(id)); // Filter out the item to delete
    await userCart.save();
    res.redirect('/user/cart');
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


// router.get('/payment/:id',async (req,res)=>{
//     try{
//     let {id}=req.params;
//     let data=await User.findById(id).populate('cart');
//     console.log(data);
//     res.send("hi")
// }
// catch(e){
//     console.error(e);
//     res.status(500).send("Internal server error ")
// }
// })

router.get('/payment/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id).populate('cart');
    
    // Extract product details from the cart
    const lineItems = user.cart.map(item => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.Pname,
        },
        unit_amount: item.Pprice * 100, // Amount should be in cents
      },
      quantity: 1,
    }));

    // Create a session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:8080/success',
      cancel_url: 'http://localhost:8080/cancel',
    });

    // Redirect the user to the Stripe checkout page
    res.redirect(303, session.url);
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).send("Error processing payment");
  }
});

module.exports = router