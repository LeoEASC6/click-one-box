// Click One box Project
function setup (){
createCanvas(600,600);
background(250,0,0);
rect(0,0,600,0);
fill(0,0,255)
}


let bluecolor = 255;
let redcolor = 0;
let width1 = 50
let width2 = 50;
function draw() {
  fill(redcolor,0,bluecolor);
  rect(0, 0, width1, width2);
}

let x = 600
let y = 600 

function mouseClicked() {
  if (bluecolor === 255) {
    bluecolor = 0;
    redcolor = 255;
  } else (redcolor === 255) 
      redcolor = 255;
      bluecolor = 0;

    
  }
  if (width1 === 50){
      width1 = 600; 
  }
  if (width2 === 50){
      width2 = 600;
  }
  

