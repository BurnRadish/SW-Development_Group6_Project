const express = require('express');
const mongoose = require('mongoose');
const reviewSchema = require('../model/reviewModel')

router = express.Router();

router.post("/review", async function (req, res) {
    try {
        const getUserReview = mongoose.model('review', reviewSchema);
        getUserReview.find({
            placeId: req.body.placeId
        }).exec((err, reviewData) => {
            if(reviewData){
                res.status(200).send({
                    reviewData: reviewData
                })
            }
        })
    } 
    catch (error) {
        res.status(500).send('ไม่สามารถเชื่อมต่อได้');
    }
});

router.post("/addreview", async function (req, res) {
    try {
        const writeReviewModel = mongoose.model('reviews', reviewSchema);
        var writeReview = new writeReviewModel({
            placeId: req.body.placeId,
            textReview: req.body.textReview,
            username: req.body.username
        })
        await writeReview.save();
        res.status(200).send();
    } catch (error) {
        res.status(500).send('ไม่สามารถเชื่อมต่อได้');
    }
})

exports.router = router