// Wait for DOM to finish loading as suggested in Love Maths' 'Creating Event Listeners'//
document.addEventListener("DOMContentLoaded", () => {
    const cardArray = [
        // Images of road signs //
        {
            name: "National Speed Limit",
            img: "assets/images/nationalspeedlimit.webp",
            alt: "National Speed Limit"
        },
        {
            name: "No Stopping",
            img: "assets/images/nostopping.webp",
            alt: "No Stopping"
        },
        {
            name: "Mini Roundabout",
            img: "assets/images/miniroundabout.webp",
            alt: "Mini Roundabout"
        },
        {
            name: "No Overtaking",
            img: "assets/images/noovertaking.webp",
            alt: "No Overtaking"
        },
        {
            name: "Steep Downwards",
            img: "assets/images/steepdownwards.webp",
            alt: "Steep Downwards"
        },
        {
            name: "Frail Pedestrian Crossing",
            img: "assets/images/frailpedestrianscross.webp",
            alt: "Frail Pedestrian Crossing"
        },
        {
            name: "End of Motorway",
            img: "assets/images/endmotorway.webp",
            alt: "End of Motorway"
        },
        {
            name: "With flow bus",
            img: "assets/images/withflowbus.webp",
            alt: "With flow bus"
        },
        {
            name: "No Through Road",
            img: "assets/images/nothroughroad.webp",
            alt: "No Through Road"
        },
        {
            name: "Camera",
            img: "assets/images/camera.webp",
            alt: "Camera"
        },
        // Definitions of road signs //
        {
            name: "National Speed Limit",
            img: "assets/images/definitionnationalspeedlimit.webp",
            alt: "Definition: National Speed Limit"
        },
        {
            name: "No Stopping",
            img: "assets/images/definitionnostopping.webp",
            alt: "Definition: No Stopping"
        },
        {
            name: "Mini Roundabout",
            img: "assets/images/definitionminiroundabout.webp",
            alt: "Definition: Mini Roundabout"
        },
        {
            name: "No Overtaking",
            img: "assets/images/definitionnoovertaking.webp",
            alt: "Definition: No Overtaking"
        },
        {
            name: "Steep Downwards",
            img: "assets/images/definitionsteepdownwards.webp",
            alt: "Definition: Steep Downwards"
        },
        {
            name: "Frail Pedestrian Crossing",
            img: "assets/images/definitionfrailpedestrians.webp",
            alt: "Definition: Frail Pedestrian Crossing"
        },
        {
            name: "End of Motorway",
            img: "assets/images/definitionendmotorway.webp",
            alt: "Definition: End of Motorway"
        },
        {
            name: "With flow bus",
            img: "assets/images/definitionwithflowbus.webp",
            alt: "Definition: With flow bus"
        },
        {
            name: "No Through Road",
            img: "assets/images/definitionnothroughroad.webp",
            alt: "Definition: No Through Road"
        },
        {
            name: "Camera",
            img: "assets/images/definitioncamera.webp",
            alt: "Definition: Camera"
        },
    ];

    // Randomizes cards //
    cardArray.sort(() => 0.5 - Math.random());

    const gameArea = document.querySelector(".game-area");
    const displayResult = document.querySelector("#result");
    var clickedCard = [];
    var clickedCardId = [];
    let mergedCards = [];

    // How to play and Need help modals//
    var modalInstructions = document.getElementById("instructions-modal");
    var modalRevise = document.querySelector("#help-modal");
    var btnInstructions = document.getElementById("how-to-play");
    var btnRevise = document.getElementById("help");
    var closeInstructions = document.querySelector(".close-instructions");
    var closeRevision = document.querySelector(".close-revision");

    btnInstructions.onclick = function () {
        modalInstructions.style.display = "block";
    };

    btnRevise.onclick = function () {
        modalRevise.style.display = "block";
    };

    closeInstructions.onclick = function () {
        modalInstructions.style.display = "none";
    };

    closeRevision.onclick = function () {
        modalRevise.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modalInstructions) {
            modalInstructions.style.display = "none";
        }
    };

    window.onclick = function (event) {
        if (event.target == modalRevise) {
            modalRevise.style.display = "none";
        }
    };



    //inspired by making 7 games video. Generates cards//

    function generateCards() {
        const gameArea = document.querySelector('#game-area');
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement("img");
            card.setAttribute("src", "assets/images/backcard.webp");
            card.setAttribute("card-index", i);
            card.setAttribute("alt", cardArray[i].alt);
            card.addEventListener("click", flipCard);
            gameArea.appendChild(card);
        }
    }

    // Modals for matching and not matching cards //

    const modalTry = document.getElementById("modal-try");
    const modalMerge = document.getElementById("modal-merge");
    var closeModal = document.getElementsByClassName("close-modal")[0];

    closeModal.addEventListener('click', closeModal);

    // Function checks if there is a match between cards//

    function matchCheck() {
        var cards = document.querySelectorAll("img:not(#traffic-signs)");
        const firstCardId = clickedCardId[0];
        const secondCardId = clickedCardId[1];

        if (clickedCard[0] === clickedCard[1] && firstCardId != secondCardId) {
            // should use modal instead of alert
            modalMerge.style.display = "block";
            cards[firstCardId].setAttribute(
                "src",
                "assets/images/merge.webp"
            );
            cards[secondCardId].setAttribute(
                "src",
                "assets/images/merge.webp"
            );
            cards[firstCardId].removeEventListener('click', flipCard);
            cards[secondCardId].removeEventListener('click', flipCard);
            mergedCards.push(clickedCard);
            clickedCard = [];
            clickedCardId = [];
        } else {
            cards[firstCardId].setAttribute("src", "assets/images/backcard.webp");
            cards[secondCardId].setAttribute("src", "assets/images/backcard.webp");
            modalTry.style.display = "block";
        }
        clickedCard = [];
        clickedCardId = [];


        displayResult.textContent = mergedCards.length;
        if (mergedCards.length === cardArray.length / 2) {
            displayResult.textContent = "Congratulations!";
        }
    }

    modalTry.addEventListener("click", () => {
        modalTry.style.display = "none";
        clickedCard = [];
    });

    modalMerge.addEventListener("click", () => {
        modalMerge.style.display = "none";
        clickedCard = [];
    });

    function flipCard() {
        var cardIndex = this.getAttribute("card-index");
        clickedCard.push(cardArray[cardIndex].name);
        clickedCardId.push(cardIndex);
        this.setAttribute("src", cardArray[cardIndex].img);
        if (clickedCard.length === 2) {
            setTimeout(matchCheck, 1000);
        }
    }

    generateCards();
});
