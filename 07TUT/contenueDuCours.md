## CONTENU EXPRESS JS
 
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

## Ce n'est que pour créer un middleware que nous 
```bash
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next(); });
```