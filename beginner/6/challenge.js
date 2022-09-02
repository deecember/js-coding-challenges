/*
STEP 1

DE: Schreibe eine Funktion inkLevels, welche ein Object annimmt und dir die Anzahl der noch möglichen Seiten zurückgibt, welche noch gedruckt werden können.
	Pro Seite wird von jeder Farbe ein Level verbraucht.

EN: Create a function inkLevels that takes an object and returns the number of pages that can still be printed.
	One level of each color is used per page.
*/

//--- Code goes here [Step 1] ---



console.log("You can print "+inkLevels({"cyan": 23, "magenta": 12, "yellow": 10, "black": 0})+" pages.");
console.log("You can print "+inkLevels({"cyan": 531, "magenta": 398, "yellow": 456, "black": 527})+" pages.");
//--- Code goes here [Step 1] ---

/*
STEP 2

DE: Schreibe eine Funktion, die feststellt, ob eine Bestellung für den kostenlosen Versand in Frage kommt.
	Eine Bestellung ist versandkostenfrei, wenn die Gesamtkosten der gekauften Artikel 50,00 € übersteigen.

EN: Create a function that determines whether a shopping order is eligible for free shipping.
	An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
*/

//--- Code goes here [Step 2] ---
function freeShipping(order){

}
console.log("Free shipping: "+freeShipping({"Shampoo": 5.99, "Rubber Ducks": 15.99, "Soap": 3.99}));
console.log("Free shipping: "+freeShipping({"Office PC": 599.99, "Laptop": 399.90}));
//--- Code goes here [Step 2] ---

/*
STEP 3

DE: Schreibe eine Funktion rockPaperScissors, die ein Objekt annimmt und ein Schere Stein Papier-Spiel mit 2 Spielern verwaltet.

Beispiel:
● rockPaperScissors({"Alia": "Rock", "Holden": "Scissors"}); -> return "The winner is Alia"
● rockPaperScissors({"Kaylee": "Papier", "Jubal": "Papier"}); -> return "It's a draw!"

EN: Create a function rockPaperScissors which takes an object and manages a Rock Paper Scissors game with 2 players.

Example:
● rockPaperScissors({"Alia": "Rock", "Holden": "Scissors"}); -> return "The winner is Alia"
● rockPaperScissors({"Kaylee": "Paper", "Jubal": "Paper"}); -> return "It's a draw!"
*/

//--- Code goes here [Step 3] ---













console.log("RockPaperScissors: "+rockPaperScissors({"Alia": "Rock", "Holden": "Scissors"}));
console.log("RockPaperScissors: "+rockPaperScissors({"Kaylee": "Paper", "Jubal": "Paper"}));
console.log("RockPaperScissors: "+rockPaperScissors({"Serenity": "Scissors", "Neo": "Rock"}));
//--- Code goes here [Step 3] ---