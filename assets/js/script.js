// Wait for DOM to finish loading as suggested in Love Maths' 'Creating Event Listeners'//
document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        // Images of road signs //
        {
            name: "National Speed Limit",
            img: "assets/images/nationalspeedlimit.webp"
        },
        {
            name: "No Stopping",
            img: "assets/images/nostopping.webp"
        },
        {
            name: "Mini Roundabout",
            img: "assets/images/miniroundabout.webp"
        },
        {
            name: "No Overtaking",
            img: "assets/images/noovertaking.webp"
        },
        {
            name: "Steep Downwards",
            img: "assets/images/steepdownwards.webp"
        },
        {
            name: "Frail Pedestrian Crossing",
            img: "assets/images/frailpedestrianscross.webp"
        },
        {
            name: "End of Motorway",
            img: "assets/images/endmotorway.webp"
        },
        {
            name: "With flow bus",
            img: "assets/images/withflowbus.webp"
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
            img: "assets/images/definitionnationalspeedlimit.webp"
        },
        {
            name: "No Stopping",
            img: "assets/images/definitionnostopping.webp"
        },
        {
            name: "Mini Roundabout",
            img: "assets/images/definitionminiroundabout.webp"
        },
        {
            name: "No Overtaking",
            img: "assets/images/definitionnoovertaking.webp"
        },
        {
            name: "Steep Downwards",
            img: "assets/images/definitionsteepdownwards.webp"
        },
        {
            name: "Frail Pedestrian Crossing",
            img: "assets/images/definitionfrailpedestrians.webp"
        },
        {
            name: "End of Motorway",
            img: "assets/images/definitionendmotorway.webp"
        },
        {
            name: "With flow bus",
            img: "assets/images/definitionwithflowbus.webp"
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
    }

    const modalTry = document.getElementById("modal-try");
    const modalMerge = document.getElementById("modal-merge");
    var closeModal = document.getElementsByClassName("closeModal")[0];

    closeModal.addEventListener('click', closeModal);

    function matchCheck() {
        var cards = document.querySelectorAll("img");
        const firstCardId = clickedCardId[0];
        const secondCardId = clickedCardId[1];

        if (clickedCard[0] === clickedCard[1] && firstCardId != secondCardId) {
            // should use modal instead of alert
            modalMerge.style.display = "block";
            cards[firstCardId].setAttribute(
                "src",
                "assets/images/white.webp"
            );
            cards[secondCardId].setAttribute(
                "src",
                "assets/images/white.webp"
            );
            mergedCards.push(clickedCard);
        } else {
            cards[firstCardId].setAttribute("src", "assets/images/backCard.webp");
            cards[secondCardId].setAttribute("src", "assets/images/backCard.webp");
            modalTry.style.display = "block";
        }
        clickedCard = [];
        clickedCardId = [];
        let displayResult = [];
        displayResult.textContent = mergedCards.length;
        if (mergedCards.length === cardArray.length / 2) {
            displayResult.textContent = "Congratulations!";
        }
    }

    modalTry.addEventListener('click', () => {
        modalTry.style.display = "none";
        clickedCard = null;
    });

    modalMerge.addEventListener('click', () => {
        modalMerge.style.display = "none";
        clickedCard = null;
    });

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

