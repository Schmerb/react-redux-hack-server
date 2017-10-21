'use strict';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const EventSchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    currency: {
        type: String, 
        required: true
    },
    type: {
        sms: {type: Boolean, default: true},
        email: {type: Boolean, default: true}
    },
    condition: {
        type: String, 
        required: true
    },
    value: {
        type: Number, 
        required: true
    },
    valueType: {
        type: String, 
        required: true
    },
    message: {
        type: String, 
        required: true
    }
});

module.exports = { EventSchema };