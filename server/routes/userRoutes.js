const express = require("express")

const router = express.Router()

const { usersignup, userlogin } = require("../control/userControler")

router.post("/signup", usersignup)

router.post("/login", userlogin)

module.exports = router