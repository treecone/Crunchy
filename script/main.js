let foodWindow;
let detailMenu;

let cards;
let titles;

window.addEventListener('load', function()
{
    getResolution();
    foodWindow = document.querySelector("div#savedFoodWindow");
    detailMenu = document.querySelector("div#foodDetailWindow");
    detialWindow = document.querySelector("div#foodDetailWindow");
    document.querySelector("#Saved_Button1").addEventListener("click", moveFoodWindow);
    document.querySelector("#Saved_Button2").addEventListener("click", moveFoodWindow);
    let allGalleryButtons = document.querySelectorAll(".galleryImg");
    for(let foodButton of allGalleryButtons)
    {
        foodButton.addEventListener("click", moveDetailWindow);
    }
    document.querySelector("#arrowButton").addEventListener("click", moveDetailWindow);

    cards = this.document.querySelectorAll(".demo__card");
    titles = this.document.querySelectorAll(".food_titles");

    loadRecipe(0);
    function loadRecipe(i)
    {
        loadRecipieInfo(i, cards[numOfCards - 1 - i], titles[i]).then(value =>
            {
                if(i < 5)
                {
                    loadRecipe(i + 1);
                }
        });
    }

    loadSavedRecipies();
});

function moveFoodWindow()
{
    if(foodWindow.className == "down")
    {
        foodWindow.className = "";
    }
    else
    {
        foodWindow.className = "down";
    }
}

function moveDetailWindow (e)
{
    console.log("Moving detail window");
    console.log(e.target);
    if(detailMenu.className == "up")
    {
        detailMenu.className = "";
    }
    else
    {
        loadDetails(this);
        detailMenu.className = "up";
    }
}

function createGalleryImage(imageLink, id)
{
    let galleryElement = `<fiqure class="galleryImg"><img src="${imageLink}" alt="ImageGalleryPhoto"></fiqure>`;
    //galleryElement.dataset.galleryId = id;
    document.querySelector("#savedImages").insertAdjacentHTML("beforeend", galleryElement);
    console.log(document.querySelector("#savedImages"));
    document.querySelector("#savedImages").lastChild.addEventListener("click", moveDetailWindow);
    document.querySelector("#savedImages").lastChild.dataset.galleryId = id;
}

function loadDetails(galleryElement)
{
    console.log(galleryElement);
    let id = parseInt(galleryElement.dataset.galleryId);
    let detailWindow = document.querySelector("#foodDetailWindow");
    detailWindow.querySelector("#foodPicture").src = savedFoods[id].recipe.strMealThumb;
    detailWindow.querySelector("#foodList h2").innerHTML = savedFoods[id].recipe.strMeal;
    let price = 0;

    let list = detailWindow.querySelector("#foodList dl");
    list.innerHTML = "";
    for(let i = 0; i < savedFoods[id].ingredients.length; i++)
    {
        if(savedFoods[id].wegIngredients[i] && savedFoods[id].wegPrices[i])
        {
            price += savedFoods[id].wegPrices[i];
            list.innerHTML += `<dt>${savedFoods[id].ingredients[i]}</dt><dd>Wegmans: ${savedFoods[id].wegIngredients[i].name} for $${savedFoods[id].wegPrices[i]}</dd>`;
        }
        else if(!savedFoods[id].wegIngredients[i])
            list.innerHTML += `<dt>${savedFoods[id].ingredients[i]}</dt><dd>Wegmans: Product could not be found.</dd>`;
        else if(!savedFoods[id].wegPrices[i])
            list.innerHTML += `<dt>${savedFoods[id].ingredients[i]}</dt><dd>Wegmans: ${savedFoods[id].wegIngredients[i].name} : Price not found.</dd>`;
    }
    detailWindow.querySelector("#foodList p").innerHTML = "Estimated Price: $" + price.toFixed(2); 
    detailWindow.querySelector("form").action = savedFoods[id].recipe.strSource;
}

function ILoveWhales ()
{
    document.querySelector("img#foodPicture").src = "media/whaleB.jpg"
}

function getResolution() {
    if(screen.width/screen.height > 0.85)
        alert("Your screen resolution is not supported for this application");

}