## CONTENU EXPRESS JS
 
 Ici on va concervoire un serveur avec NodeJs avec le 
 Frame work Express Js 

# npm i express

 C'est la commande qu'il faut pour installer Express 
 comme une dépendance 

# Voici les dépences à ajouter avant le projet 
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