import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { email, password } = req.body

        const isUsed = await User.findOne({ email })

        if (isUsed) {
            return res.json({
                message: "This email is already exist!"
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
            message: "Register success!"
        })
    } catch (error) {
        res.json({ message: "User create error." })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            return res.json({
                message: "User not found..."
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.json({
                message: "Wrong password"
            })
        }

        console.log(process.env.JWT_SECRET)

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        )

        res.json({
            token, user, message: "Welcome!"
        })
    } catch (error) {
        res.json({ message: "Error..." })
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if (!user) {
            return res.json({
                message: "User not found..."
            })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        )

        
    } catch (error) {
        res.json({ message: "No access!" })
    }
}
