$(document).ready(function() {
  console.log("Hello World");

  var testing = "";
  var clicks = 0;
  //Initializing Firebase

  var config = {
    apiKey: "AIzaSyAEmo2BOh1i3-_lZKXdZ5NMhLWLV-u-mNY",
    authDomain: "assignment7-98cc2.firebaseapp.com",
    databaseURL: "https://assignment7-98cc2.firebaseio.com",
    projectId: "assignment7-98cc2",
    storageBucket: "assignment7-98cc2.appspot.com",
    messagingSenderId: "585066709574"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  database.ref().on("value", function(snapshot) {
    clicks = snapshot.val().clickNumber;
    $("#testText").append("<br>" + snapshot.val().playerOne);

  });

//   $("#test").on("click", function() {
//     clicks++;
//     var test = "";
//     var test = "p";

//     database.ref().set({
//       playerChoice: test,
//       clickNumber: clicks
//     });
//     console.log(clicks);
//   });

  //Click Functions
  $(".playerOneChoice").on("click", ".fire_left", function() {
    playerOneChoice = "";
    playerOneChoice = "FIREBLAST";
    console.log(playerOneChoice);
    alert(playerOneChoice)
    database.ref().set({
      playerOne: playerOneChoice
    });
  });
  $(".playerOneChoice").on("click", ".water_left", function() {
    playerOneChoice = "";
    playerOneChoice = "WATERFALL";
    console.log(playerOneChoice);
    database.ref().set({
        playerOne: playerOneChoice
      });
  });
  $(".playerOneChoice").on("click", ".grass_left", function() {
    playerOneChoice = "";
    playerOneChoice = "s";
    console.log(playerOneChoice);
  });

  //   Rock Paper Scissors Logic
//   $(".playerOne").on("click", function() {
//     // var userguess = String.fromCharCode(event.keyCode).toLowerCase();
//     var winPoint = $("#p1Wins");
//     var losePoint = $("#p1Lose");
//     var tiePoint = $("#p1Ties");
//     computerguess = options[Math.floor(Math.random() * options.length)];
//     var p1c = playerOneChoice;

//     console.log(computerguess);

//     if (
//       playerOneChoice == "r" ||
//       playerOneChoice == "p" ||
//       playerOneChoice == "s"
//     ) {
//       if (playerOneChoice == "r" && computerguess == "s") {
//         wins++;
//         winPoint.text("Wins: " + wins);
//       }
//       if (playerOneChoice == "r" && computerguess == "p") {
//         losses++;
//         losePoint.text("Losses: " + losses);
//       }
//       if (playerOneChoice == "s" && computerguess == "p") {
//         wins++;
//         winPoint.text("Wins: " + wins);
//       }
//       if (playerOneChoice == "s" && computerguess == "r") {
//         losses++;
//         losePoint.text("Losses: " + losses);
//       }
//       if (playerOneChoice == "p" && computerguess == "s") {
//         losses++;
//         losePoint.text("Losses: " + losses);
//       }
//       if (playerOneChoice == "p" && computerguess == "r") {
//         wins++;
//         winPoint.text("Wins: " + wins);
//       }
//       if (playerOneChoice == computerguess) {
//         ties++;
//         tiePoint.text("Ties: " + ties);
//       } else {
//         alert("Please choose either r, p, or s");
//       }
//     }
//   });
});
