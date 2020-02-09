let foodWindow;
let menuIsDown = true;

window.addEventListener('load', function()
{ 
    foodWindow = document.querySelector("div#savedFoodWindow");
    document.querySelector("#Saved_Button1").addEventListener("click", moveFoodWindow);
    document.querySelector("#Saved_Button2").addEventListener("click", moveFoodWindow);

})

function moveFoodWindow()
{
    if(menuIsDown)
    {
        foodWindow.style.transform = "translateY(100%)";
        foodWindow.style.transition = "transform 1s ease-out";
    }
    else
    {
        foodWindow.style.transform = "translateY(-100%)";
        foodWindow.style.transition = "transform 1s ease-in";
    }
    menuIsDown = !menuIsDown;
}
