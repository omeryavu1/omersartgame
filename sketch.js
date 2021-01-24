/* Welcome to my soccer game Mr. Osudar!
This is all my original work
I only used coding techniques I saw on the p5 js website!
Thank you and I hope you like this project
- Omer
*/

var score = 1;

function setup() {
  createCanvas(600, 500);
}

function preload() {
  img = loadImage('barcelona.jpg')
  img1 = loadImage('car.jpg')
  img2 = loadImage('field.jpg')
  img3 = loadImage('footballer.png')
  img4 = loadImage('defender.png')
}

function draw() {
  background(100,200,255);
  stroke(20);
  // Soccer balls for the games's cover page
  fill(255,255,255);
  ellipse(50,160,60,60);
  fill(0,0,0);
  ellipse(50,140,10,10); // top
  ellipse(50,160,12,12); // middle
  ellipse(70,155,10,10); // right
  ellipse(30,155,10,10); // left
  ellipse(40,180,10,10); // bottom left
  ellipse(60,180,10,10); // bottom right
  
  fill(255,255,255);
  ellipse(550,160,60,60);
  fill(0,0,0);
  ellipse(550,140,10,10); // top 2
  ellipse(550,160,12,12); // middle 2
  ellipse(570,155,10,10); // right 2
  ellipse(530,155,10,10); // left 2
  ellipse(540,180,10,10); // bottom left 2
  ellipse(560,180,10,10); // bottom right 2
  
  // Title page (scene 1)
  noStroke();
  fill(20,100,200);
  textSize(20);
  text("The Ultimate Soccer Game",180,40);
  textSize(15);
  text("Developped by Omer",230,75);
  rect(225,125,150,150);
  fill(255,255,255);
  textSize(20);
  text(" Press Space",240,175);
  fill(20,100,200);
  fill(255,255,255);
  textSize(20);
  text("To Start",250,210)
  text("The Game",250,240)
  fill(20,100,200);
  rect(225,300,150,150);
  fill(255);
  text("Press i",250,350);
  text("For",250,390);
  text("Instructions",250,430);

  // Instruction page
  if (key=="i") {
    background("lightblue")
    fill("blue");
    textSize(17);
    text("When the game starts: pass all the players,",10,100);
    text("But don't touch the players or go outside the field,",10,150);
    text("Press your mouse on the press sign and score a goal",10,200);
    textSize(25);
    text("Press q to go back to main menu and start the story",10,250);
  }
  // Back to main page key
  if (key=="q") {
    background(100,200,255);
  stroke(20);
  // Soccer balls for the games's cover page
  fill(255,255,255);
  ellipse(50,160,60,60);
  fill(0,0,0);
  ellipse(50,140,10,10); // top
  ellipse(50,160,12,12); // middle
  ellipse(70,155,10,10); // right
  ellipse(30,155,10,10); // left
  ellipse(40,180,10,10); // bottom left
  ellipse(60,180,10,10); // bottom right
  
  fill(255,255,255);
  ellipse(550,160,60,60);
  fill(0,0,0);
  ellipse(550,140,10,10); // top 2
  ellipse(550,160,12,12); // middle 2
  ellipse(570,155,10,10); // right 2
  ellipse(530,155,10,10); // left 2
  ellipse(540,180,10,10); // bottom left 2
  ellipse(560,180,10,10); // bottom right 2
  
  // Title page (scene 1)
  noStroke();
  fill(20,100,200);
  textSize(20);
  text("The Ultimate Soccer Game",180,40);
  textSize(15);
  text("Developped by Omer",230,75);
  rect(225,125,150,150);
  fill(255,255,255);
  textSize(20);
  text(" Press Space",240,175);
  fill(20,100,200);
  fill(255,255,255);
  textSize(20);
  text("To Start",250,210)
  text("The Game",250,240)
  fill(20,100,200);
  rect(225,300,150,150);
  fill(255);
  text("Press i",250,350);
  text("For",250,390);
  text("Instructions",250,430);
  }
  // Car scene
    if (key==" ") { background("lightblue"); fill(20,20,20); textSize(16); text("You, the famous soccer player are on your way to the Champions League Final ",16,150); textSize(26); text("Press c to get in your car",16,200) } 
  // Stadium scene
if(key=="c")
    
{  background(255); image(img1,0,0,600,500);
 fill("lightblue"); text("Press e to start the engine and make it to the match",10,50);
  
}
  if(key=="e") {
    background(255);
    image(img,0,0,600,500);
    fill("lightblue");
    text("Press g to start the final",10,50);
    
  }
  // Game scene
  
  if(key=="g") {
    background("green");
    // Defenders
    image(img2,0,0,600,500);
    image(img3,150,360,40,70);
    image(img3,150,250,40,70);
    image(img3,150,150,40,70);
    image(img3,150,40,40,70);
    image(img3,200,200,40,70);
    image(img3,200,300,40,70);
    fill("white")
    textSize(10);
    text("Press Here",100,250);
    text("Start Here",450,250);
    // The soccer ball your controlling
    fill("purple");
    ellipse(mouseX,mouseY,30,30);
    fill("white")
    ellipse(mouseX,mouseY,20,20);
    fill("purple");
    ellipse(mouseX,mouseY,10,10);
    fill("white")
    ellipse(mouseX,mouseY,5,5);
    
     // Rules for if you touch the defenders or go ouside the field you will get a warning sign
    if (mouseX >= 560 && mouseX <= 600 && mouseY >= 0 && mouseY <= 500) {
      background("beige"); fill("black"); textSize(15); text("You went off the field, scroll the mouse back to continue playing",20,100)
    } 
    
    if (mouseX >= 0 && mouseX <= 40 && mouseY >= 0 && mouseY <= 500) {
      background("beige"); fill("black"); textSize(15); text("You went off the field, scroll the mouse back to continue playing",20,100)
    } 
    
    if (mouseX >= 200 && mouseX <= 240 && mouseY >= 300 && mouseY <= 370) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    } 
    
    if (mouseX >= 200 && mouseX <= 240 && mouseY >= 200 && mouseY <= 270) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    } 
    
    if (mouseX >= 150 && mouseX <= 190 && mouseY >= 360 && mouseY <= 430) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    } 
    if (mouseX >= 150 && mouseX <= 190 && mouseY >= 250 && mouseY <= 320) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    }    
    if (mouseX >= 150 && mouseX <= 190 && mouseY >= 150 && mouseY <= 220) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    }    
    if (mouseX >= 150 && mouseX <= 190 && mouseY >= 40 && mouseY <= 110) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    }
    if (mouseX >= 0 && mouseX <= 600 && mouseY >= 470 && mouseY <= 500) {
      background("yellow"); fill("black"); textSize(15); text("You went outside of the field, scroll the mouse back to continue playing",20,100)
    }
    if (mouseX >= 0 && mouseX <= 600 && mouseY >= 0 && mouseY <= 30) {
      background("yellow"); fill("black"); textSize(15); text("You went outside of the field, scroll the mouse back to continue playing",20,100)
    }
    
    if (mouseX >= 100 && mouseX <= 140 && mouseY >= 235 && mouseY <= 255) { if(mouseIsPressed) {
    // Goal scene
      background("green"); image(img2,0,0,600,500); textSize(35); text("Goal!!!!",50,75)
    fill("purple");
    ellipse(20,250,30,30);
    fill("white")
    ellipse(20,250,20,20);
    fill("purple");
    ellipse(20,250,10,10);
    fill("white")
    ellipse(20,250,5,5);
    textSize(20);
    text("Press n to go to the next level!",200,75)
    text("Shot speed in km:" + score,50,120);
    score += 1;
    }
                                                                           
    } 
    
  }
  // Second level for game
  if(key=="n") {
      background("green");
    // Defenders on the second level
    image(img2,0,0,600,500);
     image(img3,300,360,40,70);
     image(img3,350,250,40,70);
     image(img3,350,150,40,70);
     image(img3,300,40,40,70);
     image(img3,450,250,40,70);
     image(img3,450,150,40,70);
     image(img3,500,360,40,70);
     image(img3,500,40,40,70);
    image(img3,400,200,40,70);
    image(img3,400,300,40,70);
    image(img3,400,100,40,70);
    textSize(10);
    text("Start Here",100,250);
    text("Press Here",480,250);
    // The soccer ball your controlling
    fill("blue");
    ellipse(mouseX,mouseY,30,30);
    fill("white")
    ellipse(mouseX,mouseY,20,20);
    fill("blue");
    ellipse(mouseX,mouseY,10,10);
    fill("white")
    ellipse(mouseX,mouseY,5,5);
    
    // Rules for if you touch the defenders or if you go off the field
     if (mouseX >= 560 && mouseX <= 600 && mouseY >= 0 && mouseY <= 500) {
      background("beige"); fill("black"); textSize(15); text("You went off the field, scroll the mouse back to continue playing",20,100)
    } 
    
    if (mouseX >= 0 && mouseX <= 40 && mouseY >= 0 && mouseY <= 500) {
      background("beige"); fill("black"); textSize(15); text("You went off the field, scroll the mouse back to continue playing",20,100)
    } 
    
    if (mouseX >= 400 && mouseX <= 440 && mouseY >= 300 && mouseY <= 370) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    } 
    
    if (mouseX >= 400 && mouseX <= 440 && mouseY >= 100 && mouseY <= 170) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    } 
    
    if (mouseX >= 400 && mouseX <= 440 && mouseY >= 200 && mouseY <= 270) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    } 
    
     if (mouseX >= 300 && mouseX <= 340 && mouseY >= 360 && mouseY <= 430) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    } 
    if (mouseX >= 350 && mouseX <= 390 && mouseY >= 250 && mouseY <= 320) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    }    
    if (mouseX >= 350 && mouseX <= 390 && mouseY >= 150 && mouseY <= 220) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    }    
    if (mouseX >= 300 && mouseX <= 340 && mouseY >= 40 && mouseY <= 110) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    }
    if (mouseX >= 450 && mouseX <= 490 && mouseY >= 250 && mouseY <= 320) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    }
    if (mouseX >= 450 && mouseX <= 490 && mouseY >= 150 && mouseY <= 220) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    }
    if (mouseX >= 500 && mouseX <= 540 && mouseY >= 360 && mouseY <= 430) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    }
    if (mouseX >= 500 && mouseX <= 540 && mouseY >= 40 && mouseY <= 110) {
      background("red"); fill("black"); textSize(15); text("You touched the defender and lost the ball, scroll the mouse back to continue playing",20,100)
    }
    if (mouseX >= 0 && mouseX <= 600 && mouseY >= 470 && mouseY <= 500) {
      background("yellow"); fill("black"); textSize(15); text("You went outside of the field, scroll the mouse back to continue playing",20,100)
    }
    if (mouseX >= 0 && mouseX <= 600 && mouseY >= 0 && mouseY <= 30) {
      background("yellow"); fill("black"); textSize(15); text("You went outside of the field, scroll the mouse back to continue playing",20,100)
    }
    
    if (mouseX >= 482 && mouseX <= 526 && mouseY >= 240 && mouseY <= 250) { if(mouseIsPressed) {
    // Goal scene
      background("green"); image(img2,0,0,600,500); textSize(35); text("Goal!!!! You Won!!!!",250,75)
    fill("blue");
    ellipse(555,250,30,30);
    fill("white")
    ellipse(555,250,20,20);
    fill("blue");
    ellipse(555,250,10,10);
    fill("white")
    ellipse(555,250,5,5);
    textSize(20);
    text("Press b!",250,100)
    text("Shot speed in km:" + score,250,120);
    score += 1;
    } }
    }
  // End Scene
  if(key=="b") {
      background("red"); image(img4,0,0,600,500);
    fill("lightblue");
    ellipse(375,250,400,70);
    fill("red");
    textSize(50);
    text("Game Over",300,100)
    text("Reload page to restart",30,400)
    noStroke();
    fill("blue");
    textSize(30);
    textStyle(BOLD);
    text("Why'd you score on me?",200,260)
    } }
// I hope you love this game!
