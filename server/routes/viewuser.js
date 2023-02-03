const users = require('../models/userSchema');


//  update API user data

module.exports = async function viewData(req,res){
    try {
        const {id} = req.params;
        var newData = await users.findById({_id:id})
        console.log(newData);
        res.status(201).json(newData);
    } catch (error) {
        res.status(422).json(newData);
    }
}