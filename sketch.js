var inc=0;
let drippy = [];
let bounds = true;
let numDrips=2000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0;i<numDrips;i++){
    drippy.push(new drip());
  }
}

function draw() {
  //background(220);
  for (let i=0;i<drippy.length;i++){
    drippy[i].update();
    drippy[i].display();
  }
}

class drip{
  constructor(){
  this.x = random(width);
  this.y = 0;
  this.diamter=10;
  this.speed=random(1.5,3);
  this.thresh=0;
  this.colorFlip=true;
  }
  
  update(){
    this.speed=abs(random(2,5)+random(-5,.5));
      if (this.thresh>=numDrips/20){
       this.colorFlip=!this.colorFlip;
        //this.x = random(width);
        this.y=0;
        this.thresh=0;
    } else {
       if (this.y>height){
        this.thresh++;
       }
       this.y+=this.speed;
    }
  }
  
  display(){
     noStroke();
     if (this.colorFlip==true){
      fill(0);
     } else {
      fill(255);
     }
     ellipse(this.x,this.y,this.diamter,this.diamter);
     fill(255);
     textSize(48);
     textAlign(CENTER);
     text("DRIPPPPPPPP",width/2,height/2);
  }
}
  
  
  
