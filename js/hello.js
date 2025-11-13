var today = new Date();
var hour = today.getHours();

var greetings;

if (hour < 12) {
    greetings = "Good morning!";
} else if (hour < 18) {
    greetings = "Good afternoon!";
} else {
    greetings = "Good evening!";
}

document.write(greetings);
