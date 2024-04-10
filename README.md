<div id="top"></div>

<!-- ABOUT THE PROJECT -->
## À propos du projet

API REST crée en formation fullstack. Cette API de test nous permet de voir une liste d'hôtels, de clients et de réservations, afin de les afficher, les ajouter, les modifier et les supprimer.

<p align="right">(<a href="#top">back to top</a>)</p>

### Construit avec

* [Node.js](https://nodejs.org/fr/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Express](https://www.npmjs.com/package/express)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [Cors](https://www.npmjs.com/package/cors)
* [BodyParser](https://www.npmjs.com/package/body-parser)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [MongoDB](https://www.mongodb.com/try/download/community)
* [VSCode](https://code.visualstudio.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

### Conditions préalables

1. Clone le project
   ```sh
   git clone https://github.com/tomtom7157/AFPA_API_REST_CLIENT.git
   ```
2. Aller dans le dossier `AFPA_API_REST_CLIENT`.
3. Install NPM packages
   ```sh
   npm install
   ```
3. Crée un fichier `.env` à la racine du dossier
   ```sh
   MONGO_URL=mongodb://localhost:27017/votre_nom_de_bdd
   PORT=5000
   ```

### Installation packages

* npm
  ```sh
  npm install npm@latest -g
  ```
* nodemon
  ```sh
  npm install -g nodemon
  ```
* express
  ```sh
  npm install express
  ```
* mongoose
  ```sh
  npm install mongoose
  ```
* cors
  ```sh
  npm install cors
  ```
* body-parser
  ```sh
  npm install body-parser
  ```
* dotenv
  ```sh
  npm install dotenv
  ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Utilisation

Il vous faut remplacer `:id` par un identifiant valide.
Pour afficher les hôtels ou les réservations, remplacer `/clients` par `/hotels` ou `/reservations`

* Afficher tous les clients
 ```http
 GET http://127.0.0.1/clients HTTP/1.1
 ```

* Afficher un client via son id
 ```http
 GET http://127.0.0.1/clients/:id HTTP/1.1
 ```

* Ajouter un client
 ```http
 POST http://127.0.0.1/clients/ajout HTTP/1.1
 Content-Type: application/json

 {
    "nom": "Doe",
    "prenom": "John",
    "email": "John.Doe@server.xyz",
    "num": "06 07 08 09 10"
 }
 ```

* Modifier un client via son id
 ```http
 PUT http://127.0.0.1/clients/modifier/:id HTTP/1.1
 Content-Type: application/json

 {
    "nom": "Loyalty",
    "email": "Jean.Loyalty@serveur.xyz"
 }
 ```
* Suprimer un client via son id
 ```http
 DELETE http://127.0.0.1/clients/suprimer/:id HTTP/1.1
 ```

<p align="right">(<a href="#top">back to top</a>)</p>
