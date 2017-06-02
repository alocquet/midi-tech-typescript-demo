# Intégration avec jQuery avec code legacy
* Migration vers projet npm

`npm init`

* Ajout de la description jquery

`npm install @types/jquery`

* créer une page html, avec ajout script jquery et  insérer le script dist/index.js

* lancer l'interpreteur typscript

`tsc --watch --outDir dist index.ts `

# Utilisation
Pour utiliser jquery dans le fichier index.js, il faut utiliser la balise `reference` 

Exemple :
```javascript
/// <reference path="node_modules/@types/jquery/index.d.ts" />

$("selector").append("Hello world")

```


# Ajout de jqueryui
* Ajout de la description jqueryui

`npm install @types/jqueryui`

* Ajout dans la page html de jquery-ui.js
* Ajout de la reference dans le fichier index.ts

/// <reference path="node_modules/@types/jqueryui/index.d.ts" />

* Modifier le code pour ajout un effet


$("#todo div").hover((item) => {
    $(item.target).effect("highlight");
})


