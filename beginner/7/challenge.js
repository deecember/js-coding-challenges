/*
STEP 1

DE: Schreibe eine Funktion getDayFromDate, welche ein Datum als String annimmt und den Wochentag zurückgibt. In dieser Challenge startet die Woche am Sonntag.
	
Beispiel:
● getDayFromDate("3.12.2022") -> Samstag

EN: Write a function getDayFromDate that takes a date as a string and returns the day of the week. In this challenge, the week starts on Sunday.
	
Example:
● getDayFromDate("12/3/2022") -> Saturday
*/

//--- Code goes here [Step 1] ---



console.log(getDayFromDate("8/31/2022"));
console.log(getDayFromDate("12/3/2022"));
console.log(getDayFromDate("12/31/2022"));
console.log(getDayFromDate("8/1/2022"));
//--- Code goes here [Step 1] ---

/*
STEP 2

DE: Schreibe eine Funktion convertDate, welche ein Datum als String annimmt und dieses in ein Array umwandelt. Dabei soll folgendes Format im Array eingehalten werden: [MM, dd, YYYY]
	
Beispiel:
● convertDate("December 3, 2022") -> [12, 3, 2022]

EN: Write a function convertDate that takes a date as a string and converts it into an array. The following format should be followed in the array: [MM, dd, YYYY]
	
Example:
● convertDate("December 3, 2022") -> [12, 3, 2022]
*/

//--- Code goes here [Step 2] ---




console.log(convertDate("August 31, 2022"));
console.log(convertDate("12-03-2022"));
console.log(convertDate("12/31/2022"));
console.log(convertDate("2022-8-1"));
//--- Code goes here [Step 2] ---

/*
STEP 3

DE: Schreibe eine Funktion numLeapYears, welche ein String mit 2 Jahreszahlen, getrennt mit '-' annimmt.
	Die Funktion soll die Anzahl an Schaltjahren, von der angegebenen Jahresspanne, zurückgeben. Beachte: Die zwei Jahreszahlen sollen verdreht werden können (2000-2022 / 2022-2000).
	
Beispiel:
● numLeapYears("2000-2020") -> 6

EN: Create a function numLeapYears which takes a string with 2 years separated by '-'.
	The function should return the number of leap years, from the given year span. Note: The two years should be able to be twisted (2000-2022 / 2022-2000).
	
Example:
● numLeapYears("2000-2020") -> 6
*/

//--- Code goes here [Step 3] ---













console.log(numLeapYears("1980-1984"));
console.log(numLeapYears("2000-2020"));
console.log(numLeapYears("2022-2012"));
//--- Code goes here [Step 3] ---