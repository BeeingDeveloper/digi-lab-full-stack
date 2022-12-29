const router = require('express').Router();
const email = require('../models/email.model');

router.post('/send', async(req, res)=>{
    const newEmail = email({
        email: req.body.email
    });

    try {
        const savedEmail = await newEmail.save();
        return res.status(200).send({success: true, data: savedEmail});
    } catch (error) {
        return res.status(400).send({success: false, msg: "INTERNAL SERVER ERROR"})
    }

})



router.get('/get', async(req, res)=>{

    const getEmails = await email.find().sort({createdAt: 1});

    try {
        return res.status(200).send({success: true, data: getEmails});
    } catch (error) {
        return res.status(400).send({success: false, msg: "INTERNAL SERVER ERROR"});
    }
})




router.delete('/delete/:id', async(req, res)=>{
    const id = {_id: req.params.id};

    try {
        const deleteItem = await email.findByIdAndDelete(id);
        return res.status(200).send({success: true, data: deleteItem});
    } catch (error) {
        return res.status(400).send({success: false, msg: "INTERNAL SERVER ERROR"});
    }
})

module.exports = router