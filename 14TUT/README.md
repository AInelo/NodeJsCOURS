# ICI il s'agit de comprendre comment installé MONGO  


## Qu'est-ce qu'un modèle dans Mongo DB ? 
On crée un fichier Employee.js dans le répertoire 
"model" qui renferme tout les data en format JSON
et on y insère ce code comme model MONGO DB

```bash
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const employeeSchema = new Schema ({
    firstname : {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Employee', employeeSchema);
```

## Etapes suivante 
Après avoir créer le Schema dans le répertoire model, 
on utilise le Scheman dans un des controller