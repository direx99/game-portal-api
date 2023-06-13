const router = require("express").Router();
let Game = require("../models/Game");

router.route("/").post((req,res)=>{
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const reviewsAvg = Number(req.body.reviewsAvg);
    const reviewsCount = Number(req.body.reviewsCount);
    const type = req.body.type;
    const image = req.body.image;
    const androidLink = req.body.androidLink;
    const iosLink = req.body.iosLink;
    const gradientColors =req.body.gradientColors


   
    
    const newGame = new Game ({
        title,
        subTitle,
        reviewsAvg,
        reviewsCount,
        type,
        image,
        androidLink,
        iosLink,
        gradientColors

    })

    newGame.save().then(()=>{
        res.json("Game added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{
    Game.find().then((games)=>{
        res.json(games)
    }).catch((err)=>{
        console.log(err);
    })
})




module.exports = router;