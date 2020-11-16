const { Router } = require("express");

const router = Router();

const { signUp, signIn } = require("./controller");

router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;