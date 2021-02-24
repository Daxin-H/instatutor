const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');


//@route GET api/users
router.get('/', (req, res) => res.send('Users route'));

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            // See if user exists
            if (user) {
                res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            }
            // Get user gravatar
            /*
            const avatar = normalize(
                gravatar.url(email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                }),
                { forceHttps: true });
            */
           //without normalize
           const avatar =
            gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })

            user = new User({
                name,
                email,
                avatar,
                password
            });
            // Encrypt password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            // Return jsonwebtoken

            res.send('User route');
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
    
);
module.exports = router; 