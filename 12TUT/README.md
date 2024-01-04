# ICI il s'agit de Roles et permissions in MVC Models of Node JS

Comprendre la gestion des rôles utilisateur et l'autorisation dans Node.js implique généralement l'utilisation de JSON Web Tokens (JWT) pour l'authentification. Voici un guide simple qui vous donne une idée pratique de la façon de mettre en œuvre des rôles utilisateur et l'autorisation dans une application Node.js.

## A quoi cela sert 

Contrôle d'accès : L'autorisation permet de déterminer quelles parties de votre application un utilisateur a le droit d'accéder. Les rôles peuvent être utilisés pour définir des niveaux d'accès différents en fonction du type d'utilisateur (administrateur, utilisateur normal, etc.).

1. Sécurité : En utilisant des rôles et des autorisations, vous pouvez restreindre l'accès à certaines fonctionnalités ou données sensibles, assurant ainsi que seuls les utilisateurs autorisés peuvent effectuer des actions spécifiques.

2. Protection des données : Vous pouvez utiliser les rôles pour spécifier quelles données un utilisateur est autorisé à voir ou à modifier. Cela est particulièrement important dans les applications où différents utilisateurs ont des niveaux d'accès différents à des informations.

3. Conformité aux normes de sécurité : Dans de nombreux secteurs, il est obligatoire de mettre en place des contrôles d'accès stricts pour garantir la confidentialité et la sécurité des données. La gestion des rôles et de l'autorisation aide à respecter ces normes.

4. Personnalisation de l'expérience utilisateur : Vous pouvez adapter l'expérience utilisateur en fonction des rôles, en affichant différentes fonctionnalités ou interfaces en fonction du type d'utilisateur. Par exemple, un administrateur peut avoir accès à un tableau de bord avancé par rapport à un utilisateur standard.

5. Audit et traçabilité : En attribuant des rôles spécifiques à chaque utilisateur, vous pouvez suivre et auditer les actions effectuées par ces utilisateurs dans l'application. Cela peut être utile pour le débogage, la conformité aux réglementations et la détection d'activités suspectes.


# EXEMPLE
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


## Étape 2: Utilisation des rôles pour l'autorisation

Dans cet exemple, nous avons un endpoint /protected qui nécessite à la fois l'authentification et l'autorisation. L'utilisateur obtient un rôle lors de la connexion (admin dans cet exemple). Lorsqu'un utilisateur tente d'accéder à l'endpoint /protected, nous vérifions si son rôle lui donne l'autorisation d'accéder à cette ressource.