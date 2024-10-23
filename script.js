var runStart = 0;
var runStart2 = 0;
var runStart3 = 0;
var runStart4 = 0;

function keyCheck(event) {

    //A Key

    if (event.which == 89) {
        
        yeahmusicSound.play();
        clearInterval(runWorkerId3);
        runSound.pause();
        backgroundSound.pause();
        clearInterval(jumpWorkerId3);
        jumpWorkerId3 = -1;
        clearInterval(backgroundWorkerId3);
        clearInterval(scoreWorkerId3);
        clearInterval(moveBlockId3);
        clearInterval(creareBlockId3);

        document.getElementById("level3end").style.visibility = "visible";
        document.getElementById("homebutton8").style.visibility = "visible";

    }
    if (event.which == 65) {

        if (runWorkerId == 0) {

            document.getElementById("startpage").style.visibility = "hidden";
            document.getElementById("level1").style.visibility = "hidden";
            document.getElementById("homebutton").style.visibility = "visible";
            document.getElementById("soundbutton").style.visibility = "visible";

            runWorkerId = setInterval(run, 100);
            runStart = 1;
            runSound.play();
            backgroundSound.play();
            creareBlockId = setInterval(createBlock, 100);
            moveBlockId = setInterval(moveBlocks, 100);
            backgroundWorkerId = setInterval(moveBackground, 100);
            scoreWorkerId = setInterval(updateScore, 100);
        }
    }

    
      //Shoot Function
    if(event.which == 81){
            document.getElementById("boarddiv").style.visibility = "visible";
    
            woohooSound.play()
            clearInterval(moveBlockId);
            setInterval(boardMove, 100);
        }

        if(event.which == 87){

                yeahmusicSound.play();
                clearInterval(runWorkerId);
                runSound.pause();
                backgroundSound.pause();
                clearInterval(jumpWorkerId);
                jumpWorkerId = -1;
                clearInterval(backgroundWorkerId);
                clearInterval(scoreWorkerId);
                clearInterval(moveBlockId);
                clearInterval(creareBlockId);
        
                document.getElementById("level1end").style.visibility = "visible";
                document.getElementById("homebutton1").style.visibility = "visible";
        }
    
        if(event.which == 69){
                document.getElementById("boarddiv2").style.visibility = "visible";
        
                woohooSound.play()
                clearInterval(moveBlockId2);
                setInterval(boardMove2, 100);
            }

        if(event.which == 78){
            clearInterval(createBlockId4);
            clearInterval(moveBlockId4);
        }    
         
        if(event.which == 77){
            clearInterval(createBlockId5);
            clearInterval(moveBlockId5);
        }
        if(event.which == 188){
            clearInterval(createBlockId6);
            clearInterval(moveBlockId6);
        }
        if(event.which == 16){
            planeSound.pause();
        }
       
        
        if (event.which == 219) {
        
                talkSound.play();
                endMusic.play();
                clearInterval(runWorkerId4);
                planeSound.pause();
                backgroundSound.pause();
                clearInterval(jumpWorkerId4);
                jumpWorkerId4 = -1;
                clearInterval(backgroundWorkerId4);
                clearInterval(ScoreWorkerId4);
                clearInterval(moveBlockId4);
                clearInterval(createBlockId4);
        
                document.getElementById("End").style.visibility = "visible";
        
            }
        if(event.which == 90){
              if(boyMarginTop4 >= 240){
                 ohnoSound.play();
                 document.getElementById("gameover4").style.visibility = "visible";
                 boardMoved4.style.visibility="hidden";
                 document.getElementById("endScore4").innerHTML = newScore4;
                 godTakeMeToHeaven.pause();
                 planeSound.pause();
                 hq = 0;
                 clearInterval(ScoreWorkerId4);
                 clearInterval(runWorkerId4);
                 clearInterval(backgroundWorkerId4);
                 clearInterval(jumpWorkerId4);
                 clearInterval(createBlockId4)
                 clearInterval(createBlockId5)
                 clearInterval(createBlockId6)
                 clearInterval(moveBlockId4)
                 clearInterval(moveBlockId5)
                 clearInterval(moveBlockId6)
              }
            }


    //B Key
    if(event.which == 80) {
        document.getElementById("boy4").style.visibility="hidden";
    }
    if (event.which == 66) {

        if (runWorkerId2 == 0) {

            document.getElementById("Desert").style.visibility = "visible";
            document.getElementById("level2start").style.visibility = "hidden";
            document.getElementById("homebutton4").style.visibility = "visible";
            document.getElementById("soundbutton4").style.visibility = "visible";

            runWorkerId2 = setInterval(run2, 100);
            runStart2 = 1;
            runSound.play();
            backgroundSound.play();
            creareBlockId2 = setInterval(createBlock2, 100);
            moveBlockId2 = setInterval(moveBlocks2, 100);
            backgroundWorkerId2 = setInterval(moveBackground2, 100);
            scoreWorkerId2 = setInterval(updateScore2, 100);
        }
    }

    




    //C Key
    if (event.which == 79) {
        boardMoved4.style.visibility="hidden";
        blastSound.play();
        setInterval(hqDestroy,50);
    }
    if (event.which == 67) {

        if (runWorkerId3 == 0) {

            document.getElementById("City").style.visibility = "visible";
            document.getElementById("level3start").style.visibility = "hidden";
            document.getElementById("homebutton7").style.visibility = "visible";
            document.getElementById("soundbutton5").style.visibility = "visible";

            runWorkerId3 = setInterval(run3, 100);
            runStart3 = 1;
            runSound.play();
            backgroundSound.play();
            creareBlockId3 = setInterval(createBlock3, 100);
            moveBlockId3 = setInterval(moveBlocks3, 100);
            backgroundWorkerId3 = setInterval(moveBackground3, 100);
            scoreWorkerId3 = setInterval(updateScore3, 100);
        }
    }

    //D Key
    if(event.which == 73 ) {
        godTakeMeToHeaven.play();
    }
    if (event.which == 68) {
        if (runWorkerId4 == 0) {

            document.getElementById("stage2play").style.visibility = "visible";
            document.getElementById("stage2start").style.visibility = "hidden";
            document.getElementById("home4").style.visibility = "visible";

            runWorkerId4 = setInterval(run4, 100);
            runStart4 = 1;
            planeSound.play();
            createBlockId4 = setInterval(createBlock4, 100);
            moveBlockId4 = setInterval(moveBlocks4, 100);
            createBlockId5 = setInterval(createBlock5, 100);
            moveBlockId5 = setInterval(moveBlocks5, 100);
            createBlockId6 = setInterval(createBlock6, 100);
            moveBlockId6 = setInterval(moveBlocks6, 100);
            backgroundWorkerId4 = setInterval(moveBackground4, 100);
            ScoreWorkerId4 = setInterval(updateScore4, 100);
        }
    }

     //Space Key
     if (event.which == 85) {
        document.getElementById("boarddiv4").style.visibility = "visible";

        ohMyGodSound.play()
        clearInterval(moveBlockId4);
        clearInterval(moveBlockId5);
        clearInterval(moveBlockId6);
        setInterval(boardMove4, 100);
    }
     if (event.which == 32) {
        if(runStart == 1 ){ 
           if (jumpWorkerId == 0) {
                 clearInterval(runWorkerId);
                 runSound.pause();
                 jumpWorkerId = setInterval(jump, 100);
                 jumpSound.play();
             }
         }
     }
     if (event.which == 75) {
         if(runStart2 == 1){
             if (jumpWorkerId2 == 0) {
                 clearInterval(runWorkerId2);
                 runSound.pause();
                 jumpWorkerId2 = setInterval(jump2, 100);
                 jumpSound.play();
             }
         }
     }
     if (event.which == 76) {
         if(runStart3 == 1) { 
             if (jumpWorkerId3 == 0) {
                 clearInterval(runWorkerId3);
                 runSound.pause();
                 jumpWorkerId3 = setInterval(jump3, 100);
                 jumpSound.play();
             }
         }
     }
 


    //Up Arrow Key
    if (event.which == 84) {
        document.getElementById("boarddiv3").style.visibility = "visible";

        thankGodSound.play()
        clearInterval(moveBlockId3);
        setInterval(boardMove3, 100);
    }
    if (event.which == 38) {
        if (runStart4 == 1) {
            if (jumpWorkerId4 == 0) {
                clearInterval(runWorkerId4);
                jumpWorkerId4 = setInterval(jump4, 100);
                windSound.play();
            }
        }
    }

     //Down Arrow Key
      
     if(event.which == 82){
        
        yeahmusicSound.play();
        clearInterval(runWorkerId2);
        runSound.pause();
        backgroundSound.pause();
        clearInterval(jumpWorkerId2);
        jumpWorkerId2 = -1;
        clearInterval(backgroundWorkerId2);
        clearInterval(scoreWorkerId2);
        clearInterval(moveBlockId2);
        clearInterval(creareBlockId2);

        document.getElementById("level2end").style.visibility = "visible";
        document.getElementById("homebutton5").style.visibility = "visible";

    }
     if (event.which == 40) {
        if (runStart4 == 1) {
            if (DownWorkerId == 0) {
                clearInterval(runWorkerId4);
                DownWorkerId = setInterval(Down, 100);
                windSound.play();
            }
        }
    }
}


//Create Block
var blockMarginLeft = 1000;
var creareBlockId = 0;
var blockId = 1;

function createBlock() {
    var block = document.createElement("div");
    block.className = "block";
    block.id = "block" + blockId;
    blockId++;

    var gap = Math.random() * (2000 - 400) + 400;
    blockMarginLeft = blockMarginLeft + gap;
    block.style.marginLeft = blockMarginLeft + "px";

    document.getElementById("background").appendChild(block);
}

//Move Blocks
var moveBlockId = 0;

function moveBlocks() {
    for (var i = 1; i <= blockId; i++) {
        var currentBlock = document.getElementById("block" + i);
        var currentMarginLeft = currentBlock.style.marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 20;
        currentBlock.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft <= 52) {
            if (newMarginLeft >= -108) {
                if (boyMarginTop <= 435) {
                    if (boyMarginTop >= 325) {
                        clearInterval(runWorkerId);
                        runSound.pause();
                        backgroundSound.pause();
                        clearInterval(jumpWorkerId);
                        jumpWorkerId = -1;
                        clearInterval(backgroundWorkerId);
                        clearInterval(scoreWorkerId);
                        clearInterval(moveBlockId);
                        clearInterval(creareBlockId);

                        document.getElementById("score").style.visibility = "hidden";

                        deadWorkerId = setInterval(dead, 100);
                        deadSound.play();
                    }
                }
            }
        }
    }
}


//Run Function
var boy = document.getElementById("boy");
var runImageNumber = 1;
var runWorkerId = 0;
var runSound = new Audio("run.mp3");
runSound.loop = true;

function run() {
    runImageNumber++;

    if (runImageNumber == 11) {
        runImageNumber = 1;
    }

    boy.src = "Run (" + runImageNumber + ").png"

}

//Jump Function
var jumpImageNumber = 1;
var jumpWorkerId = 0;
var boyMarginTop = 435;
var boyMarginLeft = 10;
var jumpSound = new Audio("jump.mp3");

function jump() {
    jumpImageNumber++;

    if (jumpImageNumber <= 7) {
        boyMarginTop = boyMarginTop - 60;
        boy.style.marginTop = boyMarginTop + "px";
    }

    if (jumpImageNumber >= 8) {
        boyMarginTop = boyMarginTop + 60;
        boy.style.marginTop = boyMarginTop + "px";
    }


    if (jumpImageNumber == 13) {
        jumpImageNumber = 1;

        clearInterval(jumpWorkerId);
        jumpWorkerId = 0;

        runWorkerId = setInterval(run, 100);
        runSound.play();
    }

    boy.src = "Jump (" + jumpImageNumber + ").png"

}

//Move Background
var background = document.getElementById("background");
var backgroundX = 0;
var backgroundWorkerId = 0;

function moveBackground() {
    backgroundX = backgroundX - 20;
    background.style.backgroundPositionX = backgroundX + "px";
}


//Update Score
var score = document.getElementById("score");
var newScore = 0;
var scoreWorkerId = 0;

function updateScore() {
    newScore = newScore + 2;
    score.innerHTML = newScore;
}

//Dead Function
var deadImageNumber = 1;
var deadWorkerId = 0;
var deadSound = new Audio("dead.mp3");

function dead() {
    deadImageNumber++;

    if (deadImageNumber == 11) {
        deadImageNumber = 10;

        boy.style.marginTop = "435px";
        document.getElementById("gameover").style.visibility = "visible";
        document.getElementById("endScore").innerHTML = newScore;
    }

    boy.src = "Dead (" + deadImageNumber + ").png";
}

//Restart

function re() {
    clickSound.play();
    location.reload();
}

//Level 1 Start Page

function level1() {
    clickSound.play();
    document.getElementById("level1").style.visibility = "visible";
    document.getElementById("homebutton2").style.visibility = "visible";
}

//Level 1 Try Again

function level1try() {
    document.getElementById("level1").style.visibility = "visible";
    document.getElementById("homebutton2").style.visibility = "visible";
}

//Sound ON/OFF Function

function soundPp() {

    document.getElementById("soundOnButton1").style.visibility="visible";
    document.getElementById("soundOnButton2").style.visibility="visible";
    document.getElementById("soundOnButton3").style.visibility="visible";

    backgroundSound.pause();
    windSound.pause();
    planeSound.pause();
    crashSound.pause();
    
}

function soundOn(){
    document.getElementById("soundOnButton1").style.visibility="hidden";
    document.getElementById("soundOnButton2").style.visibility="hidden";
    document.getElementById("soundOnButton3").style.visibility="hidden";
    backgroundSound.play();
}

//Instuction Function
var clickSound = new Audio("click.wav");
var woohooSound = new Audio("woohoo.mp3");
var instructionSound = new Audio("instructions.mp3");
var instruction2Sound = new Audio("instructions-2.mp3");
var yeahmusicSound = new Audio("yeahmusic.mp3");
var backgroundSound = new Audio("background.mp3");
var thankGodSound = new Audio("ThankGod.mp3");
var ohMyGodSound = new Audio("OhMyGod.mp3");
var blastSound = new Audio("HQExpolsion.mp3");
var talkSound = new Audio("Victorious.mp3");
var endMusic = new Audio("EndMusic.mp3");
var shootSound = new Audio("Shooting.mp3");
var godTakeMeToHeaven = new Audio("TakeMeHeaven.mp3");
var ohnoSound = new Audio("OhNo.mp3");
var waterLand = new Audio("WaterLand.mp3");
backgroundSound.loop = true;
endMusic.loop = true;

function insrtuctionPage() {
    clickSound.play();
    document.getElementById("instructionpage").style.visibility = "visible";
    instructionSound.play();
}

//Bord Move 2
var boardMoved = document.getElementById("boarddiv");
var boardMoveX = 0;
var boardMoveWorkerId = 0;

function boardMove() {
    boardMoveX = boardMoveX - 20;
    boardMoved.style.marginLeft = boardMoveX + "px";
}

//Story Video

function storyvideo() {
    clickSound.play();
    document.getElementById("storyvideo").style.visibility = "visible";
    document.getElementById("video1").style.visibility = "visible";
}

window.onload = function () {
    let player = document.getElementById("player"),
        play = document.getElementById("play");

    play.addEventListener("click", function () {
        player.play();
    });
}



//Level 2 Start Page

function level2start() {
    clickSound.play();
    document.getElementById("level2start").style.visibility = "visible";
}


//Create Block2
var blockMarginLeft2 = 1000;
var creareBlockId2 = 0;
var blockId2 = 1;

function createBlock2() {
    var block2 = document.createElement("div");
    block2.className = "block2";
    block2.id = "block2" + blockId2;
    blockId2++;

    if(newScore2 == 400){
        gap2 = Math.random() * (10000 - 400) + 400;
    }

    var gap2 = Math.random() * (2000 - 400) + 400;
    blockMarginLeft2 = blockMarginLeft2 + gap2;
    block2.style.marginLeft = blockMarginLeft2 + "px";

    document.getElementById("Desert").appendChild(block2);
}

//Move Blocks2
var moveBlockId2 = 0;

function moveBlocks2() {
    for (var i2 = 1; i2 <= blockId2; i2++) {
        var currentBlock2 = document.getElementById("block2" + i2);
        var currentMarginLeft2 = currentBlock2.style.marginLeft;
        var newMarginLeft2 = parseInt(currentMarginLeft2) - 20;
        currentBlock2.style.marginLeft = newMarginLeft2 + "px";

        if (newMarginLeft2 <= 52) {
            if (newMarginLeft2 >= -108) {
                if (boyMarginTop2 <= 435) {
                    if (boyMarginTop2 >= 325) {
                        clearInterval(runWorkerId2);
                        runSound.pause();
                        backgroundSound.pause();
                        clearInterval(jumpWorkerId2);
                        jumpWorkerId2 = -1;
                        clearInterval(backgroundWorkerId2);
                        clearInterval(scoreWorkerId2);
                        clearInterval(moveBlockId2);
                        clearInterval(creareBlockId2);

                        document.getElementById("score").style.visibility = "hidden";

                        deadWorkerId2 = setInterval(dead2, 100);
                        deadSound.play();
                    }
                }
            }
        }
    }
}

//Run Function2
var boy2 = document.getElementById("boy2");
var runImageNumber2 = 1;
var runWorkerId2 = 0;


function run2() {
    runImageNumber2++;

    if (runImageNumber2 == 11) {
        runImageNumber2 = 1;
    }

    boy2.src = "Run (" + runImageNumber2 + ").png"

}

//Jump Function2
var jumpImageNumber2 = 1;
var jumpWorkerId2 = 0;
var boyMarginTop2 = 435;
var boyMarginLeft2 = 10;


function jump2() {
    jumpImageNumber2++;

    if (jumpImageNumber2 <= 7) {
        boyMarginTop2 = boyMarginTop2 - 60;
        boy2.style.marginTop = boyMarginTop2 + "px";
    }

    if (jumpImageNumber2 >= 8) {
        boyMarginTop2 = boyMarginTop2 + 60;
        boy2.style.marginTop = boyMarginTop2 + "px";
    }


    if (jumpImageNumber2 == 13) {
        jumpImageNumber2 = 1;

        clearInterval(jumpWorkerId2);
        jumpWorkerId2 = 0;

        runWorkerId2 = setInterval(run2, 100);
        runSound.play();
    }

    boy2.src = "Jump (" + jumpImageNumber2 + ").png"

}

//Move Background2
var background2 = document.getElementById("Desert");
var backgroundX2 = 0;
var backgroundWorkerId2 = 0;

function moveBackground2() {
    backgroundX2 = backgroundX2 - 20;
    background2.style.backgroundPositionX = backgroundX2 + "px";

}

//Update Score2
var score2 = document.getElementById("score2");
var newScore2 = 0;
var scoreWorkerId2 = 0;

function updateScore2() {
    newScore2 = newScore2 + 2;
    score2.innerHTML = newScore2;
}

//Dead Function2
var deadImageNumber2 = 1;
var deadWorkerId2 = 0;

function dead2() {
    deadImageNumber2++;

    if (deadImageNumber2 == 11) {
        deadImageNumber2 = 10;

        boy2.style.marginTop = "435px";
        document.getElementById("gameover2").style.visibility = "visible";
        document.getElementById("endScore2").innerHTML = newScore2;
    }

    boy2.src = "Dead (" + deadImageNumber2 + ").png";
}


//Bord Move2
var boardMoved2 = document.getElementById("boarddiv2");
var boardMoveX2 = 0;
var boardMoveWorkerId2 = 0;

function boardMove2() {
    boardMoveX2 = boardMoveX2 - 20;
    boardMoved2.style.marginLeft = boardMoveX2 + "px";
}

//Level 3 Start Page

function level3start() {
    clickSound.play();
    document.getElementById("level3start").style.visibility = "visible";
}

//Create Block3
var blockMarginLeft3 = 1000;
var creareBlockId3 = 0;
var blockId3 = 1;

function createBlock3() {
    var block3 = document.createElement("div");
    block3.className = "block3";
    block3.id = "block3" + blockId3;
    blockId3++;

    if(newScore3 == 400){
        gap3 = Math.random() * (10000 -400) + 400;
    }

    var gap3 = Math.random() * (2000 - 400) + 400;
    blockMarginLeft3 = blockMarginLeft3 + gap3;
    block3.style.marginLeft = blockMarginLeft3 + "px";

    document.getElementById("City").appendChild(block3);
}


//Move Blocks3
var moveBlockId3 = 0;

function moveBlocks3() {
    for (var i3 = 1; i3 <= blockId3; i3++) {
        var currentBlock3 = document.getElementById("block3" + i3);
        var currentMarginLeft3 = currentBlock3.style.marginLeft;
        var newMarginLeft3 = parseInt(currentMarginLeft3) - 20;
        currentBlock3.style.marginLeft = newMarginLeft3 + "px";

        if (newMarginLeft3 <= 52) {
            if (newMarginLeft3 >= -108) {
                if (boyMarginTop3 <= 435) {
                    if (boyMarginTop3 >= 325) {
                        clearInterval(runWorkerId3);
                        runSound.pause();
                        backgroundSound.pause();
                        clearInterval(jumpWorkerId3);
                        jumpWorkerId3 = -1;
                        clearInterval(backgroundWorkerId3);
                        clearInterval(scoreWorkerId3);
                        clearInterval(moveBlockId3);
                        clearInterval(creareBlockId3);

                        document.getElementById("score").style.visibility = "hidden";

                        deadWorkerId3 = setInterval(dead3, 100);
                        deadSound.play();
                    }
                }
            }
        }
    }
}


//Run Function3
var boy3 = document.getElementById("boy3");
var runImageNumber3 = 1;
var runWorkerId3 = 0;


function run3() {
    runImageNumber3++;

    if (runImageNumber3 == 11) {
        runImageNumber3 = 1;
    }

    boy3.src = "Run (" + runImageNumber3 + ").png"

}

//Jump Function3
var jumpImageNumber3 = 1;
var jumpWorkerId3 = 0;
var boyMarginTop3 = 435;
var boyMarginLeft3 = 10;


function jump3() {
    jumpImageNumber3++;

    if (jumpImageNumber3 <= 7) {
        boyMarginTop3 = boyMarginTop3 - 60;
        boy3.style.marginTop = boyMarginTop3 + "px";
    }

    if (jumpImageNumber3 >= 8) {
        boyMarginTop3 = boyMarginTop3 + 60;
        boy3.style.marginTop = boyMarginTop3 + "px";
    }


    if (jumpImageNumber3 == 13) {
        jumpImageNumber3 = 1;

        clearInterval(jumpWorkerId3);
        jumpWorkerId3 = 0;

        runWorkerId3 = setInterval(run3, 100);
        runSound.play();
    }

    boy3.src = "Jump (" + jumpImageNumber3 + ").png"

}


//Move Background3
var background3 = document.getElementById("City");
var backgroundX3 = 0;
var backgroundWorkerId3 = 0;

function moveBackground3() {
    backgroundX3 = backgroundX3 - 20;
    background3.style.backgroundPositionX = backgroundX3 + "px";

}


//Update Score3
var score3 = document.getElementById("score3");
var newScore3 = 0;
var scoreWorkerId3 = 0;

function updateScore3() {
    newScore3 = newScore3 + 2;
    score3.innerHTML = newScore3;
}

//Dead Function3
var deadImageNumber3 = 1;
var deadWorkerId3 = 0;

function dead3() {
    deadImageNumber3++;

    if (deadImageNumber3 == 11) {
        deadImageNumber3 = 10;

        boy3.style.marginTop = "435px";
        document.getElementById("gameover3").style.visibility = "visible";
        document.getElementById("endScore3").innerHTML = newScore3;
    }

    boy3.src = "Dead (" + deadImageNumber3 + ").png";
}

//Plane Move
var boardMoved3 = document.getElementById("boarddiv3");
var boardMoveX3 = 0;
var boardMoveWorkerId3 = 0;

function boardMove3() {
    boardMoveX3 = boardMoveX3 - 20;
    boardMoved3.style.marginLeft = boardMoveX3 + "px";
}

//Stage 2 Start

function secondStage() {
    clickSound.play();
    document.getElementById("stage2").style.visibility = "visible";
}

//Div Hidden

function divhidden() {
    clickSound.play();
    document.getElementById("player2").style.visibility = "hidden";
    document.getElementById("play2").style.visibility = "hidden";
    document.getElementById("closebutton2").style.visibility = "hidden";
}

function divhidden2() {
    clickSound.play();
    instruction2Sound.pause();
    document.getElementById("instructionpage2").style.visibility = "hidden";
    document.getElementById("closei2").style.visibility = "hidden";
    document.getElementById("closebutton2").style.visibility = "hidden";
}

//Instruction Stage 2

function insrtuctionPage2() {
    clickSound.play();
    document.getElementById("instructionpage2").style.visibility = "visible";
    instruction2Sound.play();
}

//Stage 2 Start Page Back

function stage2() {
    document.getElementById("stage2start").style.visibility = "visible";
}

//Create Block 4
var blockMarginLeft4 = 600;
var blockID4 = 1;
var createBlockId4 = 0;

function createBlock4() {
    var block4 = document.createElement("div");
    block4.className = "block4";
    block4.id = "block4" + blockID4;
    blockID4++;


    var gap4 = Math.random() * (3000 - 400) + 400;
    blockMarginLeft4 = blockMarginLeft4 + gap4;

    block4.style.marginLeft = blockMarginLeft4 + "px";
    document.getElementById("stage2play").appendChild(block4);
}

//Move Block 4
var moveBlockId4 = 0;

function moveBlocks4() {
    for (var i4 = 1; i4 <= blockID4; i4++) {
        var currentBlock4 = document.getElementById("block4" + i4);
        var currentMarginLeft4 = currentBlock4.style.marginLeft;
        var newMarginLeft4 = parseInt(currentMarginLeft4) - 20;
        currentBlock4.style.marginLeft = newMarginLeft4 + "px";

        if (newMarginLeft4 <= 139) {
            if (newMarginLeft4 >= 50) {
                ;
                if (boyMarginTop4 <= 260) {
                    if (boyMarginTop4 >= 140) {
                        clearInterval(runWorkerId4);
                        planeSound.pause();
                        clearInterval(jumpWorkerId4);
                        jumpWorkerId4 = -1;
                        clearInterval(backgroundWorkerId4);
                        clearInterval(ScoreWorkerId4);
                        clearInterval(moveBlockId4);
                        clearInterval(createBlockId4);
                        clearInterval(moveBlockId5);
                        clearInterval(createBlockId5);
                        clearInterval(moveBlockId6);
                        clearInterval(createBlockId6);

                        deadWorkerId4 = setInterval(dead4, 100);
                        crashSound.play();
                    }
                }
            }
        }
    }
}

//Create Block5
var blockMarginLeft5 = 600;
var blockID5 = 1;
var createBlockId5 = 0;

function createBlock5() {
    var block5 = document.createElement("div");
    block5.className = "block5";
    block5.id = "block5" + blockID5;
    blockID5++;

    if(newScore4 == 400){
        gap5 = Math.random() * (10000-400) + 400;
    }

    var gap5 = Math.random() * (5000 - 400) + 400;
    blockMarginLeft5 = blockMarginLeft5 + gap5;

    block5.style.marginLeft = blockMarginLeft5 + "px";
    document.getElementById("stage2play").appendChild(block5);
}

//Move Block 5
var moveBlockId5 = 0;

function moveBlocks5() {
    for (var i5 = 1; i5 <= blockID5; i5++) {
        var currentBlock5 = document.getElementById("block5" + i5);
        var currentMarginLeft5 = currentBlock5.style.marginLeft;
        var newMarginLeft5 = parseInt(currentMarginLeft5) - 20;
        currentBlock5.style.marginLeft = newMarginLeft5 + "px";

        if (newMarginLeft5 <= 139) {
            if (newMarginLeft5 >= 50) {
                ;
                if (boyMarginTop4 <= 130) {
                    if (boyMarginTop4 >= 10) {
                        clearInterval(runWorkerId4);
                        planeSound.pause();
                        clearInterval(jumpWorkerId4);
                        jumpWorkerId4 = -1;
                        clearInterval(backgroundWorkerId4);
                        clearInterval(ScoreWorkerId4);
                        clearInterval(moveBlockId4);
                        clearInterval(createBlockId4);
                        clearInterval(moveBlockId5);
                        clearInterval(createBlockId5);
                        clearInterval(moveBlockId6);
                        clearInterval(createBlockId6);

                        deadWorkerId4 = setInterval(dead4, 100);
                        crashSound.play();
                    }
                }
            }
        }
    }
}


//Create Block6
var blockMarginLeft6 = 600;
var blockID6 = 1;
var createBlockId6 = 0;

function createBlock6() {
    var block6 = document.createElement("div");
    block6.className = "block6";
    block6.id = "block6" + blockID6;
    blockID6++;

    if(newScore4 == 400){
        gap6 = Math.random() * (10000-400) + 400;
    }

    var gap6 = Math.random() * (6000 - 400) + 400;
    blockMarginLeft6 = blockMarginLeft6 + gap6;

    block6.style.marginLeft = blockMarginLeft6 + "px";
    document.getElementById("stage2play").appendChild(block6);
}

//Move Block6
var moveBlockId6 = 0;

function moveBlocks6() {
    for (var i6 = 1; i6 <= blockID6; i6++) {
        var currentBlock6 = document.getElementById("block6" + i6);
        var currentMarginLeft6 = currentBlock6.style.marginLeft;
        var newMarginLeft6 = parseInt(currentMarginLeft6) - 20;
        currentBlock6.style.marginLeft = newMarginLeft6 + "px";

        if (newMarginLeft6 <= 139) {
            if (newMarginLeft6 >= 50) {
                ;
                if (boyMarginTop4 <= 400) {
                    if (boyMarginTop4 >= 290) {
                        clearInterval(runWorkerId4);
                        planeSound.pause();
                        clearInterval(jumpWorkerId4);
                        jumpWorkerId4 = -1;
                        clearInterval(backgroundWorkerId4);
                        clearInterval(ScoreWorkerId4);
                        clearInterval(moveBlockId4);
                        clearInterval(createBlockId4);
                        clearInterval(moveBlockId5);
                        clearInterval(createBlockId5);
                        clearInterval(moveBlockId6);
                        clearInterval(createBlockId6);

                        deadWorkerId4 = setInterval(dead4, 100);
                        crashSound.play();
                    }
                }
            }
        }
    }
}




//Run Function 4
var planeSound = new Audio("Plane.mp3");
planeSound.loop = true;
var boy4 = document.getElementById("boy4");
var runImageNumber4 = 1;
var runWorkerId4 = 0;

function run4() {
    runImageNumber4++;

    if (runImageNumber4 == 3) {
        runImageNumber4 = 1;
    }

    boy4.src = "Fly (" + runImageNumber4 + ").png";
}

//Jump Function 4
var windSound = new Audio("WindCut.mp3");
var jumpImageNumber4 = 1;
var jumpWorkerId4 = 0;
var DownImageNumber = 1;
var DownWorkerId = 0;
var boyMarginTop4 = 200;

function jump4() {
    jumpImageNumber4++;

    if (jumpImageNumber4 <= 2) {
        boyMarginTop4 = boyMarginTop4 - 60;
        boy4.style.marginTop = boyMarginTop4 + "px";
    }

    if (jumpImageNumber4 == 3) {
        jumpImageNumber4 = 1;

        clearInterval(jumpWorkerId4);
        jumpWorkerId4 = 0;

        runWorkerId4 = setInterval(run4, 100);
        planeSound.play();
    }

    boy4.src = "Fly (" + jumpImageNumber4 + ").png";
}


//Down Function
function Down() {
    DownImageNumber++;

    if (DownImageNumber <= 2) {
        boyMarginTop4 = boyMarginTop4 + 60;
        boy4.style.marginTop = boyMarginTop4 + "px";
    }

    if (DownImageNumber == 3) {
        DownImageNumber = 1;

        clearInterval(DownWorkerId);
        DownWorkerId = 0;

        runWorkerId4 = setInterval(run4, 100);
        planeSound.play();
    }

    boy4.src = "Fly (" + DownImageNumber + ").png";
}


//Move Background 4
var background4 = document.getElementById("stage2play");
var backgroundX4 = 0;
var backgroundWorkerId4 = 0;

function moveBackground4() {
    backgroundX4 = backgroundX4 - 20;
    background4.style.backgroundPositionX = backgroundX4 + "px";

    if(boyMarginTop4>=440){
       waterLand.play();
    }

    if(boyMarginTop4<440){
        waterLand.pause();
     }

    if(boyMarginTop4>=450){
        planeSound.pause();
        waterLand.pause();
        crashSound.play();
        document.getElementById("gameover4").style.visibility = "visible";
        boardMoved4.style.visibility="hidden";
        document.getElementById("endScore4").innerHTML = newScore4;
        godTakeMeToHeaven.pause();
        hq = 0;
        clearInterval(ScoreWorkerId4);
        clearInterval(runWorkerId4);
        clearInterval(backgroundWorkerId4);
        clearInterval(jumpWorkerId4);
        clearInterval(createBlockId4);
        clearInterval(createBlockId5);
        clearInterval(createBlockId6);
        clearInterval(moveBlockId4);
        clearInterval(moveBlockId5);
        clearInterval(moveBlockId6);
    }
}

//Update Score 4
var score4 = document.getElementById("score4");
var newScore4 = 0;
var ScoreWorkerId4 = 0;

function updateScore4() {
    newScore4 = newScore4 + 2;
    score4.innerHTML = newScore4;
}

//Dead Function 4
var crashSound = new Audio("Crash.mp3");
var deadImageNumber4 = 1;
var deadWorkerId4 = 0;

function dead4() {
    deadImageNumber4++;

    if (deadImageNumber4 == 21) {
        deadImageNumber4 = 20

        boy4.style.marginTop = "200px";
        document.getElementById("gameover4").style.visibility = "visible";
        document.getElementById("endScore4").innerHTML = newScore4;
    }
    boy4.src = "Dead_ (" + deadImageNumber4 + ").png"
}

//Bord Move 4
var boardMoved4 = document.getElementById("boarddiv4");
var boardMoveX4 = 0;
var boardMoveWorkerId4 = 0;

function boardMove4() {
    boardMoveX4 = boardMoveX4 - 5;
    boardMoved4.style.marginLeft = boardMoveX4 + "px";
}

//End Black

function black() {
    document.getElementById("black").style.visibility = "visible";
    endMusic.pause();
}

//Share

function sharelink() {
    alert("COPY THIS Link & SHARE 'http://127.0.0.1:5500/index.html'");
}

//HQ Destroy
var hq = document.getElementById("hqd4to");
var hqdImageNumber = 1;
var hqdWorkerId = 0;


function hqDestroy() {
  document.getElementById("HQD").style.visibility="visible";     

    hqdImageNumber++;

    if (hqdImageNumber == 16) {
         hqdImageNumber = 15;
    }

    hq.src = "HQD (" + hqdImageNumber + ").png"
}
