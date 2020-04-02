console.log ('It Works?')

//variables for levels and cards? 
let cardFlipped = false
let firstClick;
let secondClick;
let deck = $('.card')
// let level1 = ('level 1')
// let level2 = ('level 2')
// let level3 = ('level 3')

$(() => {
    //make the game function to start the game on level one, with 8 cards (maybe add more cards), add a timer of 30sec, if you beat the timer move on to level 2, if you don't beat the timer, alert that they lost, prompt to play again or quit
    $('.card').click(turnCard) 
    function turnCard () {
        // console.log("clicked")
        // console.log(this)
        this.classList.toggle('rotate');

        if(!cardFlipped) {
            cardFlipped = true;
            firstClick = this;

            // console.log({cardFlipped, firstClick});
        } else {
            cardFlipped = false;
            secondClick = this;

            //console.log({firstClick, secondClick})
        }
    }
        
    $('.card').click(shuffleCards)
    function shuffleCards() {
        
    }
    




    //add a scoreboard to keep track of score through out levels


    //level 2 add 16 cards to the game board, timer of 20sec to beat, if they win more to level 3, if they lose, alert they've lost and ask them to quit or restart.


    //level 3 add 24 cards, timer set to 15sec (maybe 20), if they win, prompt that they've beat the game.
    
    
    //possibly make a level that has one timer that continues to count down from 60sec and goes through all three levels? 





})