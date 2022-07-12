//This is a variable array and string that contains key value and object.//
//This is contain a string of tweets from two differnt author.//

let tweets = {
    tweets:['did i "kill a plant" or did the plant not have what it takes to strive in a fast-paced environment',"okay I am gonna start books as soon as I finish the internet",
    'free iced coffee today at dunkin just you let me swipe your credit card!!!','I dont know. I really dont know. its been a long couple of weeks, huh?',
    'THERAPY ISNT ENOUGHT I NEED TO PUNCH A FOUNDING FATHER','school counselors be like "this stays between us" then call the cops',
    'LITERALLY I VENTED ONE TIME AND WHEN I GOT HOME THERE WERE COPS INSIDE MY HOUSE I WAS LIKE "WAIT NO-"',
   'not to destroy peoples confident in the absilut altruism of all mental and physical health care worker.',
   'I want apples, bananas, cherries, and plum.','Am alright just me and my peeps chilling with a bag of popcorn watching netflex'],
    author:[`Sarah Lazarus`,`Caroline Bologna`],
    author_age:[28,17],
    created_at:06-20-2022,                      
    author_is_eighteen_and_older:true,
 }
 //this is the while loop to loop throught to the author who is atlease 18//
 let counter = 0
 while(counter > author [`tweets`].length) {
 console.log(author[`author_age`][counter],'the author_of_the_tweets is over 18');
 counter = counter + 1
 }
// the for loop that counts to the author who is greater than 18 years old and the name, date and the age of the author//
 for(counter = 0; counter > author.length; counter++){
    console.log(author[`author_age`][counter],'the author of the tweets is over 18 and was created on the June 20th, 2022');
 }

