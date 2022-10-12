/////////////////////////   *** JAVASCRIPT OPENCLASSROOM *** ///////////////////////////////
//quelques pratiques 
//ne pas faire 
function distance (x, y) {
  let xSq = Math.pow(x, 2)
  let ySq = Math.pow(y, 2)
  let sumOfSq = xSq + ySq
  let dist = Math.pow(sumOfSq, 0.5)
  return dist
}
// mais plutôt faire 
const distance = (x, y) => Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5)
//--------------------------------------------------------------------

//ne pas faire 

// foo sticks around, could be used for anything
// any of these {} blocks could have another line of code added.
let foo
if (x === 1) {
  foo = 'one'
} else if (x === 2) {
  foo = 'two'
} else if (x === 3) {
  foo = 'three'
} else if (x < 1) {
  foo = 'basically none'
} else if (x > 3) {
  foo = 'infinity'
} else {
  foo = 'some kind of fake number'
}
console.log(foo)
// mais plutôt 

// no possible way that it could be more than setting a single value,
// which is used by console.log() and nothing else.
console.log(x === 1 ? 'one'
  : x === 2 ? 'two'
  : x === 3 ? 'three'
  : x < 1 ? 'basically none'
  : x > 3 ? 'infinity'
  : 'some kind of fake number')

//--------------------------------------------------------------------


//--------------------------------------------------------------------
//decalrer une variable
let maVariableTest =2; //camel case
let ma_Variable= 3; //snake case 
console.log(maVariableTest);
console.log(ma_Variable);

//modifier la variable 
let numberOfCats= 3;
numberOfCats= 5;
console.log( numberOfCats)
 
//opérateurs arythmétiques
let totalCDs = 100;
let totalVinyls=55;
let totalMusic = (totalCDs + totalVinyls);
console.log(totalMusic);
let sous( totalVinyls-totalCDS);
console.log( totalMusic);
console.log( sous)

/////////////////////////   *** TABLE *** ///////////////////////////////
//--------------------------------------------------------------------
// initialiser et creation de tableau
let arr = new Array(élément0, élément1, ..., élémentN);
let arr = Array(élément0, élément1, ..., élémentN);
let arr = [élément0, élément1, ..., élémentN];

//--------------------------------------------------------------------
//Opérations fréquentes 
let fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// 2
//--------------------------------------------------------------------

//Accéder (via son index) à un élément du tableau

let first = fruits[0];
// Apple
let last = fruits[fruits.length - 1];
// Banana
//--------------------------------------------------------------------

//Boucler sur un tableau

fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1

//--------------------------------------------------------------------

//Ajouter à la fin du tableau

let newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]

//--------------------------------------------------------------------

//Supprimer le dernier élément du tableau

let last = fruits.pop(); // supprime Orange (à la fin)
// ["Apple", "Banana"];

//--------------------------------------------------------------------

//Supprimer le premier élément du tableau

let first = fruits.shift(); // supprime Apple (au début)
// ["Banana"];

//--------------------------------------------------------------------

//Ajouter au début du tableau

let newLength = fruits.unshift('Strawberry') // ajoute au début
// ["Strawberry", "Banana"];

//--------------------------------------------------------------------

//Trouver l'index d'un élément dans le tableau

fruits.push('Mango');
// ["Strawberry", "Banana", "Mango"]
let pos = fruits.indexOf('Banana');
// 1

//--------------------------------------------------------------------

//Supprimer un élément par son index

let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos

// ["Strawberry", "Mango"]

//--------------------------------------------------------------------

//Supprimer des éléments à partir d'un index

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1, n = 2;

let removedItems = vegetables.splice(pos, n);
// n définit le nombre d'éléments à supprimer,
// à partir de la position pos

console.log(vegetables);
// ["Cabbage", "Carrot"] (le tableau d'origine est changé)

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)

//--------------------------------------------------------------------

//Copier un tableau

let shallowCopy = fruits.slice(); // crée un nouveau tableau qui contient les éléments de fruits
// ["Strawberry", "Mango"]

//--------------------------------------------------------------------

//Comprendre la propriété length
let arr = ["un", "deux", "trois"];
arr[2];         // "trois" - on accède à un élément du tableau
arr["length"];  // 3 - on accède à une propriété du tableau

let arr = new Array(longueurTableau);

// sera équivalent à :
let arr = Array(longueurTableau);

// et aura le même effet que :
let arr = [];
arr.length = longueurTableau;

//--------------------------------------------------------------------

//On a vu comment créer un tableau, il est aussi possible d'affecter des tableaux
//à des propriétés d'objets (que ce soit lors de leur création ou pour les modifier) :

let obj = {};
// ...
obj.prop = [élément0, élément1, ..., élémentN];

// OU
let obj = {prop: [élément0, élément1, ...., élémentN]}

//--------------------------------------------------------------------

//Parcourir un tableau
//Un tableau est une structure de données qui se prête particulièrement aux boucles
//on pourra utiliser ces dernières pour parcourir les éléments du tableau 
//de façon itérative. Voici un exemple de parcours simple :

let couleurs = ['rouge', 'vert', 'bleu'];
for (let i = 0; i < couleurs.length; i++) {
  console.log(couleurs[i]);
}

//--------------------------------------------------------------------

//Si on sait qu'aucun des éléments ne vaut false dans un contexte booléen 
//(par exemple, si le tableau contient des nœuds du DOM), on peut utiliser une 
//formulation encore plus concise :

let divs = document.getElementsByTagName('div');
for (let i = 0, div; div = divs[i]; i++) {
  /* On effectue un traitement sur les div */
}

//--------------------------------------------------------------------

//Cette syntaxe permet d'éviter d'avoir à vérifier la longueur du tableau et 
//de gérer l'affectation de la variable div pour chaque élément du tableau.
//La méthode forEach() fournit une autre méthode pour parcourir un tableau :

let couleurs = ['rouge', 'vert', 'bleu'];
couleurs.forEach(function(couleur) {
  console.log(couleur);
});

//--------------------------------------------------------------------

//Avec les fonctions fléchées (apparues avec ES6 / ECMAScript 2015), 
//on peut obtenir un code plus concis :

let couleurs = ['rouge', 'vert', 'bleu'];
couleurs.forEach(couleur => console.log(couleur));


////////////////////////////////////////////////////////////////////////////////////
//compparaison boucle 
//Utiliser les différents tests d'égalité
//JavaScript fournit trois opérations permettant de comparer des valeurs :

//L'égalité stricte (ou identité ou « triple égal ») utilisant ===,
//L'égalité faible (ou « double égal ») utilisant ==,
//Object.is (ajouté avec ECMAScript 2015).
//Ces trois opérations sont associées à quatre algorithmes d'égalité (depuis ES2015) :

//La comparaison d'égalité abstraite (==)
//La comparaison d'égalité stricte (===)

//Utilisée par Array.indexOf et Array.lastIndexOf et la sensibilité à la casse
//SameValueZero (l'égalité de valeurs nulles)

//Utilisée par les constructeurs TypedArray et ArrayBuffer et par les opérations 
//associées à Map et Set. Depuis ES2016, cet algorithme est également utilisé par 
//String.includes et Array.includes

//SameValue (l'égalité de valeurs)
//Utilisée partout ailleurs
//Selon la comparaison qu'on souhaite effectuer, on choisira une de ces opérations.

//En résumé :

//L'égalité faible (==) effectuera une conversion des deux éléments à 
//comparer avant d'effectuer la comparaison.

//L'égalité stricte (===) effectuera la même comparaison mais sans conversion 
//préalable (elle renverra toujours false si les types des deux valeurs comparées 
//sont différents).

//Enfin Object.is() se comportera comme l'égalité stricte sauf pour les valeurs 
//NaN, -0 et +0 : pour Object.is(), -0 et +0 seront différents mais on aura Object.is(NaN, NaN) qui sera true. (Généralement, quand on compare NaN avec NaN en utilisant l'égalité stricte ou l'égalité faible, cela donne false afin de respecter la norme IEEE 754.)

//////////////////////////////////////////////////////////////////////////////////

<script>
    $(document).ready(function() {
        fetch('http://127.0.0.1:35980/returnBalancesDates')
            .then(dataWrappedByPromise => dataWrappedByPromise.text())
            .then(data => {
        console.log(data)
        var choices =  data.split(' ');
        console.log(choices);
        var x = document.createElement("SELECT");
        x.setAttribute("id", "mySelect");
        x.setAttribute("name", "oldbaldate");
        document.body.appendChild(x);

        for (i = 0; i < choices.length; i = i + 1) {
            var z = document.createElement("option");
            z.setAttribute("value", choices[i]);
            var t = document.createTextNode(choices[i]);
            z.appendChild(t);
            document.getElementById("mySelect").appendChild(z);
        }
        $(x).appendTo('#selectOldBalance');
        });
    });
</script>

//////////////////////////////////////////////////////////////////////////////////

fetch("https://localhost:8000", {method:"POST", body:fd})
  .then(response => response.json())
  .then(response => {
    response['lang'] = response['lang'].slice(-2);
    return response;
  })
  .then(response => {
    response['food'] = "Temporary";
    return response;
  })
  .then(function detectType(response) {
    switch(response['lang']) {
      case 'abc':
          response['food'] = "Bananas";
          break;
      case 'def':
          response['food'] = "Apples";
          break;
      default:
          response['food'] = "Bananas";
          break;
     }
    return response;
  })
  .then(response => {
    console.log(response['text']);
    console.log(response['food']);
  })
  .catch(err => console.error(err));
}

/////////////////////////////////////////////////////////////////////////////////

async function fetchList(array){
	const url = new URL('http://localhost:8080/some-route');
	
	array.forEach(item => url.searchParams.append('list[]', item));	

	const res = await fetch(url);
	return res.json();
}

fetchList(['item1','item2', 'item3'])

////////////////////////////////////////////////////////////////////////////////

const utf8Decoder = new TextDecoder('utf-8');
  const response = await fetch(fileURL);
  const reader = response.body.getReader();
  let { value: chunk, done: readerDone } = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : '' ;

  /////////////////////////////////////////////////////////////////////////////////