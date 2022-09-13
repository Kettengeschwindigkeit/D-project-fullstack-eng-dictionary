import bcrypt from "bcryptjs"
import User from "../models/User.js"

export const register = async (req, res) => {
    try {
        const { email, password } = req.body

        const isUsed = await User.findOne({ email })

        if (isUsed) {
            return res.json({
                message: 'This email is already exist!'
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            email,
            password: hash
        })

        await newUser.save()

        res.json({
            newUser,
            message: 'Register success!'
        })
    } catch (error) {
        res.json({ message: 'User create error.' })
    }
}

export const login = async (req, res) => {
    try {

    } catch (error) {

    }
}

export const getMe = async (req, res) => {
    try {

    } catch (error) {

    }
}
