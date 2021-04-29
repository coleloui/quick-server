const router = require('express').Router()
const userRoutes = require('./userRoutes')
const cardRoutes = require('./cardRoutes')

router.use('/user', userRoutes)
router.use('/card', cardRoutes)

module.exports = router