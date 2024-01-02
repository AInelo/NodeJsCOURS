const express = require('express');
const { cp, rmSync } = require('fs');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOption = require('./config/corsOptions')
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3500;



// custom middleware loger 
app.use(logger);

// Cross Origin Ressource Sharing
app.use(cors(corsOption));

// built-in middleware to handle urlencoded data form data
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json());


// middlewaare for cookies



// serve static files 
app.use('/', express.static(path.join(__dirname, '/public')));




// Pour activer les routes mise dans le fichier des root.js et dans le dossier "Routes"


app.use('/', require('./routes/root'));

app.use('/register', require('./routes/register'));

app.use('/auth', require('./routes/auth'));

app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));

// app.use('/')
// DIFFERENCE ENTRE APP.USE ET APP.ALL
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ error: "404 Not Found" })
    } else {
        res.type('txt').send("404 Not Found")
    }
})

app.use(errorHandler);

app.listen(PORT, () => console.log(`Le serveur tourne sur ${PORT}`));

//myEmitter.emit('log', 'Log event emitted');