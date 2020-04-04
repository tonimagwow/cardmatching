# cardmatching

### link https://tonimagwow.github.io/cardmatching/


# Game Objective
### The objective of Memory Match is to flip two cards at a time. After you flip the two cards if the two colors are identical you've made a match. If the cards do not match they will be flipped over to their original state. You will continue to flip two cards at a time until you find all the matching pairs.

## Technology
1. HTML
2. CSS
3. Javascript

## Approach
#### I started with creating four parent div's that had four children div's to create a 4x4 board with a total of 16 cards. I added a click call-back function within the individual div's to be able to identify what "card" was being selected. I also add a timeout function to the flipped cards that don't match, so after 1sec they go back to their original state. If the cards matched they became none-functional. I wanted to make a function that would shuffle the array, but I really struggled with it and in order to get "random" layout of cards I moved the div's around in the HTML. 

## Things to revisit
1. Create a working shuffle function
2. Add a restart function
3. Add a spin effect to the cards


## Personal & Challenges
### I learned a few things about myself when working on this project.
1. I really enjoy working with CSS. The more I worked with it I notice it feels like a sandbox and I'm able to be as creative as I want.
2. Attention to detail, I noticed a lot of the time I would have simple spelling errors, or the proper punctuation.
3. Stick to my original ideas. When I first started working on my project I started with images inside of divs. After running into a few roadblocks, I scrapped my whole project and started from scratch. If I would of worked through the original problems I would of been more satisfied with what I've completed.
4. I need help with Shuffling arrays. The hardest part of this project for me is getting my cards to shuffle. It's the main function to of the game in order to get the cards to be randomized, in order to have "random" cards on my board I swapped the location of cards in my HTML.



## Source and links

### MDN (help with functions)
#### https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

### Fisher Yates Shuffle (still a work in progress)
#### https://bost.ocks.org/mike/shuffle/
#### https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript


