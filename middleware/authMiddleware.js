function isAuthenticated(req, res, next) {
    if (req.session.userId) {
        console.log("Authenticated")
        // User is authenticated, proceed to the next middleware/route
        return next();
    }
    res.redirect('/login'); 
}

module.exports = isAuthenticated; 
