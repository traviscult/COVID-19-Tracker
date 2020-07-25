const db = require("../models");

// Defining methods for the userController
module.exports = {
  getUser: (req, res, next) => {
    // console.log("GetUser being called in controller")
    // console.log(req, 'get user');
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  register: (req, res) => {
    // console.log("REGISTER BEING CALLED")
    const { name, age, race, gender, email, password, isLoggedIn } = req.body;
    // ADD VALIDATION
    db.User.findOne({ 'email': email }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, there is already a user with the email: ${email}`
        });
      }
      const newUser = new db.User({
        
        'name': name,
        'age': age,
        'race': race,
        'gender': gender,
        'email': email,
        'password': password,
        'isLoggedIn': isLoggedIn
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        console.log(savedUser);
        return res.json(savedUser);
      });
    });
  },
  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  },
  auth: function(req, res, next) {
		console.log("auth being called");
		next();
  },
  authenticate: (req, res) => {
    console.log("authenticate being called")
		const user = JSON.parse(JSON.stringify(req.user)); // hack
		const cleanUser = Object.assign({}, user);
		if (cleanUser) {
			// console.log(`Deleting ${cleanUser.password}`);
			delete cleanUser.password;
		}
		res.json({ user: cleanUser });
	}
};