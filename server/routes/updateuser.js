const users = require('../models/userSchema.js');

async function Update(req, res) {
    try {
        const { id } = req.params;
        const updateUser = await users.findByIdAndUpdate(id, req.body, {
            new: true
        });
        console.log(updateUser);
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(422).json(error);
    }

}

module.exports = Update;