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


    //inspired by making 7 games video //

    function generateCards() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'assets/images/camera.webp');
            card.setAttribute('card-index', i);
            // card.addEventListener('click', flipCard);
            gameArea.appendChild(card);
        }
    }

    generateCards();

    function flipCard() {
        var cardIndex = this.getAttribute('card-index');
        
    }


});