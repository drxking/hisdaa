const mongoose = require('mongoose');

const hisaabSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        trim: true, 
    },
    content: {
        type: String,
        required: true, 
        trim: true, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    userId: {
        // Reference to the User model, Assuming each Hisaab is associated with a user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true, 
    }
});

module.exports = mongoose.model('Hisaab', hisaabSchema);
