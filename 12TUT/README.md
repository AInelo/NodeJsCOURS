# ICI il s'agit de Roles et permissions in MVC Models of Node JS

Comprendre la gestion des rôles utilisateur et l'autorisation dans Node.js implique généralement l'utilisation de JSON Web Tokens (JWT) pour l'authentification. Voici un guide simple qui vous donne une idée pratique de la façon de mettre en œuvre des rôles utilisateur et l'autorisation dans une application Node.js.

Supposons que vous ayez déjà mis en place l'authentification avec JWT dans votre application Node.js. Si ce n'est pas le cas, vous pouvez utiliser des bibliothèques telles que jsonwebtoken et express pour cela. Assurez-vous d'avoir ces dépendances installées.

## Étape 1: Configuration de l'authentification avec JWT
```bash
npm install express jsonwebtoken
```

```bash
// index.js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const secretKey = 'votre_clé_secrète';

// Middleware pour vérifier le token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'Token manquant' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token invalide' });
        }
        req.user = decoded;
        next();
    });
};

// Endpoint pour générer un token
app.post('/login', (req, res) => {
    // Ici, vous vérifieriez les informations d'identification et généreriez le token
    const user = {
        id: 1,
        username: 'utilisateur1',
        role: 'admin' // attribuez le rôle à l'utilisateur (admin, user, etc.)
    };

    const token = jwt.sign(user, secretKey);
    res.json({ token });
});

// Endpoint protégé par authentification et autorisation
app.get('/protected', verifyToken, (req, res) => {
    // Assurez-vous que l'utilisateur a le rôle approprié pour accéder à cette ressource
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Accès interdit' });
    }

    res.json({ message: 'Vous avez accès à cette ressource protégée!' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

```

