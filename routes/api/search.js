const express = require('express');
const request = require('request')
const config = require('config')

const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Search = require('../../models/Search');

// @route: GET api/search/me
// @desc: Get last search history
// @access Private

router.get('/history', auth, async (req, res) => {
    try {
        const search = await Search.findOne({ user: req.user.id }).populate(
            'user',
            ['name', 'avatar']
        );

        if (!search) {
            return res.status(400).json({ msg: 'There is no search history for this user' });
        }

        return res.json(search);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});


// @route: POST api/profile
// @desc: Create/update user's search content
// @access Public

router.post('/', [auth, [
    check('degree', 'Degree is required')
        .not()
        .isEmpty(),
    check('subject', 'Subject is required')
        .not()
        .isEmpty(),
    check('content', 'Content is required')
        .not()
        .isEmpty()
]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            degree,
            subject,
            content,
        } = req.body;

        // Build Profile object, assign value to each property
        const searchField = {};

        searchField.user = req.user.id;
        searchField.degree = degree;
        searchField.subject = subject;
        searchField.content = content;

        try {
            let search = await Search.findOne({ user: req.user.id });

            // Already have, update
            if (search) {
                search = await Search.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: searchField },
                    { new: true }
                );

                return res.json(search);
            }

            //Create
            search = new Search(searchField);
            await search.save();//save it
            res.json(search);//send back to the profile
        }
        catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);
module.exports = router;
