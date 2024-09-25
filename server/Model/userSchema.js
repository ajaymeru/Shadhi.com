const moongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = moongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 20
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, "Email required"]
    },

    number: {
        type: Number,
        required: true,
        unique: true,
        minLength: 10,
        maxLength: 10
    },
    password: {
        type: String,
        required: true,

    }

})


userSchema.statics.signup = async (data) => {
    const { name, email, number, password } = data
    const user = await User.findOne({ email })
    if (user) {
        throw new Error("user already exists")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
        name, email, number, password: hashedPassword
    })
    await newUser.save()
    return newUser
}

userSchema.statics.login = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error("Invalid email")
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw new Error("Invalid password")
    }
    return user
}

const User = moongoose.model("User", userSchema)
module.exports = User