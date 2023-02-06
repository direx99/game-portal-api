const router = require("express").Router();
let Student = require("../models/Student");

router.route("/add").post((req,res)=>{
    const firstName = req.body.firstName;
    const nic = Number(req.body.Number);
    const lastName = req.body.lastName;
    const studentId = req.body.studentId;
    const address = req.body.address;
    const telephone = req.body.telephone;
    const email = req.body.email;
    const studentStatus = req.body.studentStatus;




   
    
    const newStudent = new Student ({
        firstName,
        lastName,
        studentId,
        nic,
        address,
        telephone,
        email,
        studentStatus

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