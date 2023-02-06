const router = require("express").Router();
let Student = require("../models/Student");

router.route("/").post((req, res) => {
    const firstName = req.body.firstName;
    const nic = Number(req.body.nic);
    const lastName = req.body.lastName;
    const studentId = req.body.studentId;
    const address = req.body.address;
    const telephone = req.body.telephone;
    const email = req.body.email;
    const studentStatus = req.body.studentStatus;






    const newStudent = new Student({
        firstName,
        lastName,
        studentId,
        nic,
        address,
        telephone,
        email,
        studentStatus

    })

    newStudent.save().then(() => {
        res.json("student added")
    }).catch((err) => {
        console.log(err);
    })
})


router.route("/").get((req, res) => {
    Student.find().then((students) => {
        res.json(students)
    }).catch((err) => {
        console.log(err);
    })
})


router.get('/get/:id', (req, res) => {
    const userId = req.params.id;
    
    Student.findById(userId, (err, user) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.send(user);
    });
  });



module.exports = router;