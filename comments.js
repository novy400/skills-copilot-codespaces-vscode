// Créer un serveur web qui écoute sur le port 3000 et qui renvoie le fichier index.html
// à chaque requête GET.
// Si le fichier n'existe pas, renvoyer une erreur 404.
// Si la méthode n'est pas GET, renvoyer une erreur 405.
// Si une erreur survient, renvoyer une erreur 500.
// Si le fichier est bien renvoyé, renvoyer le code 200.
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                response.statusCode = 404;
                response.end('Not found');
            } else {
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                response.end(data);
            }
        });
    } else {
        response.statusCode = 405;
        response.end('Method not allowed');
    }
});

server.listen(3000, () => {
    console.log('Server started');
});