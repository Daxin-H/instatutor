const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    
    degree: {
        // The degree or problem: High school? Graduate school?
        type: String,
        required: true
    },
    subject: {
        // The subject of problem: Math? CS?
        type: String,
        required: true
    },
    content: {
        // The content of problem
        type: String,
        required: true
    }
});

module.exports = mongoose.model('search', SearchSchema);