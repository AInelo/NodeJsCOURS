# CONTENU d'AUTHENTIFICATION 


## Pour encrypter les mots de passe 
```bash
npm i dotenv jsonwebtoken cookie-parser
```
## Pour avoir un ACCESS_TOKEN et REFRESH_TOKEN
```bash
node
```

```bash
require('crypto').randomBytes(64).toString('hex')
```

## JE RETIENS

1. on crée un middleware pour générer un token lors de chaque authentification (c'est ce que fait la fonction verifyJWT)