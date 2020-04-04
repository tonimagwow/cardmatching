// console.log("hello world")

let clickedCard = null;
let disableCard = false; //will stop the click of a card to stop the clicking of cards
let cardMatch = 0; //will hold the matched cards


function flipOver(event) { //using the onclick callback to return the div that has been selected.
    const target = event.currentTarget; 
    //    console.log(target)
    if (disableCard ||  //if the selected card is currently selected do not allow it to be clicked
        target === clickedCard || //or if (div) has the class 'done' added to it, it can no longer be clicked
        target.className.includes('done')) {
            return;
        }//if the cards are a match replace the div class with done 
        target.className = target.className.replace('color', 'done')    
    //if the card has not been selected keep track of it and display the color of the card 
    if (!clickedCard) {       
        clickedCard = target; //set the card
    } else if (clickedCard) {
        //if the selected cards color (id) do not, flip the card over after 1 sec, and allow the card to be clicked again
        if (clickedCard.getAttribute('id') !== target.getAttribute('id')) {
            disableCard = true; //card remains clickable
            setTimeout(() => { //timeout set to 1 sec the cards will flip over when they don't match
            clickedCard.className = //the selected cards 'class' will go back from done to color
            clickedCard.className.replace('done', 'color')
            target.className =
            target.className.replace('done', 'color')  
            clickedCard = null;
            disableCard = false;
        }, 1000);
    } else {
        cardMatch++; //add 1 to card match until user reaches goal of 8 matching cards.
        clickedCard = null;
        if (cardMatch === 8) { //if the cards matched = 8 then grab the id of the class winner-message show that the player has won.
            let message = document.getElementById('winner-message');
            message.classList.remove('winner')
        }
    }
  }
}
