const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'user_post_db',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;