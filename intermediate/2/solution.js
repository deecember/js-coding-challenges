/*
STEP 1

DE: Schreibe eine Funktion, welche eine Zahl auf Oddish oder Evenish überprüft.
	Folgendes soll in der Konsole ausgegeben werden:
	● "The number 95782 is Oddish"
	● "The number 95783 is Evenish"

EN: Write a function that checks a number for Oddish or Evenish.
	The following should be printed to the console:
	● "The number 95782 is Oddish"
	● "The number 95783 is Evenish"
*/

//--- Code goes here [Step 1] ---
function oddishOrEvenish(number) {
	let result = 0;
	Array.from(number.toString()).map((num) => {
		result += parseInt(num);
	})
	return "The number "+ number +" is "+result%2 ? "Oddish" : "Evenish";
}
oddishOrEvenish(95782);
oddishOrEvenish(95783);
//--- Code goes here [Step 1] ---