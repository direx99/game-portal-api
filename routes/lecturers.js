const router = require("express").Router();
let Student = require("../models/Lecturer");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
   
    
    const newLecturer = new Lecturer ({
        name
    })

    newLecturer.save().then(()=>{
        res.json("Lecture added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{
    Lecture.find().then((ecturers)=>{
        res.json(ecturers)
    }).catch((err)=>{
        console.log(err);
    })
})




module.exports = router;