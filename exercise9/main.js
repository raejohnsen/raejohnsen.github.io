function setup() {
    createCanvas(1710, 920);
  
    background(255, 189, 245);
  
    strokeWeight(10);
    ellipse(500, 320, 370, 275);
    
    circle(380, 400, 250)
    ellipse(450, 450, 280, 200);
    
    fill(0,0,0)
    ellipse(290, 430, 140, 220);
    
    strokeWeight(15);
    line(410, 385, 385, 395)
    line(475, 378, 495, 383)
    ellipse(480, 450, 30, 18)
    
    ellipse(500, 230, 140, 40);
    
    push()
    noFill()
    curve(905, 206, 580, 265, 603, 390, 1000, 500);
    line(570, 390, 605, 390)
    pop()
  
  }