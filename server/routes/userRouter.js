const router = require('express').Router();
const user = require('../models/user.model');

router.post('/create', async (req, res)=>{
    const newUser = user({
        name: req.body.name,
        email: req.body.email,
        user_id: req.body.user_id,
        imageURL: req.body.imageURL,
    });

    const uid = newUser.user_id;
    const foundUser = await user.findOne({user_id: uid})

    try {
        if(!foundUser){
            const savedUser = await newUser.save();
            res.status(200).send({success: true, user: savedUser})
        }else{
            res.status(201).send({msg: "USER FOUND", user: foundUser});
        }
    } catch (error) {
        res.status(400).send({success: false, user: 'INTERNAL SERVER ERROR'})
    }

})



module.exports = router