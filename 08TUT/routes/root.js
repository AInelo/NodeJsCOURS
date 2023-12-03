const express = require('express');
const router = express.Router();
const path = require('path');



router.get('^/$|/index(.html)?', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/new-page.html', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'));
});

// POUR FAIRE DE LA REDIRECTION VERS D'AUTRE PAGE

router.get('/old-page(.html)?', (req, res) => {

    res.redirect(301, '/new-page.html'); // 302 By default
});


module.exports = router;