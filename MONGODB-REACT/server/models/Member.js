const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
    {
        Id: {
            type:String
        },
        Name: {
            type: String
        },
        RegNo: {
            type: String
        },
        Email: {
            type: String
        }
    }
);
const memberDetails = mongoose.model('memberDetails', memberSchema);

module.exports = memberDetails;