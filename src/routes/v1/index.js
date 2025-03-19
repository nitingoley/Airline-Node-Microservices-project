const express = require("express");
const { InforController } = require("../../controller");
const router = express.Router();

router.get("/info", InforController.info);

module.exports = router;
