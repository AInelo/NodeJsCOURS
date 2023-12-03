## CONTENU EXPRESS JS
 
 Ici on va concervoire un serveur avec NodeJs avec le 
 Frame work Express Js 

# npm i express

 C'est la commande qu'il faut pour installer Express 
 comme une dépendance 

# Voici les dépendances à ajouter avant le projet 
```bash
const express = require('express');
const app = express();
const path = require('path');
```
ce sont les dépences normal 

# Pour l'appel et le lancement du serveur:

```bash 
app.listen(PORT, () => console.log(`Le serveur tourne sur ${PORT}`));

```

# Pour faire de la redirection optionnelle :
C'est à dire qu'on peut mettre /index ou /index.html, on aura les mêmes résultats

```bash
app.get('^/$|/index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
```