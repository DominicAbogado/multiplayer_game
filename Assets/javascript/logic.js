$(document).ready(function() {
  $("#test").on("click", function() {
    alert("Hello");
  });

  console.log("Hello World");

  var wins = 0;
  var losses = 0;
  var ties = 0;

  var playerOneChoice = ""
  var options = ["r", "p", "s"];

  //Setting up audio

  //Theme Song
  var audioElement = document.createElement("audio");
  audioElement.setAttribute(
    "src",
    "/Users/dominicabogado/xmen/assignment7/multiplayer_game/Assets/audio/battleMusic.mp3"
  );

  // Theme Button
  $(".theme-button").on("click", function() {
    audioElement.play();
  });

  // Pause Button
  $(".pause-button").on("click", function() {
    audioElement.pause();
  });

  //Pokemon Cry
  var charCry = document.createElement("audio");
  var blastCry = document.createElement("audio");
  var venuCry = document.createElement("audio");

  //Game Choices
  var fire = $(".fire_left");
  var water = $(".water_left")
  var grass = $(".grass_left")

  charCry.setAttribute(
    "src",
    "/Users/dominicabogado/xmen/assignment7/multiplayer_game/Assets/audio/charCry.mp3"
  );
  blastCry.setAttribute(
    "src",
    "/Users/dominicabogado/xmen/assignment7/multiplayer_game/Assets/audio/blastCry.mp3"
  );
  venuCry.setAttribute(
    "src",
    "/Users/dominicabogado/xmen/assignment7/multiplayer_game/Assets/audio/venuCry.mp3"
  );

//   //Hover Functions LEFT

//   //FIRE Hover
//   $(".fire_left")
//     .mouseover(function() {
//       charCry.play();
//       $(".fire_left").animate({ height: "250px", width: "250px" });
//     })
//     .mouseout(function() {
//       $(this)
//         .stop()
//         .animate({ width: "200px", height: "200px" });
//     });

//   //WATER Hover
//   $(".water_left")
//     .mouseover(function() {
//       blastCry.play();
//       $(".water_left").animate({ height: "250px", width: "250px" });
//     })
//     .mouseout(function() {
//       $(this)
//         .stop()
//         .animate({ width: "200px", height: "200px" });
//     });

//   //GRASS Hover
//   $(".grass_left")
//     .mouseover(function() {
//       venuCry.play();
//       $(".grass_left").animate({ height: "250px", width: "250px" });
//     })
//     .mouseout(function() {
//       $(this)
//         .stop()
//         .animate({ width: "200px", height: "200px" });
//     });

//   //Hover Functions right

//   //FIRE Hover
//   $(".fire_right")
//     .mouseover(function() {
//       charCry.play();
//       $(".fire_right").animate({ height: "250px", width: "250px" });
//     })
//     .mouseout(function() {
//       $(this)
//         .stop()
//         .animate({ width: "200px", height: "200px" });
//     });

//   //WATER Hover
//   $(".water_right")
//     .mouseover(function() {
//       blastCry.play();
//       $(".water_right").animate({ height: "250px", width: "250px" });
//     })
//     .mouseout(function() {
//       $(this)
//         .stop()
//         .animate({ width: "200px", height: "200px" });
//     });

//   //GRASS Hover
//   $(".grass_right")
//     .mouseover(function() {
//       venuCry.play();
//       $(".grass_right").animate({ height: "250px", width: "250px" });
//     })
//     .mouseout(function() {
//       $(this)
//         .stop()
//         .animate({ width: "200px", height: "200px" });
//     });

    //Click Functions
    $(".playerOneChoice").on("click", ".fire_left", function(){
        playerOneChoice = "";
        playerOneChoice = "r";
        console.log(playerOneChoice);
    })
    $(".playerOneChoice").on("click", ".water_left", function(){
        playerOneChoice = ""
        playerOneChoice = "p";
        console.log(playerOneChoice);
    })
    $(".playerOneChoice").on("click", ".grass_left", function(){
        playerOneChoice = ""
        playerOneChoice = "s";
        console.log(playerOneChoice);
    })

//   Rock Paper Scissors Logic
  $(".playerOne").on("click", function() {
    // var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    computerguess = options[Math.floor(Math.random() * options.length)];
    var p1c = playerOneChoice

    console.log(computerguess);

    if (playerOneChoice == "r" || playerOneChoice == "p" || playerOneChoice == "s") {
      if (playerOneChoice == "r" && computerguess == "s") {
        wins++;
        alert("Wins: " + wins);
      }
      if (playerOneChoice == "r" && computerguess == "p") {
        losses++;
        alert("Losses " + losses);
      }
      if (playerOneChoice == "s" && computerguess == "p") {
        wins++;
        alert("Wins " + wins);
      }
      if (playerOneChoice == "s" && computerguess == "r") {
        losses++;
        alert("Losses " + losses);
      }
      if (playerOneChoice == "p" && computerguess == "s") {
        losses++;
        alert("Losses " + losses);
      }
      if (playerOneChoice == "p" && computerguess == "r") {
        wins++;
        alert("Wins " + wins);
      }
      if (playerOneChoice == computerguess) {
        ties++;
        alert("Ties " + ties);
      }
    } else {
      alert("Please choose either r, p, or s");
    }
  });

  var html =
    "<p>Press either r, p, or s to start playing</p>" +
    "<p>Wins: " +
    wins +
    "</p>" +
    "<p>Losses: " +
    losses +
    "</p>" +
    "<p>Ties: " +
    ties +
    "</p>";

  document.querySelector("#game").innerHTML = html;
});
