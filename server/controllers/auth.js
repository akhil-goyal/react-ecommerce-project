const User = require('../models/user-model');

// To register a new user.
exports.signUpController = ((req, res) => {

    // Creating instance of user model & storing user data
    // received from client-side with req.body
    const user = new User(req.body);

    // Saving the user data received.
    user.save((err, user) => {

        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            })
        }

        // Salt and hashedPassword set to undefined
        // so that they may not be returned to the client-side.
        user.salt = undefined;
        user.hashedPassword = undefined;

        // Returning the newly signed up user data
        res.json({
            user
        });

    })
});