var newWidth = 50;
var newHeight = 50;

//setup function executes one
function setup(){
    createCanvas(600,400);
    background(50);
}

// draw function loops forever
function draw(){
    //background(50);
    if(mouseIsPressed){
      noStroke();
      fill(51,252,50,50);
      ellipse(mouseX,mouseY,newWidth,newHeight);   
    }
    
}