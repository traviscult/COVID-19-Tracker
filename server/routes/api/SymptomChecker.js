const router = require("express").Router();
const sypmtomChekerController = require("../../contollers/symptomController");
const symptomController = require("../../contollers/symptomController");

router.get("/symptom", (req, res) => {
 sypmtomChekerController.questionsPost(res)
});

module.exports = router






  