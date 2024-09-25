const User = require("../Model/userSchema")


const usersignup = async (req, res) => {
    const data = req.body
    try {
        const user = await User.signup(data)
        res.status(201).json({ message: ` Account crreated Sucessfully` })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}


const userlogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        res.status(200).json({ message: "login sucess" })
    }
    catch (err) {
        res.status(400).json({ message: err.message })

    }
}


module.exports = { usersignup, userlogin }