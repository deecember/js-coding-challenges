/*
STEP 1

DE: Schreibe eine Funktion, welche ein Wort annimmt und es buchstabiert, indem du die Buchstaben nacheinander zu einem Array hinzufügst, bis das Wort vollständig ist.
	Stelle die beiden Beispiele nach, indem du das Ergebnis in die Konsole ausgibst:

Beispiel:
● spelling("Happy") -> ["H", "Ha", "Hap", "Happ", "Happy"]
● spelling("JavaScript") -> ["J", "Ja", "Jav", "Java", "JavaS", "JavaSc", "JavaScr", "JavaScri", "JavaScrip", "JavaScript"]

EN: Write a function that takes a word and spells it by adding the letters one by one to an array until the word is complete.
	Recreate the two examples by printing the result to the console:

Example:
● spelling("Happy") -> ["H", "Ha", "Hap", "Happ", "Happy"]
● spelling("JavaScript") -> ["J", "Ja", "Jav", "Java", "JavaS", "JavaSc", "JavaScr", "JavaScri", "JavaScrip", "JavaScript"]
*/

//--- Code goes here [Step 1] ---
function spelling(word){
	let spelledWord = [];
	for(let i = 1; i <= word.length; i++){
		spelledWord.push(word.slice(0, i));
	}
	return spelledWord;
}
console.log(spelling("Schnitzel"));
console.log(spelling("JavaScript"));
//--- Code goes here [Step 1] ---