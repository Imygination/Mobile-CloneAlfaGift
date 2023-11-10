const jwt = require('jsonwebtoken');
const jwtSecret = process.env.jwtSecret

const signToken = (payload) => {
  return token = jwt.sign(payload, jwtSecret);
}

const verifyToken = (token) => {
  return jwt.verify(token, jwtSecret)
}

module.exports = {signToken, verifyToken}