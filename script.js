let guests = {"Akbar": 12, "Alex": 64};

function addGuest() {
    let name = prompt("Enter name:");
    let roomNumber = parseInt(prompt("Enter room number:"));
    if (!isNaN(roomNumber)) {
        if (!(Object.values(guests).includes(roomNumber))) {
            guests[name] = roomNumber;
            displayOutput(`New guest added: ${name} in room ${roomNumber}`);
        } else {
            displayOutput("Sorry, we have a guest in this room number. Please choose another room.");
        }
    } else {
        displayOutput("Invalid room number. Please enter a valid number.");
    }
}

function removeGuest() {
    let name = prompt("Enter name:");
    if (name in guests) {
        delete guests[name];
        displayOutput(`Guest ${name} deleted`);
    } else {
        displayOutput("Guest not found");
    }
}



function listGuests() {
    let output = "List of guests:<br>";
    for (let name in guests) {
        output += `${name} - ${guests[name]}`;
    }
    displayOutput(output);
}

function exitProgram() {
    displayOutput("Exiting from the program...");
}

function displayOutput(message) {
    document.getElementById("output").innerHTML = message;
}