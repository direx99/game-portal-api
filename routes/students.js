const router = require("express").Router();
let Student = require("../models/Student");

router.route("/add").post((req,res)=>{
    const name = req.body.name;
   
    
    const newStudent = new Student ({
        name
    })

    newStudent.save().then(()=>{
        res.json("student added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/all").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err);
    })
})




module.exports = router;