
const express = require("express")
const router = express.Router()
const db = require("../models")


router.get("/api/workouts", function (req, res) {
    db.Workout.find({})
        .then(function (dbworkouts) {
            res.json(dbworkouts);
        });
});
router.get("/api/workouts/range", function (req, res) {
    db.Workout.find({})
        .then(function (dbworkouts) {
            res.json(dbworkouts);
        });
});
router.post("/api/workouts", function (req, res) {
    console.log(req.body);
    db.Workout.create({

    })
        .then(function (dbworkouts) {
            res.json(dbworkouts);
        });
});
app.put("/submit", ({ body }, res) => {
    db.Library.findOneAndUpdate({}, { $push: { exercises: req.body } }, { new: true }))
    .then(dbLibrary => {
        res.json(dbLibrary);
    })
    .catch(err => {
        res.json(err);
    });
  });

module.exports = router
