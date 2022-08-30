/*
STEP 1

DE: Schreibe eine Funktion, die eine Zahl n als Argument annimmt und die entsprechende Fehlermeldung zurückgibt. Verwende dabei weder eine switch, noch eine if Anweisung.
	Bei der letzten Fehlermeldung darfst du eine if Anweisung verwenden.
	Fehlermeldungen: 	● n=1 - "Check the fan: e1"
						● n=2 - "Emergency stop: e2"
						● n=3 - "Pump Error: e3"
						● n=4 - "c: e4"
						● n=5 - "Temperature Sensor Error: e5"
						● n=x - 101

EN: Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.
	For the last error message you can use an if statment.
	Error messages: 	● n=1 - "Check the fan: e1"
						● n=2 - "Emergency stop: e2"
						● n=3 - "Pump Error: e3"
						● n=4 - "c: e4"
						● n=5 - "Temperature Sensor Error: e5"
						● n=x - 101
*/

//--- Code goes here [Step 1] ---
function error(n) {
	return {
		1: 'Check the fan: e1',
		2: 'Emergency stop: e2',
		3: 'Pump Error: e3',
		4: 'c: e4',
		5: 'Temperature Sensor Error: e5',
	}[n] || 101;
}
//--- Code goes here [Step 1] ---