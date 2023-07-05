let G = 0.4;
let counter = 0;
let birds = [];
let pipes = [];
// let score = 0;
const Pop = 200;
let savedBirds = [];
let cycles = 1;
let bestBirdSoFar;

function setup() {
  createCanvas(640,480);
  pipes.push(new pipe());
  for(let i = 0; i < Pop; i++){
    birds[i] = new ball();
  }

  // console.log(birds.length);
}

function draw() {
  // counter++;
  // background(0);
  
  for(let n = 0; n < cycles; n++){
    counter++;
    if (counter == 60){
      counter = 0;
    } 
    for(let b = 0; b <= birds.length -1; b++){
      // birds[b].show();
      birds[b].update();
      birds[b].think(pipes);
    }

    if(counter % 300 == 0){
      pipes.push(new pipe());
    }
    
    for(var i = pipes.length - 1; i >= 0; i--){
      // pipes[i].show();
      pipes[i].update();
      
      for(var j = birds.length -1; j >= 0; j--){
        if(pipes[i].hit(birds[j])){
          savedBirds.push(birds.splice(j, 1)[0]);
        }

        if(birds[j] != null){
          if(birds[j].y >= height - birds[j].w/2){
            birds.splice(j, 1);
          }
          else if(birds[j].y <= birds[j].w/2){
            birds.splice(j, 1);
          }
        }
      
      }
      
      if(pipes[i].offScreen()){
        pipes.splice(i, 1);
      }
    }

    if(birds.length == 0){
      nextGeneration();
      counter = 0;
      savedBirds = [];
      pipes = [];
      pipes.push(new pipe());
    }
  }

  background(0);
  for(let b = 0; b <= birds.length -1; b++){
    birds[b].show();
  }
  for(var i = pipes.length - 1; i >= 0; i--){
    pipes[i].show();
  }
}

function saveCurrentBirds(){
  console.log("..Saving");
  //let jFile = birds[0].brain.serialize();
  saveJSON(birds[0].brain, 'bird.json');
}

function incCycles(){
  cycles += 1;
}

function decCycles(){
  cycles -= 1;
}