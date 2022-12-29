const router = require('express').Router();
const uidata = require('../models/ui.data.model');

router.get('/get', async(req, res)=>{

    try {
        const getData = await uidata.find();
        return res.status(200).send({success: true, data: getData});
    } catch (error) {
        return res.status(400).send({success: false, msg: "INTERNAL SERVER ERROR"});
    }
})



router.post('/create', async(req, res)=>{
    const newUiData = uidata({
        heading: req.body.heading,
        imageURL: req.body.imageURL,
    });

    try {
        const savedUiData = await newUiData.save();
        return res.status(200).send({success: true, data: savedUiData});
    } catch (error) {
        return res.status(400).send({success: false, msg: "INTERNAL SERVER ERROR"});
    }

});



router.put('/update/:id', async(req, res)=>{

    const uiDataID = {_id: req.params.id};
    const updatedUI = {
        heading: req.body.heading,
        imageURL: req.body.imageURL,
    }

    try {
        const updatedUiData = await uidata.findByIdAndUpdate(uiDataID, updatedUI);
        return res.status(200).send({success: true, data: updatedUiData});
    } catch (error) {
        return res.status(400).send({success: false, msg: "INTERNAL SERVER ERROR"});
    }
})

module.exports = router;