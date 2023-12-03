## CONTENU MIDDLEWARE
 
 Ici on va apprendre à mettre en place des Middleware

## Un Middleware c'est quoi ?

**En Node.js, un middleware est une fonction qui a accès à l'objet de requête (request object), à l'objet de réponse (response object), et à la fonction suivante dans le cycle de demande-réponse de l'application. Un middleware peut effectuer des actions sur la requête, la réponse, ou appeler la fonction suivante dans le cycle.**
- Is really anything beetween the request and the response.

## Commande basic pour appliquer un middleware 
```bash
app.use(express.urlencoded({ extended: false }));
```

## Commande pour créer un middleware JSON
```bash
app.use(express.json());
```

## Commande pour avoir un middleware qui sert un Répertoire comme root
```bash
app.use(express.static(path.join(__dirname, '/public')));
```

## Ce n'est que pour créer un middleware que nous appliquons next()
```bash
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next(); 
});
```

## On crée un logger pour suivre les évènements avec ceci 
```bash
app.use((req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
});
```

## La librairie cors
CORS est un mécanisme de sécurité utilisé par les navigateurs web pour contrôler les requêtes HTTP entre différentes origines (domaines).
```bash
npm i cors
```

## Dans ce whiteliste est mis tout les liens avaec lesquels notre serveur peut communiquer 
```bash
const whiteliste = ['https://www.google.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];
const corsOption = {
    origin: (origin, callback) => {
        if (whiteliste.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSucessStatus: 200
}

app.use(cors(corsOption));
```
