// Wait for DOM to finish loading as suggested in Love Maths' 'Creating Event Listeners'//
document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'National Speed Limit',
            img: 'asstes/images/nationalspeedlimit.webp'
        },
        {
            name: 'No Stopping',
            img: 'asstes/image/nostopping.webp'
        },
        {
            name: 'Mini Roundabout',
            img: 'asstes/images/miniroundabout.webp'
        },
        {
            name: 'No Overtaking',
            img: 'asstes/images/noovertaking.webp'
        },
        {
            name: 'Steep Downwards',
            img: 'asstes/images/steepdownwards.webp'
        },
        {
            name: 'Frail Pedestrian Crossing',
            img: 'asstes/images/frailpedestrians.webp'
        },
        {
            name: 'End of Motorway',
            img: 'asstes/images/endmotorway.webp'
        },
        {
            name: 'With flow bus',
            img: 'asstes/images/withflowbus.webp'
        },
        {
            name: 'End Controlled',
            img: 'asstes/images/endcontrolled.webp'
        },
        {
            name: 'No Through Road',
            img: 'assets/images/nothroughroad.webp'
        },
        {
            name: 'Camera',
            img: 'assets/images/camera.webp'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const gameArea = document.querySelector('.game-area');
    const displayResult = document.querySelector('#result');
    var clickedCard = [];
    var clickedCardId = [];
    displayResult.textContent = mergedCards.length;
    if (mergedCards.lenght === cardArray.lenght/2) {
        resultDisplay.textContent = 'Congratulations!';
    }


    //inspired by making 7 games video //

    function generateCards() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'assets/images/camera.webp');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            gameArea.appendChild(card);
        }
    }

    generateCards();

    function matchcheck() {
        var cards = document.querySelectorAll('img');
        const firstCardId = clickedCardId[0];
        const secondCardId = clickedCardId[1];
        if (clickedCard[0] === clickedCard[1]) {
         // should use modal instea od alert
            alert('Great merge!');
            // should be blank or white image below? Maybe parking space empty
            cards[firstCardId].setAttribute('src', 'assets/images/endcontrolled.webp');
            cards[secondCardId].setAttribute('src', 'assets/images/endcontrolled.webp');
            mergedCards.push(clickedCard);
        } else {
            cards[firstCardId].setAttribute('src', 'assets/images/camera.webp');
            cards[secondCardId].setAttribute('src', 'assets/images/camera.webp');
            alert('Not quite, keep trying');
        }
        clickedCard = [];
        clickedCardId = [];
        displayResult = [];

    }

    function flipCard() {
        var cardIndex = this.getAttribute('card-index');
        clickedCard.push(cardArray[data-id].name);
        clickedCardId.push(data-id);
        this.setAttribute('src', cardArray[cardIndex].img);
        if (clickedCard.length === 2) {
            setTimeout(matchcheck, 500);
        }
    }


});