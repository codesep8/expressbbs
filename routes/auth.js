const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    if (req.session.username) {
        res.redirect('/');
    } else {
        res.render('login.html');
    }
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const redirectUrl = req.query.redi || '/';
    if (username === 'admin' && password === 'admin') {
        req.session.username = username;
    }
    res.redirect(redirectUrl);
});

router.get('/signup', (req, res) => {
    if (req.session.username) {
        res.redirect('/');
    } else {    
        res.render('signup.html');
    }
});

router.get('/logout', (req, res) => {
    if (!req.session.username) {
        res.redirect('/u/login');
    } else {
        res.render('logout.html');
    }
});

router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;