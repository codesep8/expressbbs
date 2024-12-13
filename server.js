const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
var compression = require('compression')
const path = require('path');

const app = express();

//compression
app.use(compression())

//nunjucks
app.set('view engine', 'html');
nunjucks.configure('templates', {
    express: app,
    watch: true,
});
app.use(express.static(path.join('./public')))

//app middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(
    session({
      secret: '2f09isd0fkjasjg',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
    })
);

//route
app.use('/u', require('./routes/auth'));

app.use((req, res, next) => {
    res.locals.session = req.session;
    res.locals.currentUrl = req.originalUrl;
    next();
});

app.get('/', (req, res) => {
  res.render('index.html')
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});