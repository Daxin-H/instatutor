const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
// @route   GET api/users
// @desc    Register route
// @access  Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'PLease enter a password with 6 or more characters'
    ).isLength({ min: 6 })
],
    (req, res) => {
        console.log(req.body);
        res.send('User route');
    });
module.exports = router; 