function drawCanvas(randomCanvas){
  let c = document.querySelector("canvas");
  let ctx = c.getContext("2d");
  ctx.lineWidth = 5;
  if(randomCanvas == 1){
    if(resolution<1300){
      //Rectangle
      ctx.strokeStyle="black";
      ctx.fillStyle="white";
      ctx.strokeRect(50, 122, 400, 300);
      ctx.rect(50, 122, 400, 300);
      ctx.fill()
    }
    else{
    //No name
    ctx.strokeStyle="black";
    ctx.fillStyle="white";
    ctx.rect(150, 193, 323, 192);
    ctx.strokeRect(150, 193, 323, 192);
    ctx.rect(262, 148, 101, 46);
    ctx.strokeRect(262, 148, 101, 46);
    ctx.rect(100, 258, 50, 71);
    ctx.strokeRect(100, 258, 50, 71);
    ctx.rect(470, 258, 51, 74);
    ctx.strokeRect(470, 258, 51, 74);
    ctx.rect(260, 385, 0, 0);
    ctx.strokeRect(260, 385, 0, 0);
    ctx.rect(256, 385, 108, 47);
    ctx.strokeRect(256, 385, 108, 47);
    ctx.fill()
    }
  }
  else if(randomCanvas==2){
    if(resolution<1300){
      //9
      ctx.strokeStyle="black";
      ctx.fillStyle="white";
      ctx.strokeRect(186, 62, 190, 181);
      ctx.rect(186, 62, 190, 181);
      ctx.strokeRect(334, 243, 42, 166);
      ctx.rect(334, 243, 42, 166);
      ctx.strokeRect(192, 359, 142, 50);
      ctx.rect(192, 359, 142, 50);
      ctx.fill();
    }
    else{
    //Cercle
      ctx.fillStyle="white";
      ctx.strokeStyle="black";
      ctx.arc(300, 250, 192, 0, 6.283185307179586, false);
      ctx.stroke();
      ctx.fill()
    }
  }
  else if(randomCanvas==3){
    if(resolution<1300){
      //4
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(207, 141, 30, 228);
      ctx.rect(207, 141, 30, 228);
      ctx.strokeRect(207, 334, 195, 35);
      ctx.rect(207, 334, 195, 35);
      ctx.strokeRect(324, 264, 31, 179);
      ctx.rect(324, 264, 31, 179);
      ctx.fill();
    }
    else{
      // Carré
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(97, 55, 424, 389);
      ctx.rect(97, 55, 424, 389);
      ctx.strokeRect(156, 121, 351, 307);
      ctx.rect(156, 121, 351, 307);
      ctx.strokeRect(417, 235, 2, 144);
      ctx.rect(417, 235, 2, 144);
      ctx.strokeRect(356, 300, 126, 1);
      ctx.rect(356, 300, 126, 1);
      ctx.strokeRect(201, 197, 117, 1);
      ctx.rect(201, 197, 117, 1);
      ctx.strokeRect(258, 148, 1, 107);
      ctx.rect(258, 148, 1, 107);
      ctx.fill();
    }
  }
  else if(randomCanvas==4){
    if(resolution<1300){
      //Champignon
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(150, 34, 266, 220);
      ctx.rect(150, 34, 266, 220);
      ctx.strokeRect(231, 254, 113, 129);
      ctx.rect(231, 254, 113, 129);
      ctx.fill();
    }
    else{
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.rect(0, 70, 750, 350);
      ctx.strokeRect(0, 70, 750, 350);
      ctx.fill();
    }
  }
  else if(randomCanvas==5){
    if(resolution<1300){
      //forme marrante
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(139, 100, 120, 99);
      ctx.rect(139, 100, 120, 99);
      ctx.strokeRect(257, 198, 123, 105);
      ctx.rect(257, 198, 123, 105);
      ctx.strokeRect(382, 97, 108, 100);
      ctx.rect(382, 97, 108, 100);
      ctx.strokeRect(138, 301, 118, 94);
      ctx.rect(138, 301, 118, 94);
      ctx.strokeRect(378, 300, 120, 103);
      ctx.rect(378, 300, 120, 103);
      ctx.fill();
    }
    else{
      // Serpent
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(232, 85, 128, 340);
      ctx.rect(232, 85, 128, 340);
      ctx.strokeRect(359, 85, 193, 74);
      ctx.rect(359, 85, 193, 74);
      ctx.strokeRect(43, 358, 186, 66);
      ctx.rect(43, 358, 186, 66);
      ctx.fill();
    }
  }

  else if(randomCanvas==6){
    if(resolution<1300){
      //escalier
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(114, 306, 352, 24);
      ctx.rect(114, 306, 352, 24);
      ctx.strokeRect(200, 280, 266, 24);
      ctx.rect(200, 280, 266, 24);
      ctx.strokeRect(280, 258, 187, 20);
      ctx.rect(280, 258, 187, 20);
      ctx.strokeRect(343, 237, 124, 19);
      ctx.rect(343, 237, 124, 19);
      ctx.strokeRect(393, 217, 75, 19);
      ctx.rect(393, 217, 75, 19);
      ctx.fill();
    }
    else{
      // E
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(200, 99, 50, 296);
      ctx.rect(200, 99, 50, 296);
      ctx.strokeRect(200, 98, 177, 50);
      ctx.rect(200, 98, 177, 50);
      ctx.strokeRect(200, 393, 177, 50);
      ctx.rect(200, 393, 177, 50);
      ctx.strokeRect(200, 250, 154, 50);
      ctx.rect(200, 250, 154, 50);
      ctx.fill();
    }
  }
  else if(randomCanvas==7){
    if(resolution<1300){
      //Petit bonhomme
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(193, 160, 218, 95);
      ctx.rect(193, 160, 218, 95);
      ctx.fill();
      ctx.strokeRect(225, 203, 60, 49);
      ctx.rect(225, 203, 60, 49);
      ctx.strokeRect(320, 203, 58, 51);
      ctx.rect(320, 203, 58, 51);
      ctx.strokeRect(340, 232, 17, 22);
      ctx.rect(340, 232, 17, 22);
      ctx.strokeRect(247, 230, 17, 21);
      ctx.rect(247, 230, 17, 21);

    }
    //F
    else{
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(220, 82, 32, 376);
      ctx.rect(220, 82, 32, 376);
      ctx.strokeRect(220, 82, 266, 38);
      ctx.rect(220, 82, 266, 38);
      ctx.strokeRect(220, 246, 181, 36);
      ctx.rect(220, 246, 181, 36);
      ctx.fill();
    }
  }
  else if(randomCanvas==8){
    if(resolution<1300){
      //Petit robot
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(226, 155, 157, 153);
      ctx.rect(226, 155, 157, 153);
      ctx.strokeRect(383, 217, 110, 30);
      ctx.rect(383, 217, 110, 30);
      ctx.strokeRect(117, 215, 107, 31);
      ctx.rect(117, 215, 107, 31);
      ctx.strokeRect(273, 307, 67, 18);
      ctx.rect(273, 307, 67, 18);
      ctx.strokeRect(276, 133, 65, 20);
      ctx.rect(276, 133, 65, 20);
      ctx.fill();
    }
    // Bonhomme
    else{
      ctx.fillStyle = "white";
      ctx.strokeStyle="black";
      ctx.strokeRect(9, 14, 580, 475);
      ctx.rect(9, 14, 580, 475);
      ctx.fill();
      ctx.strokeRect(41, 58, 207, 273);
      ctx.rect(41, 58, 207, 273);
      ctx.strokeRect(276, 94, 268, 199);
      ctx.rect(276, 94, 268, 199);
      ctx.strokeRect(292, 149, 98, 89);
      ctx.rect(292, 149, 98, 89);
      ctx.strokeRect(60, 146, 94, 110);
      ctx.rect(60, 146, 94, 110);
      ctx.strokeRect(73, 355, 436, 99);
      ctx.rect(73, 355, 436, 99);
    }
  }
  else if(randomCanvas==9){
    if(resolution<1300){
      //WORMS!!!
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(243, 90, 117, 254);
      ctx.rect(243, 90, 117, 254);
      ctx.fill();
      ctx.strokeRect(252, 131, 31, 36);
      ctx.rect(252, 131, 31, 36);
      ctx.strokeRect(318, 129, 31, 39);
      ctx.rect(318, 129, 31, 39);
      ctx.strokeRect(251, 110, 32, 5);
      ctx.rect(251, 110, 32, 5);
      ctx.strokeRect(320, 109, 28, 4);
      ctx.rect(320, 109, 28, 4);
      ctx.strokeRect(267, 220, 74, 26);
      ctx.rect(267, 220, 74, 26);
    }
    else{
      //Tête de con
      ctx.strokeStyle="black";
      ctx.fillStyle="white";
      ctx.beginPath();
      ctx.arc(310, 260, 225, 0, 6.283185307179586, false);
      ctx.stroke();
      ctx.fill();
      ctx.strokeRect(250, 310, 110, 75);
      ctx.strokeRect(300, 160, 139, 106);
      ctx.strokeRect(165, 310, 293, 118);
      ctx.strokeRect(150, 180, 127, 83);
      ctx.strokeRect(315, 205, 40, 51);
      ctx.strokeRect(205, 205, 28, 29);
    }
  }
  else if(randomCanvas==10){
    if(resolution<1300){
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(150, 64, 266, 220);
      ctx.rect(150, 64, 266, 220);
      ctx.strokeRect(231, 285, 113, 129);
      ctx.rect(231, 285, 113, 129);
      ctx.fill();
      ctx.strokeRect(174, 91, 75, 73);
      ctx.strokeRect(310, 90, 87, 73);
      ctx.strokeRect(204, 193, 158, 43);
    }
    else{
      //Chapeau de mexicain vu du dessus
      ctx.strokeStyle="black";
      ctx.fillStyle="white";
      ctx.strokeRect(169, 78, 301, 66);
      ctx.rect(169, 78, 301, 66);
      ctx.strokeRect(119, 78, 50, 250);
      ctx.rect(119, 78, 50, 250);
      ctx.strokeRect(470, 78, 50, 250);
      ctx.rect(470, 78, 50, 250);
      ctx.strokeRect(169, 262, 301, 66);
      ctx.rect(169, 262, 301, 66);
      ctx.fill();
    }
  }
  else if(randomCanvas==11){
    if(resolution<1300){
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(154, 107, 56, 241);
      ctx.rect(154, 107, 56, 241);
      ctx.strokeRect(379, 105, 58, 242);
      ctx.rect(379, 105, 58, 242);
      ctx.strokeRect(210, 143, 169, 46);
      ctx.rect(210, 143, 169, 46);
      ctx.fill();
      ctx.strokeRect(260, 189, 67, 144);
      ctx.fill();
    }
    else{
      //Pièce montée ?
      ctx.strokeStyle="black";
      ctx.fillStyle="white";
      ctx.strokeRect(20, 468, 561, 25);
      ctx.rect(20, 468, 561, 25);
      ctx.strokeRect(41, 424, 523, 43);
      ctx.rect(41, 424, 523, 43);
      ctx.strokeRect(81, 359, 446, 63);
      ctx.rect(81, 359, 446, 63);
      ctx.strokeRect(116, 284, 382, 75);
      ctx.rect(116, 284, 382, 75);
      ctx.strokeRect(150, 201, 314, 82);
      ctx.rect(150, 201, 314, 82);
      ctx.strokeRect(179, 111, 256, 91);
      ctx.rect(179, 111, 256, 91);
      ctx.strokeRect(218, 9, 178, 102);
      ctx.rect(218, 9, 178, 102);
      ctx.fill();
    }
  }
  else if(randomCanvas==12){
    if(resolution<1300){
      //forme chiante
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(212, 201, 177, 244)
      ctx.rect(212, 201, 177, 244)
      ctx.strokeRect(118, 121, 160, 220);
      ctx.rect(118, 121, 160, 220);
      ctx.fill();
      ctx.strokeRect(152, 147, 166, 226);
      ctx.strokeRect(188, 176, 172, 239);
    }
    else{
      //Pablo Picasso ?
      ctx.strokeStyle="black";
      ctx.fillStyle="white";
      ctx.strokeRect(17, 20, 369, 318);
      ctx.rect(17, 20, 369, 318);
      ctx.strokeRect(48, 55, 386, 336);
      ctx.rect(48, 55, 386, 336);
      ctx.strokeRect(89, 110, 397, 330);
      ctx.rect(89, 110, 397, 330);
      ctx.strokeRect(138, 170, 433, 312);
      ctx.rect(138, 170, 433, 312);
      ctx.fill();
    }
  }
  else if(randomCanvas==13){
    if(resolution<1300){
      //forme chiante
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(90, 137, 252, 215);
      ctx.rect(90, 137, 252, 215);
      ctx.strokeRect(342, 137, 94, 143);
      ctx.rect(342, 137, 94, 143);
      ctx.strokeRect(394, 279, 29, 73);
      ctx.rect(394, 279, 29, 73);
      ctx.fill();
    }
    else{
      //Coucou ça rend fou
      ctx.strokeStyle="black";
      ctx.fillStyle="white";
      ctx.strokeRect(23, 25, 557, 451);
      ctx.rect(23, 25, 557, 451);
      ctx.strokeRect(48, 51, 503, 397);
      ctx.rect(48, 51, 503, 397);
      ctx.strokeRect(23, 25, 557, 451);
      ctx.rect(23, 25, 557, 451);
      ctx.strokeRect(75, 79, 452, 346);
      ctx.rect(75, 79, 452, 346);
      ctx.strokeRect(100, 104, 403, 295);
      ctx.rect(100, 104, 403, 295);
      ctx.strokeRect(128, 131, 349, 242);
      ctx.rect(128, 131, 349, 242);
      ctx.strokeRect(151, 157, 301, 191);
      ctx.rect(151, 157, 301, 191);
      ctx.strokeRect(173, 177, 256, 151);
      ctx.rect(173, 177, 256, 151);
      ctx.strokeRect(196, 199, 211, 109);
      ctx.rect(196, 199, 211, 109);
      ctx.strokeRect(213, 218, 175, 71);
      ctx.rect(213, 218, 175, 71);
      ctx.strokeRect(230, 232, 142, 40);
      ctx.rect(230, 232, 142, 40);
      ctx.strokeRect(248, 243, 107, 15);
      ctx.rect(248, 243, 107, 15);
      ctx.fill();
    }
  }
  else if(randomCanvas==14){
    if(resolution<1300){
      //forme chiante
      ctx.strokeStyle="black";
      ctx.fillStyle = "white";
      ctx.strokeRect(147, 62, 116, 120);
      ctx.rect(147, 62, 116, 120);
      ctx.strokeRect(272, 26, 40, 221);
      ctx.rect(272, 26, 40, 221);
      ctx.strokeRect(150, 195, 110, 151);
      ctx.rect(150, 195, 110, 151);
      ctx.strokeRect(276, 258, 166, 88);
      ctx.rect(276, 258, 166, 88);
      ctx.fill();
    }
    else{
      //Damier
      ctx.strokeStyle="black";
      ctx.fillStyle="white";
      ctx.strokeRect(73, 56, 140, 111);
      ctx.rect(73, 56, 140, 111);
      ctx.strokeRect(212, 166, 159, 120);
      ctx.rect(212, 166, 159, 120);
      ctx.strokeRect(372, 55, 134, 109);
      ctx.rect(372, 55, 134, 109);
      ctx.strokeRect(76, 285, 135, 106);
      ctx.rect(76, 285, 135, 106);
      ctx.strokeRect(371, 285, 139, 112);
      ctx.rect(371, 285, 139, 112);
      ctx.fill();
    }
  }
}
