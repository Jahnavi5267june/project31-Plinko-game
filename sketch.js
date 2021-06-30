var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  //division1
  for (var k = 0; k <=70; k = k + 70) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  //division2
  for(var k=0; k<=140; k=k+140){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }
  //division3
   for(var k=0; k<=200; k=k+200){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }
  //division4
   for(var k=0; k<=260; k=k+260){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }
  //division5
    for(var k=0; k<=320; k=k+320){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }

  //division6
   for(var k=0; k<=380; k=k+380){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }
  //division7
   for(var k=0; k<=440; k=k+440){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }

  //division8
   for(var k=0; k<=500; k=k+500){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }

  //division9
   for(var k=0; k<=560; k=k+560){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }
   //division10
   for(var k=0; k<=620; k=k+620){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }

  //division11
   for(var k=0; k<=680; k=k+680){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }

  //division12
   for(var k=0; k<=740; k=k+740){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }
  //division13
   for(var k=0; k<=800; k=k+800){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+75) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+75) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }
  
  //display the plinkos 
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var i = 0; i < particles.length; i++){
    particles[i].display();
  }
 
}