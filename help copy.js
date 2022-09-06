/*
DE: Variablen

EN: Variables
*/

/*DE: Um eine konstante, also nicht veränderbare Variable zu erstellen, benötigst du das Schlüsselwort "const", gefolgt von dem frei wählbaren Variablennamen.
Um dieser Variable gleich einen Wert zu geben, benötigst du ein "=" gefolgt von deinem Wunschwert. Bedenke, diesen Wert kannst du später nicht mehr ändern.

EN: To create a immutable (constant) variable you need the keyword "const" followed by the variable name of your choice.
To give this variable a value, you need a "=" followed by your desired value. Remember, you cannot change this value later.*/
const varName = "value"

/*DE: Um eine veränderbare Variable zu erstellen, benötigst du das Schlüsselwort "let", gefolgt von dem frei wählbaren Variablennamen.
Um dieser Variable gleich einen Wert zu geben, benötigst du ein "=" gefolgt von deinem Wunschwert. Diesen Wert kannst du problemlos später ändern.

EN: To create a mutable (changeable) variable, you need the keyword "let" followed by the freely selectable variable name.
To give this variable a value, you need a "=" followed by your desired value. You can change this value later without any problems.*/
let varName2 = "value"

/*DE: Um nun auf deine Variable zuzugreifen, benötigst du lediglich den Variablennamen.
Möchtest du jetzt dieser zum Beispiel einen neuen Wert setzen, kannst du dies ganz einfach über ein "=" und anschließend den neuen Wunschwert machen.

EN: To access your variable, you only need the variable name.
If you now want to set a new value to it, for example, you can do this quite simply by using an "=" and then the new desired value.*/
varName2 = "new value"

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

/*
DE: Werttypen

EN: Value types
*/

/*DE: Um Zeichenketten zu übergeben, musst du diese in Anführungszeichen schreiben.
EN: To pass strings, you must enclose them in quotes.*/
const string = "value 123"

/*DE: Um Zahlen zu übergeben, kannst du diese ganz einfach schreiben.
EN: To pass numbers, you can simply write them.*/
const integer = 5

/*DE: Um Kommazahlen (sog. Floats) zu übergeben, musst du ein "." statt ein "," verwenden.
EN: To pass decimal numbers (called floats), you must use a "."*/
const double = 5.43

/*DE: Um wahr oder falsch (sog. Bool'sche Werte) zu übergeben, musst du lediglich true oder false schreiben.
EN: To pass true or false (called boolean values), you just have to write true or false.*/
const boolean = true

/*DE: Eine Liste (array) wird mit den eckigen Klammern gekennzeichnet. Die einzelnen Werte werden mit einem Komma getrennt.
EN: A list (array) is marked with the square brackets. The individual values are separated with a comma.*/
const array = ["Aiden", "Keylee", "Holdon"]

/*DE: Ein Objekt, welches mit geschweiften Klammern gekennzeichnet wird, besteht aus einem Schlüssel und einem dazugehörigem Wert.
Dabei wird nach dem Schlüssel ein Doppelpunkt geschrieben. Mehrere Schlüssel-Wert-Paare werden mit einem Komma getrennt.

EN: An object, which is marked with curly brackets, consists of a key and an associated value.
A colon is written after the key. Multiple key-value pairs are separated by a comma. */
const object = {
    "Alia": "Rock",
    "Holden": "Scissors"
}

object.Alia // "Rock"
object.Holden // "Scissors"

object.values() // ...
object.keys() // ...

const foo = function() {}
// bzw.
const bar = () => {}

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

/*
DE: Aufbau einer Funktion

EN: Structure of a function
*/

/*DE: Am Anfang steht das Schlüsselwort "function", danach kommt der Name der Funktion (frei wählbar) und anschließend Runde Klammern, gefolgt von geschweiften Klammern.
Die geschweiften Klammern definieren dabei den Bereich der Funktion. Alles was außerhalb der Klammern steht, gehört nicht mehr zu Funktion (=außerhalb des "Sichtbereichs").
Innerhalb  der runden Klammern, kannst du Variablen festlegen, welche beim Aufrufen der Funktion übergeben werden müssen. In dem Fall haben wir die Variable "name" genannt.
Auf diese Variable kann dann (nur) innerhalb dieser Funktion voll zugegriffen werden.


EN: At the beginning is the keyword "function", then comes the name of the function (freely selectable) and then parentheses, followed by curly brackets.
The curly brackets define the range of the function. Everything outside the brackets does not belong to the function (outside of its "scope").
Inside the parentheses, you can specify variables that must be passed when calling the function. In this case we called the variable "name".
This variable can then be fully accessed (only) within this function.*/
function functionName(name){

}

/*DE: Eine Funktion kann mit dem Funktionsnamen und anschließend runde Klammern aufgerufen/ausgeführt werden.
Vergesse dabei nicht, dass du innerhalb der runden Klammern deine vorher festgelegten Werte übermitteln musst. (In unserem Fall am Beispiel oben: name)

EN: A function can be called/executed with the function name followed by round brackets.
Don't forget that you have to pass your predefined values inside the round brackets. (In our case at the example above: name)*/
functionName("Jonas")

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

/*
DE: Operatoren

EN: Operators
*/

/*
DE:
= | Wird verwendet, um einer Variable einen Wert zuzuweisen
== | Wird verwendet, um abzuprüfen, ob ein Wert gleich ein anderer Wert ist
=== | Wird verwendet, um abzuprüfen, ob ein Wert gleich ein anderer Wert ist, dabei wird der Datentyp mit berücksichtigt. ("1" === 1) falsch, (1 === 1) wahr
!= | Wird verwendet, um abzuprüfen, ob ein Wert NICHT gleich ein anderer Wert ist
!== | Wird verwendet, um abzuprüfen, ob ein Wert NICHT gleich ein anderer Wert ist, dabei wird der Datentyp mit berücksichtigt. ("1" !== 1) wahr, (1 !== 1) falsch
+= | Fügt einen Wert zur Variable hinzu. let summe = 0; summe += 2 -> summe == 2
-= | Entfernt einen Wert von einer Variable. let summe = 2; summe -= 2 -> summe == 0

+ | Wird verwendet um eine Addition durchzuführen. Beachte: 1 + 1 -> 2 ||| "1" + "1" -> "11" ("Keylee" + " geht einkaufen" -> "Keylee geht einkaufen")
- | Wird verwendet um eine Subtraktion durchzuführen.
* | Wird verwendet um eine Multiplikation durchzuführen.
/ | Wird verwendet um eine Division durchzuführen.

% | Gibt den Rest einer Division zurück. (3 % 2 -> 1) (2 % 2 -> 0)
++ | Erhöht eine Zahl um 1.
-- | Verringert eine Zahl um 1.

[0] | Wird bei einer Liste verwendet, um über den Index den zugehörigen Wert zu bekommen. (const array = ["Keylee", "Holden"] | array[0] -> "Keylee", array[1] -> "Holden")

EN:
= | Used to assign a value to a variable.
== | Used to check if a value is equal to another value.
=== | Used to check if a value is equal to another value, taking the data type into account. ("1" === 1) false, (1 === 1) true
!= | Used to check if a value is NOT equal to another value.
!== | Used to check if a value is NOT equal to another value, taking the data type into account. ("1" !== 1) true, (1 !== 1) false
+= | Adds a value to the variable. let sum = 0; sum += 2 -> sum == 2
-= | Removes a value from a variable. let sum = 2; sum -= 2 -> sum == 0

| Used to perform an addition. Note: 1 + 1 -> 2 ||| "1" + "1" -> "11" ("Keylee" + " goes shopping" -> "Keylee goes shopping")
- | Used to perform a subtraction.
| Used to perform a multiplication.
| Used to perform a division.

% | Returns the remainder of a division. (3 % 2 -> 1) (2 % 2 -> 0)
++ | Increases a number by 1.
| Decreases a number by 1.

[0] | Used with a list to get the associated value via the index. (const array = ["Keylee", "Holden"] | array[0] -> "Keylee", array[1] -> "Holden")*/

//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

/*
DE: Wenn-Dann Abfragen

EN: If-Else Conditions
*/

/*DE: Am Anfang steht das Schlüsselwort "if", danach kommen runde Klammern und anschließend geschweifte Klammern.
Die geschweiften Klammern definieren dabei den Bereich der Bedingung, wenn diese erfüllt wird. Alles was außerhalb der Klammern steht, gehört nicht mehr zu If Abfrage.
Innerhalb der runden Klammern, musst du nun deine Bedienung festlegen. Dabei kannst du die obigen Operatoren benutzen.
In unserem Fall prüfen wir, ob die Zahl 1 gleich der Zahl 1 ist und führen, falls diese Bedingung wahr ist, unsere oben definierte Funktion aus.

EN: At the beginning there is the keyword "if", followed by round brackets and then curly brackets.
The curly brackets define the range of the condition, if it is fulfilled. Everything outside the brackets does not belong to If query.
Inside the round brackets, you have to define your operation. You can use the operators above.
In our case, we check if the number 1 is equal to the number 1 and if this condition is true, we execute our function defined above.*/
if(1 === 1){
    functionName("Peter")
}

// Im obigen Beispiel gibt es kein "Dann"-Bedingung. Meist hat man aber Situationen, in denen man "Wenn A, dann ..., ansonsten tue B". Ein Beispiel dafür wäre

let myName = "James"
if (myName == "Peter") {
    console.log("Hey Peter");
} else {
    console.log("You are not Peter, get out!");
}

// Ausgabe: "You are not Peter, get out!"


for (i=0; i<100; i++) {} // hochzählende Schleife

for (i=100; i>=0; i--) {} // herunterzählende / invertierte

for item of items {

}

for item in items {
    
}