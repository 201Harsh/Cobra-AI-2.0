const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Welcome to Cobra AI 2.0");
});

module.exports = router;