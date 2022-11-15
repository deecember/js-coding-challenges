/*
STEP 1

DE: Berechne die Summe der Zahlen in dem gegebenen Array und gebe diese in der Konsole aus.

EN: Calculate the sum of the numbers in the given array and print it to the console.
*/

//--- Code goes here [Step 1] ---
const numbers = [9, 3, 21, 14];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);
//--- Code goes here [Step 1] ---

/*
STEP 2

DE: Drehe die Werte des gegebenen Arrays um, sodass ein Satz entsteht (Hello World!) und gibt diesen in der Konsole aus. Es dürfen keine Kommas mit ausgegeben werden.

EN: Reverse the values of the given array to form a sentence (Hello World!) and output it to the console. No commas are allowed to be output.
*/

//--- Code goes here [Step 2] ---
const strings = ["World!", " ", "Hello"];
let reverseStrings = [];
for(let i = strings.length-1; i >= 0; i--) {
    reverseStrings.push(strings[i]);
}
console.log(reverseStrings.toString().replaceAll(',', ''));
//--- Code goes here [Step 2] ---

/*
STEP 3

DE: Sortiere die Zahlen im gegebenen Array der größer nach, beginnend beim kleinsten Wert und gebe diese anschließend in der Konsole aus. (Bubble Sort)

EN: Sort the numbers in the given array in order of size, starting with the smallest value, and print them to the console. (Bubble Sort)
*/

//--- Code goes here [Step 3] ---
let sortNumbers = [9, 54, 3, 21, 7, 14];
for (let i = 0; i < sortNumbers.length; i++) {
    for (let j = 0; j < sortNumbers.length; j++) {
        if (sortNumbers[j] > sortNumbers[j + 1]) {
            let temp = sortNumbers[j];
            sortNumbers[j] = sortNumbers[j + 1];
            sortNumbers[j + 1] = temp;
        }
    }
}
console.log(sortNumbers.toString());
//--- Code goes here [Step 3] ---