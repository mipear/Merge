// Wait for DOM to finish loading as suggested in Love Maths' 'Creating Event Listeners'//
document.addEventListener('DOMContentLoaded', function() {
    const cardArray = [
   {
      name: 'National Speed Limit',
      img: 'images/nationalspeedlimit.webp'
   },
   {
    name: 'No Stopping',
    img: 'image/nostopping.webp'
   },
   {
    name: 'Mini Roundabout',
    img: 'images/miniroundabout.webp'
   },
   {
    name: 'No Overtaking',
    img: 'images/noovertaking.webp'
   },
   {
    name: 'Steep Downwards',
    img: 'images/steepdownwards.webp'
   },
   {
   name: 'Frail Pedestrian Crossing',
    img: 'images/frailpedestrians.webp'
   },
   {
    name: 'End of Motorway',
    img: 'images/endmotorway.webp'
   },
   {
    name: 'With flow bus',
    img: 'images/withflowbus.webp'
   },
   {
    name: 'End Controlled',
    img: 'images/endcontrolled.webp'
   },
   {
    name: 'No Through Road',
    img: 'images/nothroughroad.webp'
   },
   {
    name: 'Camera',
    img: 'images/camera.webp'
   }
    ]

    const gameArea = document.getElementsByClassName('.game-area');

    let shuffleCards = [];
    let flipCard = [];
    let cardMatch = [];
    let noMatch = [];

    function shuffleCards() {
        shuffleCards = [...cardArray];
        for (let i = shuffleCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleCards[i],
        shuffleCards[j]] = [shuffleCards[j], shuffleCards[i]];
        }
    }


    for (let gameArea of gameArea)(
        gameArea.addEventListener("click"), function() {
            if (this.getAttribute("datatype") === "flipCard") {
            }
        }
    )
})

function runGame(){

}



function flipCard() {
// noClick() //
}

function detectMatch() {
    if no matchMedia, unflipCard()
    else keep flipCard, incrementScore()
}

function incrementScore() {

}

function resetGame() {

}

