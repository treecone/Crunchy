let foodWindow;
let detailMenu;
let menuIsDown = true;
let detailIsDown = true;

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
    if(menuIsDown)
    {
        foodWindow.style.transform = "translateY(150%)";
        foodWindow.style.transition = "transform 1s ease-out";
    }
    else
    {
        foodWindow.style.transform = "translateY(-150%)";
        foodWindow.style.transition = "transform 1s ease-in";
    }
    menuIsDown = !menuIsDown;
}

function moveDetailWindow ()
{
    if(detailIsDown)
    {
        detailMenu.style.transform = "translateY(-150%)";
        detailMenu.style.transition = "transform 1s ease-out";
    }
    else
    {
        detailMenu.style.transform = "translateY(150%)";
        detailMenu.style.transition = "transform 1s ease-in";
    }
    detailIsDown = !detailIsDown;
}
