## CONTENU 
 
 Ici on va concervoire un serveur avec NodeJs

# const server = http.createServer((req, res) => {
 #   console.log(req.url, req.method);
# });
 
 Dans cette commande, req = requête et res = réponse 

#  ON APPLIQUE 
les fonctions pour le serveur ne puisse servir que des fichiers qui existe réellement
si un fichiers n'existe pas, le serveur renvoi erreur 404 ou 301

