/*
STEP 1

DE: Schreibe eine Funktion, welche die erzielten Punkte in einem Basketballspiel berechnet. Berücksichtige dabei die Anzahl der erzielten 2-Punkt-Würfe und 3-Punkt-Würfe.
    Ermittle die endgültige Punktzahl für die Mannschaft und gebe diesen Wert auf der Konsole aus.

EN: Write a function that calculates the points scored in a basketball game. Consider the number of 2-point shots and 3-point shots made.
    Determine the final score for the team and print this value to the console.
*/

//--- Code goes here [Step 1] ---
function points(twoPointers, threePointers){
    let result = twoPointers*2 + threePointers*3;
    console.log("Result: "+result);
}
points(1, 1);
points(33, 9);
points(38, 8);
//--- Code goes here [Step 1] ---

/*
STEP 2

DE: Erstelle eine Funktion, welche: ● Bei keinem User -> "no one is online"
                                    ● Bei 1 User -> "{user1} is online"
                                    ● Bei 2 user -> "{user1} and {user2} are online"
                                    ● Bei mehr als 2 User -> "{user1}, {user2} and {x} more are online" (x = Anzahl übriger User)
                                    in der Konsole ausgibt.

EN: Create a function which prints: ● For no user -> "no one is online".
                                    ● For 1 user -> "{user1} is online"
                                    ● If 2 users -> "{user1} and {user2} are online"
                                    ● If more than 2 users -> "{user1}, {user2} and {x} more are online" (x = remaining user count)
                                    in the console.
*/

//--- Code goes here [Step 2] ---
function chatRoomUser(users){
    const usersLength = users.length;
    switch(usersLength){
        case 0:
            console.log("no one is online");
            break;
        case 1:
            console.log(users[0]+" is online");
            break;
        case 2:
            console.log(users[0]+" and "+users[1]+" are online");
            break;
        default:
            const remainingUsers = usersLength-2;
            console.log(users[0]+", "+users[1]+" and "+remainingUsers+" more are online");
            break;
    }
}
chatRoomUser([]);
chatRoomUser(["Ashley"]);
chatRoomUser(["Alex", "Blade"]);
chatRoomUser(["Drax", "Chase", "Ashley", "Alex", "Blade"]);
//--- Code goes here [Step 2] ---