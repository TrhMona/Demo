const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  const body = req.body;
  console.log(body);
  const user = new User(body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
};

exports.signIn = async (req, res) => {
  const body = req.body;
  console.log(" body ============",body)
  const user = await User.findOne({ email: body.email });
  if (user) {
    const validPassword = await bcrypt.compare(body.password, user.password);
    if (validPassword) {
      res.status(200).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(400).send("login failed..");
    }
  } else {
    res.status(400).send("user not exist..");
  }
};
