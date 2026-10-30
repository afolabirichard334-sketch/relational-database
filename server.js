const express = require('express');
const sequelize = require('./database/database');
require('./model');

const userRouter = require('./router/router.js');
const postRouter = require('./router/PostRouter.js');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.get('/', (req, res) => {
    res.send('User and Post API is running');
});

sequelize.sync()
    .then(() => {
        console.log('Database tables created');

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => console.log(error));
















