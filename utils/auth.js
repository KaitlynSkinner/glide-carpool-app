const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        next();
    } else {
        res.redirect('/homepage');

    }
};

module.exports = withAuth;