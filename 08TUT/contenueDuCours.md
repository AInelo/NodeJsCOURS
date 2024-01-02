## CONTENU ROUTING
 
 Ici on va apprendre à mettre en place des Routes

## Par où commencer ?
On crée un dossier "routes" pour définir les routes

## Les préliminaires pour la création des routes 
```bash
const express = require('express');
const router = express.Router();
const path = require('path');

...

module.exports = router; 
```

## Dans le dossier Public
On doir y avoir les fichier CSS JS JSON pour les dépendances

## Dans le dossier views
On doit avoir les fichiers HTMLs

## Ces commandes permettent au fichier statics HTML CSS d'avoir accès au CSS et JS dans le Public
```bash
app.use('/', express.static(path.join(__dirname, '/public')));
```
```bash
app.use('/subdir', express.static(path.join(__dirname, '/public')));
```
et on crée les routes dans le fichier root.js

## Mise en place d'une REST API
1. On crée dans le dossier **"routes"**, le dossier **"api"** et pour ce cas d'employees, on crée **employees.js** dans **"api"**
2. Dans le dossier **"data"**, on créer le fichier employees.json
3. On teste  les routes **http://localhost:3500/employees/**  avec Postman

## En quoi on utilise app.use
il est utilisé pour ne pas définir les routes directement dans le server.js 
```bash
app.use('/employees', require('./routes/api/employees'));
```