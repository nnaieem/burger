const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const apiRouter = require('./routes/apiRoutes');
const db = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const hbs = exphbs.create();

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/api', apiRouter);
app.get('/', async (req, res) => {
    const burgers = await db.Burger.findAll();
    res.render('home', {burgers});
});

db.sequelize.sync().then(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});