const express = require('express');
const { isLoggedIn } = require('../../middleware');
const User = require('../../models/Users');
const router = express.Router();



router.post('/products/:id/like', isLoggedIn, async (req, res) => {
    let { id } = req.params;
    let user = req.user;
    let isLiked = user.wishlist.includes(id);
    if (isLiked) {
        await User.findByIdAndUpdate(user._id, { $pull: { wishlist: id } })
    } else {
        await User.findByIdAndUpdate(user._id, { $addToSet: { wishlist: id } })
    }
})

module.exports = router