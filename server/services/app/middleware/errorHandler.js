async function errHandler(error, req, res, next) {
  switch (error.name) {
    case "JsonWebTokenError":
    case "User not Found":
      res.status(401).json({ message: "Unauthen" });
      break;

    case "Item Not Found":
      res.status(404).json({ message: error.name });
      break;

    case "You are not Authorized":
      res.status(403).json({ message: error.name });
      break;

    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: error.errors.map((err) => err.message) });
      break;

    case "Item Already Add":
    case "Email and Password cannot empty":
      res.status(400).json({ message: error.name });
      break;

    case "Invalid email or Password":
      res.status(401).json({ message: error.name });
      break;

    default:
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
      break;
  }
}

module.exports = errHandler;
