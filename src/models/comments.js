'use strict';

const mongoose = require('mongoose');

const { replyCommentSchema: ReplyComments } = require('models/replyComments');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const commentSchema = mongoose.Schema({
    currency: {
        type: String,
        required: true
    },
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    content: {
        type: String,
        required: true
    },
    usersLiked: [{type: Schema.Types.ObjectId, ref: 'User'}],
    replyComments: [ ReplyComments ],
    created: {type: Date, default: Date.now()}
});

commentSchema.methods.apiRepr = function() {
    return {
        id: this._id,
        author: this.author || '',
        content: this.content || '',
        likes: this.usersLiked.length || '',
        usersLiked: this.usersLiked || [],
        replyComments: this.replyComments || [],
        created: this.created || ''
    };
};


const Comment = mongoose.model('Comment', commentSchema);

module.exports = { Comment };