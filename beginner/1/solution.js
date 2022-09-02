/*
STEP 1

DE: Gib die Zahlen 1-10 in chronologischer Reihenfolge in der Konsole aus.

EN: Print the numbers 1-10 in the console.
*/

//--- Code goes here [Step 1] ---
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
//--- Code goes here [Step 1] ---

/*
STEP 2

DE: Erweitere die Zahlenausgabe bis 20 und gebe nur noch gerade Zahlen in der Konsole aus.

EN: Extend the number output to 20 and print only even numbers in the console.
*/

//--- Code goes here [Step 2] ---
for(let i = 1; i <= 20; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}
//--- Code goes here [Step 2] ---

/*
STEP 3

DE: Gib in der Konsole eine Multiplikationstabelle 1-10 (d.h. 1x1, 1x2, 1x3, ..., 10x10) aus.

EN: Print a multiplication table 1-10 (e.g. 1x1, 1x2, 1x3, ..., 10x10) in the console.
*/

//--- Code goes here [Step 3] ---
let numbers = [];
for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        numbers.push(i*j);
    }
    console.log(numbers.toString());
    numbers = [];
}
//--- Code goes here [Step 3] ---