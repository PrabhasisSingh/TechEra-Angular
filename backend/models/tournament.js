
let mongoose = require('mongoose');

// Create a model class
let tournamentModel = mongoose.Schema(
    {
        Name: String,
        Description: String,
        Players: Number,
        Type: String,
        Tier: Number
    },
    {
        collection: "tournaments"
    }
);

module.exports = mongoose.model('Tournament', tournamentModel);