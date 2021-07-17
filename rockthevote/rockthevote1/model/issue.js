const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const issueSchema = new Schema({
    issuetype: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
})

module.exports = mongoose.model("issue", issueSchema);
