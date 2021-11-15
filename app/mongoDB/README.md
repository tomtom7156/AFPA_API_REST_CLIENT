<div id="top"></div>

## MongoDB

[Télécherger MongoDB](https://www.mongodb.com/try/download/community)

Dans notre API on utilise MongoDB pour la gestion des données. Pour ce faire, il vous faut dans un premier temps télécharger le logicielle MongoDB via le lien ci-dessus.
Une fois télécharger et lancer, vous aller vous connecter en localhost via cette url:
* url
  ```sh
  mongodb://localhost/
  ```
![connection à localhost][mongodbrul-screenshot]

Une fois connecter, vous allez créer une nouvelle basse de données via le bouton vert `CREATE DATABASE` en haut de la fenêtre.

![Nouvelle Basse de donnée][newBD-screenshot]

Dans le Database Name vous notait `twovago` et dans Collection Name `hotels`.
Ensuite vous crée des nouvelles collections via le bouton vert `CREATE COLLECTION` en haut de la fenêtre.
(Répéter cette opération pour chaque collection)

![création d'une collection][newBD-screenshot]

Puis cliquer sur le boutton vert ADD DATA, selectioner Import File et ajouter le ficher `hotels.json`.
(Faire cette opération pour chaque collection correspondant au fichier JSON)

<p align="right">(<a href="#top">retour au sommet</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[mongodbrul-screenshot]: https://i.imgur.com/u8U2kQ9.png
[newBD-screenshot]: https://i.imgur.com/yxOQslJ.png
[newCollection-screenshot]: https://i.imgur.com/NVcHEWy.png
