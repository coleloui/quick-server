const router = require('express').Router()
const { User, Card } = require('../../models')

router.get('/', async(req, res) => {
    try {
        const userData = await User.findAll({
            include: [{model: Card}],
        })
        res.status(200).json(userData)
    }catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', (req, res) => {
    User.create(req.body)
    .then((newUser) => {
        res.json(newUser)
    })
    .catch((err) =>
    res.json(err))
})

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: Card }]
        })

        if(!userData) {
            res.status(404).json({ message: 'this trainer does not exist'})
            return
        }
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router