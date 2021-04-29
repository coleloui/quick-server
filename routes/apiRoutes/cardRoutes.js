const router = require('express').Router()
const { User, Card } = require('../../models')

router.get('/', async(req, res) => {
    try {
        const cardData = await Card.findAll({
            include: [{ model: User }]
        })
        res.status(200).json(cardData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/', (req, res) => {
    Card.create(req.body)
    .then((newCard) => {
        res.json(newCard)
    })
    .catch((err) =>
    res.json(err))
})

module.exports = router