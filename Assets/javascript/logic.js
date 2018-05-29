$(document).ready(function() {
  console.log("Hello World");

  var playerOne = "...";
  var playerTwo = "..."

  var wins = 0;
  var losses = 0;
  var ties = 0;

  var playerOneChoice = "";
  var playerTwoChoice = "";


  //New Options 
  var fire = "FIREBLAST"
  var water = "WATERFALL"
  var grass = "SOLARBEAM"

  var options = [fire, water, grass]

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
    if (snapshot.child("playerOne").exists() && snapshot.child("playerTwo").exists()) {
      playerOne = snapshot.val().playerOne;
      playerTwo = snapshot.val().playerTwo;
      $("#playerOneRPS").text(snapshot.val().playerOne);
      $("#playerTwoRPS").text(snapshot.val().playerTwo);
    } else {
      $("#playerOneRPS").append(playerOne);
      $("#playerTwoRPS").append(playerTwo);
    }
  });

  //Setting up audio
  //Theme Song
  var audioElement = document.createElement("audio");
  audioElement.setAttribute(
    "src",
    "/Users/dominicabogado/xmen/assignment7/multiplayer_game/Assets/audio/battleMusic.mp3"
  );

  //play song
  function playSong() {
    audioElement.play();
  }

  function pauseSong() {
    audioElement.pause();
  }

  //Start Gamee Function
  $(".startGame").on("click", function() {
    $(".titleScreen").hide();
    // playSong();
  });

  // Theme Button
  $(".battle-play").on("click", function() {
    pauseSong();
    playSong();
  });

  // Pause Button
  $(".battle-pause").on("click", function() {
    pauseSong();
  });

  //Pokemon Cry
  var charCry = document.createElement("audio");
  var blastCry = document.createElement("audio");
  var venuCry = document.createElement("audio");

  //Game Choices
  var fire = $(".fire_left");
  var water = $(".water_left");
  var grass = $(".grass_left");

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

  //Hover Functions LEFT

  //FIRE Hover
  $(".fire_left")
    .mouseover(function() {
      charCry.play();
      $(".fire_left").animate({ height: "150px", width: "150px" });
    })
    .mouseout(function() {
      $(this)
        .stop()
        .animate({ width: "100px", height: "100px" });
    });

  //WATER Hover
  $(".water_left")
    .mouseover(function() {
      blastCry.play();
      $(".water_left").animate({ height: "150px", width: "150px" });
    })
    .mouseout(function() {
      $(this)
        .stop()
        .animate({ width: "100px", height: "100px" });
    });

  //GRASS Hover
  $(".grass_left")
    .mouseover(function() {
      venuCry.play();
      $(".grass_left").animate({ height: "150px", width: "150px" });
    })
    .mouseout(function() {
      $(this)
        .stop()
        .animate({ width: "100px", height: "100px" });
    });

  //Hover Functions right

  //FIRE Hover
  $(".fire_right")
    .mouseover(function() {
      charCry.play();
      $(".fire_right").animate({ height: "150px", width: "150px" });
    })
    .mouseout(function() {
      $(this)
        .stop()
        .animate({ width: "100px", height: "100px" });
    });
  //WATER Hover
  $(".water_right")
    .mouseover(function() {
      blastCry.play();
      $(".water_right").animate({ height: "150px", width: "150px" });
    })
    .mouseout(function() {
      $(this)
        .stop()
        .animate({ width: "100px", height: "100px" });
    });

  //GRASS Hover
  $(".grass_right")
    .mouseover(function() {
      venuCry.play();
      $(".grass_right").animate({ height: "150px", width: "150px" });
    })
    .mouseout(function() {
      $(this)
        .stop()
        .animate({ width: "100px", height: "100px" });
    });

  //Click Functions
  $(".playerOneChoice").on("click", ".fire_left", function() {
    playerOneChoice = "";
    playerOneChoice = "FIREBLAST";
    console.log(playerOneChoice);
    database.ref().set({
      playerOne: playerOneChoice,
      playerTwo: playerTwoChoice
    });
  });
  $(".playerOneChoice").on("click", ".water_left", function() {
    playerOneChoice = "";
    playerOneChoice = "WATERFALL!";
    console.log(playerOneChoice);
    database.ref().set({
      playerOne: playerOneChoice,
      playerTwo: playerTwoChoice
    });
  });
  $(".playerOneChoice").on("click", ".grass_left", function() {
    playerOneChoice = "";
    playerOneChoice = "SOLAR BEAM";
    console.log(playerOneChoice);
    database.ref().set({
      playerOne: playerOneChoice,
      playerTwo: playerTwoChoice
    });
  });

  //   Rock Paper Scissors Logic
  $(".playerOne").on("click", function() {
    // var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    var winPoint = $("#p1Wins");
    var losePoint = $("#p1Lose");
    var tiePoint = $("#p1Ties");

    var fire = "FIREBLAST"
    var water = "WATERFALL"
    var grass = "SOLARBEAM"

    playerTwoChoice = "";
    computerguess = options[Math.floor(Math.random() * options.length)];
    playerTwoChoice = computerguess;
    database.ref().set({
      playerTwo: playerTwoChoice
    })

    var p1c = playerOneChoice;

    console.log(computerguess);

    if (
      playerOneChoice == fire ||
      playerOneChoice == water ||
      playerOneChoice == grass
    ) {
      if (playerOneChoice == fire && computerguess == grass) {
        wins++;
        winPoint.text("Wins: " + wins);
      }
      if (playerOneChoice == fire && computerguess == water) {
        losses++;
        losePoint.text("Losses: " + losses);
      }
      if (playerOneChoice == grass && computerguess == water) {
        wins++;
        winPoint.text("Wins: " + wins);
      }
      if (playerOneChoice == grass && computerguess == fire) {
        losses++;
        losePoint.text("Losses: " + losses);
      }
      if (playerOneChoice == water && computerguess == grass) {
        losses++;
        losePoint.text("Losses: " + losses);
      }
      if (playerOneChoice == water && computerguess == fire) {
        wins++;
        winPoint.text("Wins: " + wins);
      }
      if (playerOneChoice == computerguess) {
        ties++;
        tiePoint.text("Ties: " + ties);
      }
    }
  });
});
