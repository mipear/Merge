// Wait for DOM to finish loading as suggested in Love Maths' 'Creating Event Listeners'//
document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        // Images of road signs //
        {
            name: "National Speed Limit",
            img: "asstes/images/nationalspeedlimit.webp"
        },
        {
            name: "No Stopping",
            img: "asstes/image/nostopping.webp"
        },
        {
            name: "Mini Roundabout",
            img: "asstes/images/miniroundabout.webp"
        },
        {
            name: "No Overtaking",
            img: "asstes/images/noovertaking.webp"
        },
        {
            name: "Steep Downwards",
            img: "asstes/images/steepdownwards.webp"
        },
        {
            name: "Frail Pedestrian Crossing",
            img: "asstes/images/frailpedestrians.webp"
        },
        {
            name: "End of Motorway",
            img: "asstes/images/endmotorway.webp"
        },
        {
            name: "With flow bus",
            img: "asstes/images/withflowbus.webp"
        },
        {
            name: "End Controlled",
            img: "asstes/images/endcontrolled.webp"
        },
        {
            name: "No Through Road",
            img: "assets/images/nothroughroad.webp"
        },
        {
            name: "Camera",
            img: "assets/images/camera.webp"
        },
        // Definitions of road signs //
        {
            name: "National Speed Limit",
            img: "asstes/images/definitionnationalspeedlimit.webp"
        },
        {
            name: "No Stopping",
            img: "asstes/image/definitionnostopping.webp"
        },
        {
            name: "Mini Roundabout",
            img: "asstes/images/definitionminiroundabout.webp"
        },
        {
            name: "No Overtaking",
            img: "asstes/images/definitionnoovertaking.webp"
        },
        {
            name: "Steep Downwards",
            img: "asstes/images/definitionsteepdownwards.webp"
        },
        {
            name: "Frail Pedestrian Crossing",
            img: "asstes/images/definitionfrailpedestrians.webp"
        },
        {
            name: "End of Motorway",
            img: "asstes/images/definitionendmotorway.webp"
        },
        {
            name: "With flow bus",
            img: "asstes/images/definitionwithflowbus.webp"
        },
        {
            name: "End Controlled",
            img: "asstes/images/definitionendcontrolled.webp"
        },
        {
            name: "No Through Road",
            img: "assets/images/definitionnothroughroad.webp"
        },
        {
            name: "Camera",
            img: "assets/images/definitioncamera.webp"
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const gameArea = document.querySelector(".game-area");
    const displayResult = document.querySelector("#result");
    var clickedCard = [];
    var clickedCardId = [];
    let mergedCards = [];

    //inspired by making 7 games video //

    function generateCards() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "assets/images/backCard.webp");
            card.setAttribute("card-index", i);
            card.addEventListener("click", flipCard);
            gameArea.appendChild(card);
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const gameArea = document.querySelector(".game-area");
    const displayResult = document.querySelector("#result");
    var clickedCard = [];
    var clickedCardId = [];
    let mergedCards = [];

    //inspired by making 7 games video //

    function generateCards() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "assets/images/backCard.webp");
            card.setAttribute("card-index", i);
            card.addEventListener("click", flipCard);
            gameArea.appendChild(card);
        }
        
    }

    function matchCheck() {
        var cards = document.querySelectorAll("img");
        const firstCardId = clickedCardId[0];
        const secondCardId = clickedCardId[1];

        if (clickedCard[0] === clickedCard[1]) {
            // should use modal instead of alert
            alert("Great merge!");
            cards[firstCardId].setAttribute(
                "src",
                "assets/images/backCard.webp"
            );
            cards[secondCardId].setAttribute(
                "src",
                "assets/images/backCard.webp"
            );
            mergedCards.push(clickedCard);
        } else {
            cards[firstCardId].setAttribute("src", "assets/images/white.webp");
            cards[secondCardId].setAttribute("src", "assets/images/white.webp");
            alert("Not quite, keep trying");
        }
        clickedCard = [];
        clickedCardId = [];
        displayResult = [];
        displayResult.textContent = mergedCards.length;
        if (mergedCards.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations!";
        }
    }

    function flipCard() {
        var cardIndex = this.getAttribute("card-index");
        clickedCard.push(cardArray[cardIndex].name);
        clickedCardId.push(cardIndex);
        this.setAttribute("src", cardArray[cardIndex].img);
        if (clickedCard.length === 2) {
            setTimeout(matchCheck, 500);
        }
    }

    generateCards();
});

