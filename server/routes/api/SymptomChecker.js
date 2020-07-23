const router = require("express").Router();
const sypmtomChekerController = require("../../contollers/symptomController");

router.get("/", (req, res) => {
    // console.log("sympton controller", res)
    sypmtomChekerController.questionsPost(res)
});

module.exports = router






  