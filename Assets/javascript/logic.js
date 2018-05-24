$(document).ready(function() {
  $("#test").on("click", function() {
    alert("Hello");
  });

  console.log("Hello World");

  var options = ["r", "p", "s"];
  var wins = 0;
  var losses = 0;
  var ties = 0;

  //Setting up audtio

  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "/Users/dominicabogado/xmen/assignment7/multiplayer_game/Assets/audio/battleMusic.mp3");

  // Theme Button
  $(".theme-button").on("click", function() {
    audioElement.play();
  });

  // Pause Button
  $(".pause-button").on("click", function() {
    audioElement.pause();
  });

  //Hover Functions LEFT

  //FIRE Hover
  $('.fire_left').mouseover(function(){
    $('.fire_left').animate({ height: "250px", width:"250px" });
  }).mouseout(function(){ 
    $(this).stop().animate({width: "200px",height:"200px"});
  });

  //WATER Hover
  $('.water_left').mouseover(function(){
    $('.water_left').animate({ height: "250px", width:"250px" });
  }).mouseout(function(){ 
    $(this).stop().animate({width: "200px",height:"200px"});
  });

  //GRASS Hover
  $('.grass_left').mouseover(function(){
    $('.grass_left').animate({ height: "250px", width:"250px" });
  }).mouseout(function(){ 
    $(this).stop().animate({width: "200px",height:"200px"});
  });


  //Hover Functions right

  //FIRE Hover
  $('.fire_right').mouseover(function(){
    $('.fire_right').animate({ height: "250px", width:"250px" });
  }).mouseout(function(){ 
    $(this).stop().animate({width: "200px",height:"200px"});
  });

  //WATER Hover
  $('.water_right').mouseover(function(){
    $('.water_right').animate({ height: "250px", width:"250px" });
  }).mouseout(function(){ 
    $(this).stop().animate({width: "200px",height:"200px"});
  });

  //GRASS Hover
  $('.grass_right').mouseover(function(){
    $('.grass_right').animate({ height: "250px", width:"250px" });
  }).mouseout(function(){ 
    $(this).stop().animate({width: "200px",height:"200px"});
  });






  // Rock Paper Scissors Logic
  $(document).on("keyup", function() {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerguess = options[Math.floor(Math.random() * options.length)];

    console.log(computerguess);

    if (userguess == "r" || userguess == "p" || userguess == "s") {
      if (userguess == "r" && computerguess == "s") {
        wins++;
        alert("Wins: " + wins);
      }
      if (userguess == "r" && computerguess == "p") {
        losses++;
        alert("Losses " + losses);
      }
      if (userguess == "s" && computerguess == "p") {
        wins++;
        alert("Wins " + wins);
      }
      if (userguess == "s" && computerguess == "r") {
        losses++;
        alert("Losses " + losses);
      }
      if (userguess == "p" && computerguess == "s") {
        losses++;
        alert("Losses " + losses);
      }
      if (userguess == "p" && computerguess == "r") {
        wins++;
        alert("Wins " + wins);
      }
      if (userguess == computerguess) {
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
