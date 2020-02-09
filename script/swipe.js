//Created by https://codepen.io/suez/pen/MaeVBy?editors=0010

let counter = 0;
var numOfCards = 6;

$(document).ready(function () {

    var animating = false;
    var cardsCounter = 0;
    var decisionVal = 80;
    var pullDeltaX = 0;
    var deg = 0;
    var $card, $cardReject, $cardLike;
    var titles = document.querySelectorAll('div.food_titles');

    function pullChange() {
        animating = true;
        deg = pullDeltaX / 10;
        $card.css("transform", "translateX(" + pullDeltaX + "px) rotate(" + deg + "deg)");

        var opacity = pullDeltaX / 100;
        var rejectOpacity = (opacity >= 0) ? 0 : Math.abs(opacity);
        var likeOpacity = (opacity <= 0) ? 0 : opacity;
        $cardReject.css("opacity", rejectOpacity);
        $cardLike.css("opacity", likeOpacity);
    };

    function release() {

        if (pullDeltaX >= decisionVal) {
            $card.addClass("to-right");
            saveFood();
        } else if (pullDeltaX <= -decisionVal) {
            $card.addClass("to-left");
            reloadRecipe();
        }

        if (Math.abs(pullDeltaX) >= decisionVal) {
            $card.addClass("inactive");
            titles[cardsCounter].id = "";
            setTimeout(function () {
                $card.addClass("below").removeClass("inactive to-left to-right");
                cardsCounter++;
                counter++;
                $card.children('img').attr("src", "")
                if (cardsCounter === numOfCards) {
                    cardsCounter = 0;
                    counter = 0;
                    $(".demo__card").removeClass("below");
                }
                titles[cardsCounter].id = "active";
            }, 300);
        }

        if (Math.abs(pullDeltaX) < decisionVal) {
            $card.addClass("reset");
        }

        setTimeout(function () {
            $card.attr("style", "").removeClass("reset")
                .find(".demo__card__choice").attr("style", "");

            pullDeltaX = 0;
            animating = false;
        }, 300);
    };

    $(document).on("mousedown touchstart", ".demo__card:not(.inactive)", function (e) {
        if (animating) return;

        $card = $(this);
        $cardReject = $(".demo__card__choice.m--reject", $card);
        $cardLike = $(".demo__card__choice.m--like", $card);
        var startX = e.pageX || e.originalEvent.touches[0].pageX;

        $(document).on("mousemove touchmove", function (e) {
            var x = e.pageX || e.originalEvent.touches[0].pageX;
            pullDeltaX = (x - startX);
            if (!pullDeltaX) return;
            pullChange();
        });

        $(document).on("mouseup touchend", function () {
            $(document).off("mousemove touchmove mouseup touchend");
            if (!pullDeltaX) return; // prevents from rapid click events
            release();
        });
    });
});

function saveFood()
{
    saveCurrRecipe(recipeArray(counter)).then(value => {
      savedFoods.push(value);
      localStorage.setItem("crunchy-saved-items", JSON.stringify(savedFoods));
      reloadRecipe();
    })
}

function reloadRecipe()
{
    console.log("Reloaded card " + counter)
    loadRecipieInfo(counter, cards[numOfCards - 1 -counter], titles[counter]);
}