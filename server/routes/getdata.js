const users = require('../models/userSchema');


// get API Data

module.exports = async function getData(req, res) {
    try {
        const userData = await users.find();
        res.status(201).json(userData);
        console.log(userData);
    } catch (error) {
        res.status(422).json(error);
    }
}