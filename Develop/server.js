const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")



const PORT = process.env.PORT || 3000;

const router = express();


router.use(logger("dev"));

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

router.use(htmlRoutes)
router.use(apiRoutes)



router.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
