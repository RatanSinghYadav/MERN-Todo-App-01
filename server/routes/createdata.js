const users = require('../models/userSchema');

// create API data

module.exports = async function Register(req, res) {
    // console.log(req.body)
    const { name, email, age, job, number } = req.body;

    if (!name || !email || !age || !job || !number) {
        res.status(422).json("plz fill the require field.");
    }
    try {
        const preUser = await users.findOne({ email: email });

        if (preUser) {
            res.status(422).json("this user is already present");
        } else {
            const addUser = new users({
                name, email, age, job, number
            });
            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }

    } catch (error) {
        res.status(422).json(error)

    }
};



