/*
STEP 1

DE: Schreibe eine Funktion bomb, welche einen String annimmt und dieses auf das Wort "bomb" untersucht. (case insensitive)
	Wenn gefunden, gib "Duck!!!" zurück, andernfalls "There is no bomb, relax."

Beispiel:
● bomb("There is a bOMb.") -> Duck!!!
● bomb("There is a bomb.") -> Duck!!!
● bomb("Boom!") -> There is no bomb, relax.

EN: Create a function that takes a string and finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax."

Example:
● bomb("There is a bOMb.") -> Duck!!!
● bomb("There is a bomb.") -> Duck!!!
● bomb("Boom!") -> There is no bomb, relax.
*/

//--- Code goes here [Step 1] ---



console.log(bomb("There is a bOmb."));
console.log(bomb("Hey, did you tink there is a bomb?"));
console.log(bomb("This goes boom!!!"));
//--- Code goes here [Step 1] ---

/*
STEP 2

DE: Ein Wort ist auf der Flucht und hat versucht, sich in einer Menge von großen Buchstaben zu verstecken!
    Helfe, eine Funktion zu schreiben, die das Wort erkennt, wobei du die folgenden Regeln kennen musst:

● Das gesuchte Wort ist in Kleinbuchstaben.
● Die Buchstaben, welche nicht zum Wort gehören sind alle in Großbuchstaben.
● Beachte, dass das Wort unter den zufälligen Buchstaben verteilt wird, aber die Reihenfolge der Buchstaben gleich bleibt.

EN: A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

● The hidden word is in lowercase.
● The letters which do not belong to the word are all in uppercase.
● Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
*/

//--- Code goes here [Step 2] ---
function detectWord(encryptedWord) {







}
detectWord("TZXCtBJUhASDaHLPnAYkHKKLMsOAY");
detectWord("MBXCfASDIUoBKJrQEHO");
detectWord("UIZMBhASCNePOSlACpPACiTZUInQAXDSgBM");
detectWord("ETRBmANPOeBVMS!PLWZ");
//--- Code goes here [Step 2] ---