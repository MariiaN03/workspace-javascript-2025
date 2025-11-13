//var quest = {
 //   name: "Mariia",
 //   date: "29.10.2025",
  //  room: "207",
 //   otherquest: ["Olga", "Anna", "Ivan"]
//};

//console.log("Guest Name: " + quest.name);
///console.log("Check-in Date: " + quest.date);
//console.log("Room Number: " + quest.room);
//console.log("Other Guests: " + quest.otherquest.join(", "));

var questGroup = new Array();

var resClient = {};

function reservation(e) {
     e.preventDefault();
    resClient = {
        name: document.getElementById("guestname").value,
        dateCheckIn: document.getElementById("checkin").value,
        dateCheckOut: document.getElementById("checkout").value,
        numberQuest: document.getElementById("guestnum").value,
        roomType: document.getElementById("room").value
    };

    questGroup.push(resClient);
    console.log(questGroup);

    document.getElementById("submit").addEventListener('click', reservation);

    console.log("name " + resClient.name);
    console.log("Check-in Date: " + resClient.dateCheckIn);
    console.log("Check-out Date: " + resClient.dateCheckOut);
    console.log("Number of Guests: " + resClient.numberQuest);
    console.log("Room Type: " + resClient.roomType);

 
}

function showBooking(){
    let message = "Current Reservations:\n";
    questGroup.forEach((booking, index) => {
        message += `Reservation ${index + 1}:\n`;
        message += `Name: ${booking.name}\n`;
        message += `Check-in: ${booking.dateCheckIn}\n`;
        message += `Check-out: ${booking.dateCheckOut}\n`;
        message += `Guests: ${booking.numberQuest}\n`;
        message += `Room: ${booking.roomType}\n\n`;
    });
    window.alert(message);
}

document.getElementById("submit").addEventListener('click', showBooking);
document.getElementById("submit").addEventListener('click', reservation);

