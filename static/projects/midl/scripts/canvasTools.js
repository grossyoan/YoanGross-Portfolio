      let canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false,
        drawCount = 0;
        isDrawing = false;
        finalScore = 0;
        finished = false;
        canvasNumber = 0;
        timePassed = 0;
        fromRestart = false;
        brushColor = "#FFC312",
        brushSize = 20;
        gameMode = 0;
        arcadeSound = 1;
        canvasArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        resolution = 0;
        finalScoreScoreboard = 0;
        debWhite=0;
        endWhite=0;

      function init() { //Init addEventListener on mouse for the brush
        canvas = document.getElementById('arcadeCanvas');
        ctx = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;
        canvas.addEventListener("mousemove", function(e) {
          findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function(e) {
          findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function(e) {
          findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function(e) {
          findxy('out', e)
        }, false);
      }

      if (isDrawing == false) {  // Brush draws
        function draw() {
          let pixelData = ctx.getImageData(currX, currY, 1, 1).data;
          if ((pixelData[0] == 255 && pixelData[1] == 255 && pixelData[2] == 255) || (pixelData[0] == 253 && pixelData[1] == 203 && pixelData[2] == 110)) {
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(currX, currY);
            ctx.strokeStyle = brushColor;
            ctx.lineWidth = brushSize;
            ctx.stroke();
            ctx.closePath();
          }
          /*if (pixelData[0] == 255 && pixelData[1] == 255 && pixelData[2] == 255){
            drawCount+=1;
            console.log(drawCount);
          }*/
        }

        function findxy(res, e) { // Recover mouse position
          let pixelData = ctx.getImageData(currX, currY, 1, 1).data;
          if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;

            flag = true;
            dot_flag = true;
            if (dot_flag && pixelData[0] == 255 && pixelData[1] == 255 && pixelData[2] == 255) {
              ctx.beginPath();
              ctx.fillStyle = brushColor;
              ctx.fillRect(currX, currY, 2, 2);
              ctx.closePath();
              dot_flag = false;
            }
          }
          if (res == 'up' || res == "out") {
            flag = false;
          }
          if (res == 'move') {
            if (flag) {
              prevX = currX;
              prevY = currY;
              currX = e.clientX - canvas.offsetLeft;
              currY = e.clientY - canvas.offsetTop;
              draw();
            }
          }
        }
      }


      function countPixel(img) { //White surface count on canva
        let canvas = document.getElementById('arcadeCanvas');
        let context = canvas.getContext('2d');
        let compteurBlanc = 0;
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;
        // Comptage de pixels
        let redAmount = new Array(256);
        let greenAmount = new Array(256);
        let blueAmount = new Array(256);
        for (let i = 0; i < 256; i++) {
          redAmount[i] = 0;
          greenAmount[i] = 0;
          blueAmount[i] = 0;
        }
        for (let i = 0; i < data.length; i += 4) {
          if (data[i] == 255 && data[i + 1] == 255 && data[i + 2] == 255) {
            compteurBlanc++;
          }
        }
        return compteurBlanc;
      }


      function scoreCount() { //Score comparaison
        let endWhite = countPixel();
        finalScore = 100 - (endWhite / debWhite) * 100;
      }

      function progressBar() { //Bottom timebar
        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, 10);

        function frame() {
          if (width >= 100 || finished == true) {
            clearInterval(id);
            isFinished();
          } else {
            width = width + 0.15;
            elem.style.width = width + '%';
          }
        }
      }

      function displayScore() { //score display
        let resultScore = document.querySelector('#resultScore');
        finalScore = Math.round((finalScore * 10)) / 10;
        finalScoreScoreboard = parseInt(finalScore);
        scoreboard();
        resultScore.innerHTML = finalScore + '%';
        let resultMessage = document.querySelector('#resultMessage');
        if (finalScore == 50) {
          resultMessage.innerHTML = 'Am I dreaming?!';
        } else if (finalScore < 50 && finalScore > 45 || finalScore > 50 && finalScore < 55) {
          resultMessage.innerHTML = 'Congrats!';
        } else if (finalScore < 45 && finalScore > 40 || finalScore > 55 && finalScore < 60) {
          resultMessage.innerHTML = 'Not bad!';
        } else if (finalScore < 40 && finalScore > 0 || finalScore > 60 && finalScore < 100) {
          resultMessage.innerHTML = 'Ouch...';
        } else if (finalScore == 0 || finalScore == 100) {
          resultMessage.innerHTML = 'Ow no...';
        }
      }

      function clearCanvas() {  //Clear Canva
        let c = document.querySelector("canvas");
        let ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
      }

      function pause(milliseconds) { //pause function, could be useful
        let start = new Date().getTime();
        for (let i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds) {
            break;
          }
        }
      }

      function isFinished() { //Scoremenu function
        if (finished == false) {
          if (gameMode == 0) {
            $("#socialMedias").css('visibility', 'visible');
            $("#result").toggle(200).css('background', '#0984e3');
            document.getElementById('arcadeMusic').pause();
            document.getElementById('arcadeMusic').currentTime = 0;
          } else {
            $("#socialMedias").css('visibility', 'visible');
            $("#result").toggle(200).css('background', '#fdcb6e');
          }
          scoreCount();
          displayScore();
          $("#myProgress").css('visibility', 'hidden');
          finished = true;
          $("#arcadeCanvas").hide();
          setTimeout(function() {
            clearCanvas();
            timePassed = 1000;
          }, 200);

        } else {
          console.log('ok');
        }
      }

      /*function randomCanvas() {
        canvasNumber = Math.floor(Math.random() * 5) + 1;
        return canvasNumber
      }

      function countDown() {
        setInterval(function()
        {
          timePassed++;
          console.log(timePassed);
        },1000);
      }

      function randomArcadeSound(){
        arcadeSound = Math.floor(Math.random()*3)+1;
      }

      function arcadeMusic(){
        randomArcadeSound();
        if(arcadeSound==0){
          document.getElementById('ArcadeS1').play();
        }
        else if(arcadeSound==1){
          document.getElementById('ArcadeS2').play();
        }
        else{
          document.getElementById('ArcadeS3').play();

        }
      }
      */

      function relaxMusic() { //Stop music on home and reset it
        $('audio').each(function() {
          this.pause(); // Stop playing
          this.currentTime = 0; // Reset time
        });
      }

      function getRandomCanvas() { //Generate a number for the canva
        if (gameMode == 0) {
          canvasNumber = canvasArray.splice(0, 1);
          console.log(canvasNumber);
        }
        if (gameMode == 1) {
          let random = Math.floor(Math.random() * canvasArray.length)
          console.log(canvasArray);
          canvasNumber = canvasArray.splice(random, 1);
          console.log(canvasNumber);
        }
        if (canvasArray.length == 0) {
          canvasArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        }
        return canvasNumber;
      }

      function scoreboard(finalScoreScoreboard) { //Scoreboard WIP
        let score = document.querySelectorAll(".scoreboardLi");
        let scoreHTML = new Array();
        let finalScoreHTML = new Array();
        let scorePushed = false;
        for (let i = 0; i < score.length; i++) {
          scoreHTML[i] = score[i].innerHTML
          scoreHTML[i] = parseInt(scoreHTML[i])
        }
        for (let j = 0; j < scoreHTML.length; j++) {
          if (finalScoreScoreboard > scoreHTML[j] && scorePushed == false && scoreHTML[j] != 0) {
            finalScoreHTML.push(scoreHTML[j])
          }
          if (finalScoreScoreboard < scoreHTML[j] || scoreHTML[j] == 0 && scorePushed == false) {
            finalScoreHTML.push(parseInt(finalScore))
            j++
            scorePushed = true;
          }
          if (scorePushed == true) {
            finalScoreHTML.push(scoreHTML[j - 1])
          }
        }
        for (let i = 0; i < score.length; i++) {
          scoreHTML[i] = score[i].innerHTML
          scoreHTML[i] = parseInt(scoreHTML[i])
        }
        for (let k = 0; k < scoreHTML.length; k++) {
          score[k].innerHTML = finalScoreHTML[k]
        }
      }
