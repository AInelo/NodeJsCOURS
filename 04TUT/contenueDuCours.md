## CONTENU 
 
 Ici on va comprendre comment les axios fonctionne 
 
# "npm i nodemon -g" = 
 Nodemon est un moniteur de fichier, il permet de voir les modifications
 que l'on fait sur un fichier en live.

# npm init 
 Permet d'initier les packages npm et créer le fichier package.json

# npm init -y 
 Initialise npm et répond oui à toutes les questions en même temps

# le package.json
le package.json est ce que le npm lit pour savoir quoi installer pour notre projet 

#  npm i date-fns
 Installation d'un package de date fonction et ce package viens directement
 dans les dépendances du au niveau du package.json

# npm install 
 Quand exécute cette commande, cela lit le document package.json
 et install les modules voulu

#  npm i nodemon -D
 Pour ajouter nodemon comme une devDependencies

# Ajout des commandes dans scripts dans le package.json
 A ce niveau nous devrons ajouter des éléments à l'objet scripts du 
 package.json et on : 

    "scripts": {
    "start": "node index",
    "dev": "nodemon index"
  },

et là on peut  exécuter les commandes  *"npm start"* et *"npm run dev"*

# le package uuid 
 Permet d'attribuer un id à chaque évènement

# "uuid": "^9.0.1"
Quand on garde les éléments comme cela, ils ont à vouloir se mettre à jour 
Donc pour éviter cela, on retire "^" et cela devient 
            *"uuid": "9.0.1"* et
# "uuid": "*" 
 Signifie, utilise toutes les version dernirès en faisant toujours une mise à jour

# npm i uui@la_version_choisie
 Permet d'avoir la version choisie en installation 

# npm update
 Permet de faire la mise de toutes les mise à jours disponible

# npm rm nodemon -D 
Permet de désinstaller la dépendance, mais il reste dans le script du package.json en écritures