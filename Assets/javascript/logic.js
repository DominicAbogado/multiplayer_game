$(document).ready(function() {
  $("#test").on("click", function() {
    alert("Hello");
  });

  console.log("Hello World");

  var wins = 0;
  var losses = 0;
  var ties = 0;

  var playerOneChoice = "Hello Firebase";
  var options = ["r", "p", "s"];

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

  database.ref().on(
    "value",
    function(snapshot) {
      console.log(snapshot.val());
      playerOneChoice = snapshot.val().PoC;
      console.log(playerOneChoice);
    },
    function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    }
  );

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
    playSong();
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
    playerOneChoice = "r";
    console.log(playerOneChoice);
  });
  $(".playerOneChoice").on("click", ".water_left", function() {
    playerOneChoice = "";
    playerOneChoice = "p";
    console.log(playerOneChoice);
  });
  $(".playerOneChoice").on("click", ".grass_left", function() {
    playerOneChoice = "";
    playerOneChoice = "s";
    console.log(playerOneChoice);
  });

  //   Rock Paper Scissors Logic
  $(".playerOne").on("click", function() {
    // var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    var winPoint = $("#p1Wins");
    var losePoint = $("#p1Lose");
    var tiePoint = $("#p1Ties");
    computerguess = options[Math.floor(Math.random() * options.length)];
    var p1c = playerOneChoice;

    console.log(computerguess);

    if (
      playerOneChoice == "r" ||
      playerOneChoice == "p" ||
      playerOneChoice == "s"
    ) {
      if (playerOneChoice == "r" && computerguess == "s") {
        wins++;
        winPoint.text("Wins: " + wins);
      }
      if (playerOneChoice == "r" && computerguess == "p") {
        losses++;
        losePoint.text("Losses: " + losses);
      }
      if (playerOneChoice == "s" && computerguess == "p") {
        wins++;
        winPoint.text("Wins: " + wins);
      }
      if (playerOneChoice == "s" && computerguess == "r") {
        losses++;
        losePoint.text("Losses: " + losses);
      }
      if (playerOneChoice == "p" && computerguess == "s") {
        losses++;
        losePoint.text("Losses: " + losses);
      }
      if (playerOneChoice == "p" && computerguess == "r") {
        wins++;
        winPoint.text("Wins: " + wins);
      }
      if (playerOneChoice == computerguess) {
        ties++;
        tiePoint.text("Ties: " + ties);
      }
    } else {
      alert("Please choose either r, p, or s");
    }
  });

  $()
});
