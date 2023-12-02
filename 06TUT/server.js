const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3500;



app.get('^/$|/index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page.html', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

// POUR FAIRE DE LA REDIRECTION VERS D'AUTRE PAGE

app.get('/old-page(.html)?', (req, res) => {

    res.redirect(301, '/new-page.html'); // 302 By default
});





app.listen(PORT, () => console.log(`Le serveur tourne sur ${PORT}`));

//     myEmitter.emit('log', 'Log event emitted');

