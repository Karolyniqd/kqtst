function setup() {
    createCanvas(500, 500);
       background("red");
  }
  
  function draw() {
    
    stroke("purple")
    fill("pink");
    
    // console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
      rect (mouseX,mouseY,20,35);
    }
  }