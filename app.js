// console.log("hello world")

let clickedCard = null;
let disableCard = false; //will stop the click of a card to stop the clicking of cards
let cardMatch = 0;


function flipOver(event) { //using the onclick callback
    const target = event.currentTarget;
       
    if (disableCard ||
        target === clickedCard || 
        target.className.includes('done')) {
            return;
        }
        target.className = target.className
        .replace('color', 'done')
       
    
    // console.log(target.getAttribute('id'));

    if (!clickedCard) { //if the card has not been selected       
        clickedCard = target;  
    } else if (clickedCard) {
        //if the clicked 
        if (clickedCard.getAttribute('id') !== target.getAttribute('id')) {
                disableCard = true;
                
                setTimeout(() => { 
                console.log('Not a match');
                clickedCard.className =
                clickedCard.className.replace('done', 'color')
                target.className =
                target.className.replace('done', 'color')  
                clickedCard = null;
                disableCard = false;
            }, 1000);
        } else {
            cardMatch++; //add 1 to card match until user reaches goal of 8 pair.
            clickedCard = null;
            if (cardMatch === 8) {
                let message = document.getElementById('winner-message');
                message.classList.remove('winner')
            }
        }
    }        
}
