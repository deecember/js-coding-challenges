/*
STEP 1

DE: Erstelle eine Funktion, welche: ● Bei keinem User -> "no one is online"
                                    ● Bei 1 User -> "{user1} is online"
                                    ● Bei 2 user -> "{user1} and {user2} are online"
                                    ● Bei mehr als 2 User -> "{user1}, {user2} and {x} more are online"
                                    in der Konsole ausgibt.

EN: Create a function which prints: ● For no user -> "no one is online".
                                    ● For 1 user -> "{user1} is online"
                                    ● If 2 users -> "{user1} and {user2} are online"
                                    ● If more than 2 users -> "{user1}, {user2} and {x} more are online"
                                    in the console.
*/

//--- Code goes here [Step 1] ---
function chatRoomUser(users){
















}
chatRoomUser([]);
chatRoomUser(["Ashley"]);
chatRoomUser(["Alex", "Blade"]);
chatRoomUser(["Drax", "Chase", "Ashley", "Alex", "Blade"]);
//--- Code goes here [Step 1] ---

drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]

function sortDrinkByPrice(drinks){
    for (let i = 0; i < drinks.length; i++) {
        for (let j = 0; j < drinks.length; j++) {
            if (sortNumbers[j] > sortNumbers[j + 1]) {
                let temp = sortNumbers[j];
                sortNumbers[j] = sortNumbers[j + 1];
                sortNumbers[j + 1] = temp;
            }
        }
    }
}