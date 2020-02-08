document.getElementsByClassName("Saved_Button").onClick = function(){ moveFoodWindow();};


window.document.onload = function(e)
{ 
    let foodWindow = document.getElementById('savedFoodWindow');
}

function moveFoodWindow()
{
    console.log("Sup");
    if(foodWindow.style.visibility == "visable")
    {
        foodWindow.style.visibility = "hidden";
        //foodWindow.style.transform = "translateY(0%)";
    }
    else
    {
        foodWindow.style.visibility = "visable";
        //foodWindow.style.transform = "translateY(100%)";
    }
}
