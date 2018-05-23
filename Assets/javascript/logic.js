$(document).ready(function() {

    $("#test").on("click", function(){
        alert("Hello");
    })

    console.log("Hello World");


var options = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;



// Rock Paper Scissors Logic
$(document).on("keyup", function () {
    var userguess = String.fromCharCode(event.keyCode).
        toLowerCase();

    console.log(userguess);

    var computerguess = options[Math.floor(Math.random() * options.length)];

    console.log(computerguess);


    if (userguess == 'r' || userguess == 'p' || userguess == 's') {
        if ((userguess == 'r') && (computerguess == 's')) {
            wins++;
            alert('Wins: ' + wins)
        }
        if ((userguess == 'r') && (computerguess == 'p')) {
            losses++;
            alert('Losses ' + losses)
        }
        if ((userguess == 's') && (computerguess == 'p')) {
            wins++;
            alert('Wins ' + wins);
        }
        if ((userguess == 's') && (computerguess == 'r')) {
            losses++;
            alert('Losses ' + losses)
        }
        if ((userguess == 'p') && (computerguess == 's')) {
            losses++;
            alert('Losses ' + losses)
        }
        if ((userguess == 'p') && (computerguess == 'r')) {
            wins++;
            alert('Wins ' + wins);
        }
        if ((userguess == computerguess)) {
            ties++;
            alert('Ties ' + ties);
        }
    } else {
        alert("Please choose either r, p, or s");
    }
})

    var html = "<p>Press either r, p, or s to start playing</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Ties: " + ties + "</p>";

    document.querySelector('#game').innerHTML = html;

});