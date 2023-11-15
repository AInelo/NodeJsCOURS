// LA LIBRAIRIE POUR FAIRE DE MANIPULATION DE FICHIER
const fs = require('fs');


// CODE POUR CREER UN REPERTOIRE DANS DEUX CAS 
// LE CAS OU IL EXITE DEJA, IL NE LE CREER PLUS

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created')
    });
}

// CODE POUR SUPPRIMER UN REPERTOIRE

// if (fs.existsSync('./new')) {
//     fs.rmdir('./new', (err) => {
//         if (err) throw err;
//         console.log('Directory REMOVED')
//     });
// }

