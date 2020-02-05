  $( document ).ready(function() {
    resolution=window.screen.availWidth; //Get the screen resolution
    if(resolution<1300){
    $("#arcadeCanvas").attr("width",450); // Change the canva size depending of the user screen
    $("#arcadeCanvas").attr("height", 371);
    }
});
$("#menuColor1").click(function(){ // On click on arcade mode
  clearCanvas();
  $("#cupButton").css('display','none');
  $("#settingsImg").css('display','none');
  $("#brushSize").css('display','none');
  $("#settings").hide();
  gameMode = 0;
  getRandomCanvas();
  drawCanvas(canvasNumber);
  document.getElementById('clickSound').play();
  $("#gameSelection").css('position','static');
  $("#menuColor2").hide(200);
  random = canvasNumber;
  $("#menuColor1").hide(200);
  setTimeout(function (){
    $("#arcade").toggle(300).css('background','#0984e3');
    $("#Go").toggle(300).css('background','#0984e3');
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
  if(fromRestart==true){
    $("#arcadeCanvas").toggle(300).css('background','#0984e3');
  }
});
$("#menuColor2").click(function(){ // On click on relax mode
  clearCanvas();
  $("#cupButton").css('display','none');
  $("#settingsImg").css('display','none');
  $("#brushSize").css('display','none');
  $("#settings").hide();
  gameMode = 1;
  document.getElementById('clickSound').play();
  $("#gameSelection").css('position','static');
  $("#menuColor2").hide(200);
  getRandomCanvas();
  drawCanvas(canvasNumber);
  $("#menuColor2").hide(200);
  $("#menuColor1").hide(200);
  setTimeout(function (){
    $("#Go span").css('color','black');
    $("#arcade").toggle(300).css('background','#fdcb6e');
    $("#Go").toggle(300).css('background','#fdcb6e');
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
  if(fromRestart==true){
    $("#arcadeCanvas").toggle(300).css('background','#fdcb6e');
  }
});
$("#Go").click(function(){ // On click on go
  $("#socialMedias").css('visibility', 'hidden');
  if(gameMode==0){ // if the mode is arcade
    document.getElementById('arcadeMusic').play();
    timePassed=0;
    finished=false;
    $("#Go").hide();
    $("#myProgress").css('visibility', 'visible');
    init();
    progressBar();
  }
  else{
    document.getElementById('relaxMusic').play(); // if the mode is relax
    timePassed=1;
    finished=false;
    $("#Go").hide();
    $("#myProgress").css('visibility', 'visible');
    $("#myBar").css('width',"0");
    init();
    $("#myProgress").toggle;
  }
});
$("#myProgress").click(function(){ // on "done!" click
  isFinished();
});

$("#homeButton").click(function(){ // Au retour au menu
  if(gameMode==1){
    relaxMusic();
  }
  document.getElementById('clickSound').play();
  $("#gameSelection").css('position','relative');
  $("#result").hide();
  $("#arcade").hide();
  $("#menuColor1").toggle(500);
  $("#menuColor2").toggle(500);
  setTimeout(function (){
    $("#settings").toggle(500);
    $("#cupButton").toggle(500);
  }, 500);
  fromRestart=true;
});

$("#nextButton").click(function(){ // Next level button
  document.getElementById('clickSound').play();
  finished=false;
  random = getRandomCanvas()
  drawCanvas(random)
  $("#result").hide(300);
  setTimeout(function (){
    $("#arcadeCanvas").toggle(300);
    $("#Go").toggle(300);
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
});

$("#retryButton").click(function(){ // Retry level button
  document.getElementById('clickSound').play();
  drawCanvas(canvasNumber);
  $("#result").hide(300);
  setTimeout(function (){
    $("#arcadeCanvas").toggle(300);
    $("#Go").toggle(300);
  }, 200);
  debWhite = countPixel();
  isDrawing==true;
});

$("#settingsButton").click(function(){ // Settings on menu
  document.getElementById('clickSound').play();
  $("#settingsImg").toggle(300);
  $("#brushSize").toggle(300);
  $("#brushSize").css('display','flex');
});

$("#orangeCircle").click(function(){ // Orange brush
  brushColor='#FFC312';
});

$("#greenCircle").click(function(){ // Green brush
  brushColor='#C4E538';
});

$("#blueCircle").click(function(){ // Blue brush
  brushColor='#12CBC4';
});

$("#roseCircle").click(function(){ // Rose brush
  brushColor='#FDA7DF';
});

$("#redCircle").click(function(){ // red brush
  brushColor='#ED4C67';
});

$("#Brush01").click(function(){ // Brush 01
  brushSize= 39;
});

$("#Brush02").click(function(){ // Brush 02
  brushSize= 30;
});

$("#Brush03").click(function(){ // Brush 03
  brushSize= 20;
});

$("#Brush04").click(function(){ // Brush 04
  brushSize= 10;
});

$("#Brush05").click(function(){ // Brush 05
  brushSize= 1;
});

$("#cupButton").click(function(){ // Scoreboard menu
  document.getElementById('clickSound').play();
  $("#settings").toggle(300);
  $("#cupButton").toggle(200);
  $("#scoreBoard").toggle(200);
});
$("#homeButtonScoreboard").click(function(){ // from scoreboard to menu
  document.getElementById('clickSound').play();
  $("#scoreBoard").hide(300);
  $("#settings").toggle(500);
  $("#cupButton").toggle(500);
});

$("#facebook").click(function(){ // Facebook link
  window.open('https://www.facebook.com/BoringamesHETIC/');
});
$("#twitter").click(function(){ // Twitter link
  window.open('https://twitter.com/BorinGamesHETIC/');
});
$("#instagram").click(function(){ // Instagram link
  window.open('https://www.instagram.com/boringameshetic/');
});
$("#youtube").click(function(){ // Youtube link
  window.open('https://www.youtube.com/channel/UChcgoViNgiLg2OHSHjYavmQ?disable_polymer=true/');
});
