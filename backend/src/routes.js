const { Router } = require("express");

const router = Router();

router.use(require("./modules/users/routes"));
router.use(require("./modules/tasks/routes"));
router.use(require("./modules/auth/routes"));

module.exports = router;