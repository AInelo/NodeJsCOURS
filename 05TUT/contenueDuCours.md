## CONTENU 
 
 Ici on va concervoire un serveur avec NodeJs

# const server = http.createServer((req, res) => {
 #   console.log(req.url, req.method);
# });
 
 Dans cette commande, req = requête et res = réponse 

#  ON APPLIQUE 
les fonctions pour le serveur ne puisse servir que des fichiers qui existe réellement
si un fichiers n'existe pas, le serveur renvoi erreur 404 ou 301

# const myEmitter = new Emitter();
# myEmitter.on('log', (msg, filename) => logEvents(msg, filename));
 Cette fonction me permet d'observer les erreurs, les methodes de requêtes 
 et aussi les fichiers demandé par le client.

# Conseil 
 A chaque fois que je viens sur ce document ressources, je dois 
 bien me poser et comprendre le code, car c'est la base même de la mise en place d'un serveur
