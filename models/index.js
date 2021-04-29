const User = require('./User')
const Card = require('./Card')

Card.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Card, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

module.exports = { Card, User }