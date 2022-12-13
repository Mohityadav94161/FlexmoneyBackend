
const router = require("express").Router();


// Register here
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    
     
  });

  // send this new user to database
  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (err) {
    res.status(500).json(err);
    console.log("err", err);
    req.flash("error", "You not fill the Information Correctly");
  }
});

// sign in
router.post("/signin", async (req, res) => {
  try {
    // check user's username or we can also check with email id
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("username not found!");

    // if found then check for password
    const userData = user._doc;
    res.status(200).json({userData});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
