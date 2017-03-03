Création du projet 
==================

Initilialisation
----------------
`npm init`

Ajout de webpack
----------------
`npm install webpack --save-dev`

Precompiler un fichier js
----------------
`webpack app/index.js build/index.js`

Générer un fichier index.html
----------------
`npm install html-webpack-plugin --save-dev`

Ce plugin permettra de générer un fichier `index.html` contenant le nécessaire pour lancer l'application en utilisant le fichier js généré par webpack

Ajout du fichier webpack.config.js
-----------------
Ce fichier va indiquer à `webpack`:
* le repertoire contenant les fichiers à intégrer
* le fichier de sortie
* le contenu de la page index.html

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  //
  // Entries have to resolve to files! It relies on Node
  // convention by default so if a directory contains *index.js*,
  // it will resolve to that.
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
  ],
};
```

Pour tester
--------------------
Installer `serve` via la commande `npm install server -g`


Pour réaliser le rafraichissement automatique
--------------------
Le plugin `webpack-dev-server` permet d'installer un serveur webpack permettant de recompiler et de rafraichir la page html.

Pour l'installer : `npm install webpack-dev-server --save-dev`

Lancer le serveur via la commande : 
`node_modules/.bin/webpack-dev-server`

Pour visualiser la page, aller sur `http://localhost:8080/``

Toute modification sur les fichiers js entrainera un rafraichissement de la page.

Ajout de TypeScript
----------------------
Installer les plugins `typescript`et `ts-loader`.

`npm install --save-dev typescript ts-loader`

Créer un fichier `tsconfig.js`
----------------------
Ajouter un fichier `tsconfig.js`à la racine du projet

```javascript
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react",
    "allowJs": true
  }
}
```












