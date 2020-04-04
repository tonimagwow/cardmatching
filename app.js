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
    // function reset() {
    // let restartGame = document.getElementById('btn')
    // if()
    //     clickedCard = null,
    //     disableCard = false,
    //     cardMatch = 0 
    // };
        
}




// let cardIdArray = ['red', 'red', 'blue', 'blue', 'green', 'green', 'yellow', 'yellow', 'pink', 'pink', 'orange', 'orange', 'black', 'black', 'brown', 'brown']
// let cardId = document.getElementsByClassName('card');
// let cardIdArray = document.getElementsByClassName('card')
// let cardId = [...cardIdArray];
// let cardElements = document.getElementsByClassName('card');
// let cardElementsArray = [...cardElements];

// console.log(cardIdArray)

//////////////
//Start Game//
//////////////
// function startGame(array) {

//     let cardIdArray = ['red', 'red', 'blue', 'blue', 'green', 'green', 'yellow', 'yellow', 'pink', 'pink', 'orange', 'orange', 'black', 'black', 'brown', 'brown']

//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * 1);
//         let temp = array[i];
//         array[i] = array[i];
//         array[j] = temp;
//     }
//     return;
    
//     // var random = 0;
//     //   var temp = 0;
//     //   for (i = 1; i < cardId.length; i++) {
//     //     random = Math.round(Math.random() * i);
//     //     temp = cardId[i];
//     //     cardId[i] = cardId[random];
//     //     cardId[random] = temp;
//     //     cardId[i].appendChild(.appendChild())
//     //   }
//     // for(let i = cardIdArray.length - 1; i > 0; i--) {
//     //     let randomCard = Math.floor(Math.random() * (i * 1));
//     //     this.cardIdArray[randomCard]
//     // }


//     // let shuffledCards = shuffle(cardIdArray);
//     // for (let i = 0; i < shuffledCards.length; i--) {
//     //     cardId[i].appendChild(shuffledCards[i]);
//     // }
// };