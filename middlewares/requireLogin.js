const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token=jwt.verify(req.headers['authorization'], 'secret');
  console.log("token"+token.user._id)
    if (!token.user) {
        return res.status(401).json({
            title: 'Not Authenticated',
            error: err
        });
    }

    next();
}
  