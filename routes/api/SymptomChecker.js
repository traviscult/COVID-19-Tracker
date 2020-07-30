const router = require("express").Router();
const sypmtomChekerController = require("../../contollers/symptomController");

router.get("/", (req, res) => {
    console.log("symptom cheker is getting called")
    sypmtomChekerController.questionsPost(req, res)
});

router.post("/", (req, res) =>{
    sypmtomChekerController.questionsPost(req, res)
  });

module.exports = router






  