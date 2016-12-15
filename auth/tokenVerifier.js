const jwt = require("jsonwebtoken");

let tokenVerifier = (req, res, next) => {
    console.warn("Verify Token ... ");
    let token = req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, 'super_secret_key', function (err, decoded) {
            next();
        });
    } else {
        res.status(403).end();
    }
}; 

module.exports = tokenVerifier
