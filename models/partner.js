const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    timestamp: { createdAt: true, updatedAt: true }
});

const Campsite = mongoose.model('Partner', partnerSchema);

module.exports = Partner;