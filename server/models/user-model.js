const mongoose = require('mongoose');
const uuid = require('uuid').v1
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        profile_photo: {
            data: Buffer,
            content_type: String
        },
        email_address: {
            type: String,
            required: true,
            unique: true
        },
        hashed_password: {
            type: String,
            required: true
        },
        salt: String
    },
    { timestamps: true }
);

// Creating a virtual field (Password will not be a part of user details stored on DB. 
// Rather, a hashed password would be stored.)
userSchema
    .virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = uuid();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () {
        return this._password;
    });

userSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    encryptPassword: function (password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex');
        } catch (err) {
            return '';
        }
    }
};

module.exports = mongoose.model('User', userSchema);