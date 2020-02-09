let foodWindow;
let detailMenu;

let cards;
let titles;

window.addEventListener('load', function()
{
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

function moveDetailWindow ()
{
    if(detailMenu.className == "up")
    {
        detailMenu.className = "";
    }
    else
    {
        detailMenu.className = "up";
    }
}

function createGalleryImage(imageLink, id)
{
    let galleryElement = `<fiqure class="galleryImg"><img src="${imageLink}" alt="ImageGalleryPhoto"></fiqure>`;
    //galleryElement.dataset.galleryId = id;
    document.querySelector("#savedImages").innerHTML += galleryElement;
    console.log("We are herer");
}
function ILoveWhales ()
{
    document.querySelector("img#foodPicture").src = "media/whaleB.jpg"
}
