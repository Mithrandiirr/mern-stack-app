const express = require('express')
const { get } = require('mongoose')
const router = express.Router()
const {registerUser, getUserData, loginUser} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getUserData)
module.exports = router