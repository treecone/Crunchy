//Serches up recipe
//https://api.wegmans.io/products/search?query={query}[&results][&page] 

let recipe;
let ingredients = [];
let wegIngredients = [];
let wegPrices = [];
let lookupReady = true;
let loadingFinished = true;

async function saveCurrRecipe()
{
    loadingFinished = false;
    for(let i = 0; i < ingredients.length; i++)
    {
        waitForIt();
        function waitForIt(){
            if (!lookupReady) {
                setTimeout(function(){waitForIt()},100);
            } else {
                findWegmansIngrediant(ingredients[i]);
                lookupReady = false;
            }
        }
    }
    console.log(wegIngredients);

    for(let i = 0; i < ingredients.length; i++)
    {
        waitForIt();
        function waitForIt(){
            if (!lookupReady) {
                setTimeout(function(){waitForIt()},100);
            } else {
                if(wegIngredients[i] != undefined)
                {
                    findPrice(wegIngredients[i]);
                    lookupReady = false;
                }
                else
                {
                    wegPrices.push(undefined);
                }
            }
        }
    }
    console.log(wegPrices);

    function waitForIt(){
        if (wegPrices.length != ingredients.length) {
            setTimeout(function(){waitForIt()},100);
        } else {
            return {
                recipe: recipe,
                ingredients: ingredients,
                wegIngredients: wegIngredients,
                wegPrices: wegPrices
            };
        }
    }
    let promise = new Promise((resolve, reject) => {
        waitForIt();
        function waitForIt(){
            if (wegPrices.length != ingredients.length) {
                setTimeout(function(){waitForIt()},100);
            } else {
                resolve({
                    recipe: recipe,
                    ingredients: ingredients,
                    wegIngredients: wegIngredients,
                    wegPrices: wegPrices
                });
            }
        }
    });
    return await promise;
}

function findWegmansIngrediant(ingred)
{
    var xhr = new XMLHttpRequest();

    xhr.onload = ingredientFound;

    let url = "https://api.wegmans.io/products/search?query=\"" + ingred + "\"&results=10&page=1&api-version=2018-10-18";

    xhr.open("GET", url);

    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Subscription-Key", "444c1519a1094448a1fd6f6fedb13ae6");

    xhr.send();
}

function findRandomRecipe()
{
    loadingFinished = false;
    var xhr = new XMLHttpRequest();

    xhr.onload = recipeFound;

    let url = "https://www.themealdb.com/api/json/v1/1/random.php";

    xhr.open("GET", url);

    xhr.send();
}

function recipeFound(e)
{
    let xhr = e.target;
    recipe = JSON.parse(xhr.responseText).meals[0];
    console.log(recipe);
    getIngredients();
    console.log(ingredients);
    loadingFinished = true;
    saveCurrRecipe().then(value => console.log(value));
    console.log(save);
    //findWegmansIngrediant(ingredients[0]);
}

async function getRecipe()
{
    let promise = new Promise((resolve, reject) => {
        waitForIt();
        function waitForIt(){
            if (!loadingFinished) {
                setTimeout(function(){waitForIt()},100);
            } else {
                resolve(recipe);
            }
        }
    });
    return await promise;
}

function ingredientFound(e)
{
    let xhrText = e.target;
    let foundIngred = JSON.parse(xhrText.responseText).results[0];
    wegIngredients.push(foundIngred);
    lookupReady = true;
    //console.log(foundIngred);

    /*let xhr = new XMLHttpRequest();

    xhr.onload = realIngredientFound;

    let url = "https://api.wegmans.io/" + foundIngred._links[0].href;

    xhr.open("GET", url);

    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Subscription-Key", "444c1519a1094448a1fd6f6fedb13ae6");

    xhr.send();*/
}

function findPrice(ingred)
{
    //console.log("HELLO");
    let xhr = new XMLHttpRequest();

    xhr.onload = foundPrice;

    let url = "https://api.wegmans.io/" + ingred._links[3].href;

    xhr.open("GET", url);

    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Subscription-Key", "444c1519a1094448a1fd6f6fedb13ae6");

    xhr.send();
}

function foundPrice(e)
{
    let xhr = e.target;
    let price = JSON.parse(xhr.responseText);
    console.log(price)
    if(price.stores[0] == undefined)
        wegPrices.push(undefined);
    else
    {
        //console.log(price);
        wegPrices.push(price.stores[0].price);
    }

    lookupReady = true;
}

function getIngredients()
{
    if(recipe.strIngredient1 == "") return;
        ingredients.push(recipe.strIngredient1);
    if(recipe.strIngredient2 == "") return;
        ingredients.push(recipe.strIngredient2);
    if(recipe.strIngredient3 == "") return;
        ingredients.push(recipe.strIngredient3);
    if(recipe.strIngredient4 == "") return;
        ingredients.push(recipe.strIngredient4);
    if(recipe.strIngredient5 == "") return;
        ingredients.push(recipe.strIngredient5);
    if(recipe.strIngredient6 == "") return;
        ingredients.push(recipe.strIngredient6);
    if(recipe.strIngredient7 == "") return;
        ingredients.push(recipe.strIngredient7);    
    if(recipe.strIngredient8 == "") return;
        ingredients.push(recipe.strIngredient8);
    if(recipe.strIngredient9 == "") return;
        ingredients.push(recipe.strIngredient9);
    if(recipe.strIngredient10 == "") return;
        ingredients.push(recipe.strIngredient10);
    if(recipe.strIngredient11 == "") return;
        ingredients.push(recipe.strIngredient11);
    if(recipe.strIngredient12 == "") return;
        ingredients.push(recipe.strIngredient12);
    if(recipe.strIngredient13 == "") return;
        ingredients.push(recipe.strIngredient13);
    if(recipe.strIngredient14 == "") return;
        ingredients.push(recipe.strIngredient14);
    if(recipe.strIngredient15 == "") return;
        ingredients.push(recipe.strIngredient15);
    if(recipe.strIngredient16 == "") return;
        ingredients.push(recipe.strIngredient16);
    if(recipe.strIngredient17 == "") return;
        ingredients.push(recipe.strIngredient17);
    if(recipe.strIngredient18 == "") return;
        ingredients.push(recipe.strIngredient18);
    if(recipe.strIngredient19 == "") return;
        ingredients.push(recipe.strIngredient19);
    if(recipe.strIngredient20 == "") return;
        ingredients.push(recipe.strIngredient20);
}

findRandomRecipe();