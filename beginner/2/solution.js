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
//--- Code goes here [Step 1] ---