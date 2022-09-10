const { Router } = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

const router = new Router()

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body

        const isUsed = await User.findOne({ email })

        if (isUsed) {
            return res.json({
                message: `Email ${email} is already exist`
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
            message: 'Registration is success!'
        })
    } catch (error) {
        res.json({ message: 'User create error'})
    }
})

module.exports = router
