# ICI il s'agit de comprendre comment MONGO DB fonctionne 

```bash
npm i mongoose 
```
## Exemple de connexion 
On crée un fichier dbConn.js dans le répertoire config et 
quand on a fini, on établie la connexion avec le code suivant.
```bash
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB

```

## Ceci c'est pour avoir une connection obligatoire avec la mise en place du serveur

```bash
mongoose.connection.once('open', () => {
    console.log('Connected to MOngoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} )
```