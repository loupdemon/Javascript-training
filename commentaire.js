/**
 * @param {number} age
 * @param {string} pays code pays sur 2 caractères
 * @returns {boolean}
 */

function canDrive(age, pays) {
  if ((age > 18 && pays === "FR") || (age > 16 && pays === "US")) {
    return true;
  }
  return false;
}

//call function
console.log("essaie age coduite avec 19 ans en france");
console.log(canDrive(19, "FR"));

/**
 * @return {{id: number, title: string, body: string}[]}  tableau des objets
 */
function fetchPost() {}

const z = fetchPost();
z[0].id; //ça propose l'auto compélation

/**
 * @return {Array<string>}
 */
function fetchArticle() {}

/**
 * @return {Promise<{id: number, title: string, body: string}[]>}
 */
async function fetchPromesse() {}
a = fetchPromesse().then((posts) => {
  const post = posts[0].title + posts[0].body;
});

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title
 * @property {string} body
 */
/**
 * @return {Promise<Post[]>}
 */
async function fetchProduit() {}
a = fetchProduit().then((posts) => {
  const post = posts[0].body;
  post.t;
});

/**
 * @typedef {((str:string,age:number) => Com)} Com
 */
async function fetchCommentaire() {}
fetchCommentaire()("FR,");

class A {
  Constructor() {
    /**
     * prénom de l'utilisateur
     * @type {string[]}
     */
    this.firstname = [];
  }
}
const b = new A();
/**
 * @type {string[]}
 */
b.firstname;
