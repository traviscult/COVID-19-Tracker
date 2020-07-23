const passport = require('passport');
const LocalStrategy =  require('./localStrategy');
const db = require('../models');

passport.serializeUser((user, done) => {
	// console.log('Serialize called');
	// console.log(user); // the whole raw user object!
	done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
	console.log('Deserialize called');
	db.User.findOne(
		{ _id: id },
		'name email',
		(err, user) => {
			console.log('Deserialize user called');
			console.log(user);
			done(null, user);
		}
	);
});

passport.use(LocalStrategy);
// Register Strategies
// passport.use(new LocalStrategy(
// 	// Our user will sign in using an email, rather than a "username"
// 	{
// 	  email: "email"
// 	},
// 	(email, password, done) => {
// 	  // When a user tries to sign in this code runs
// 	  db.User.findOne({
// 		where: {
// 		  email: email
// 		}
// 	  }).then((dbUser) => {
// 		// If there's no user with the given email
// 		if (!dbUser) {
// 		  return done(null, false, {
// 			message: "Incorrect email."
// 		  });
// 		}
// 		// If there is a user with the given email, but the password the user gives us is incorrect
// 		else if (!dbUser.validPassword(password)) {
// 		  return done(null, false, {
// 			message: "Incorrect password."
// 		  });
// 		}
// 		// If none of the above, return the user
// 		return done(null, dbUser);
// 	  });
// 	}
//   ));

module.exports = passport;
