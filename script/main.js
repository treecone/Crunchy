let foodWindow;
let detailMenu;
let menuIsDown = true;
let detailIsDown = true;

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
})

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
