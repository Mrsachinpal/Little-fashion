
const isLoggedIn = (req, res, next) => {

  if(req.xhr && !req.isAuthenticated()){
    return res.status(401).send('unauthorised');
    // console.log(req.xhr);
  }

  if (!req.isAuthenticated()) {
    req.flash('error', 'You have to login first');
    return res.redirect('/login')
  }
  next();
}


const isSeller = (req, res, next) => {
  if (req.user.role !== "seller") {
    return res.redirect('/products')
  }
  next()
}



module.exports = { isLoggedIn, isSeller }