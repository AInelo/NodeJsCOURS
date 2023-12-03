## CONTENU ROUTING
 
 Ici on va apprendre à mettre en place des Routes

## Par où commencer ?
On crée un dossier "routes" pour définir les routes

## Les préliminaires pour la création des routes 
```bash
const express = require('express');
const router = express.Router();
const path = require('path');


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
1. ON crée dans le dossier **"routes"**, le dossier **"api"** et pour ce d'employees, on crée **employees.js** dans **"api"**