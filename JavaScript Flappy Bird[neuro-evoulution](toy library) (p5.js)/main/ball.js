//mutate function which is passed into brain.mutate
//this give the probablity of mutation
function mutate(x) {
    if (random(1) < 0.1) {
      let offset = randomGaussian() * 0.5;
      let newx = x + offset;
      return newx;
    } else {
      return x;
    }
  }

class ball{

    constructor(brain){
        this.score = 0;
        this.fitness;
        this.yVel = 0;
        this.jumpForce = -9;
        this.x = 100;
        this.y = 30;
        this.w = 30;
        this.h = 30;
        this.maxSpeed = 0
        //if the brain is nural-network or not 
        if(brain instanceof NeuralNetwork){
            this.brain = brain.copy();
            this.brain.mutate(mutate);
        }
        else{
            this.brain = new NeuralNetwork(5, 20, 1);
        }
    }

    think(pipes){
        let inputs = [];
        let closestPipe = null;
        let closestDist = Infinity;

        if(this.yVel > 0){
            this.inputVel = 1;
        }
        else{
            this.inputVel = -1
        }

        //finding the closest pipe to the bird
        for(var i = 0; i < pipes.length; i++){
            let dist = (pipes[i].x) - (this.x + this.w);
            if(dist > 0 && dist < closestDist){
                closestDist = dist;
                closestPipe = pipes[i];         
                closestPipe.highlight = true;
            }
        }

        if(closestPipe != null){
            //Giving some essential inputs
            inputs[0] = this.inputVel;
            inputs[1] = this.y/height;
            inputs[2] = closestPipe.x/closestDist;
            inputs[3] = closestPipe.top/height;
            inputs[4] = closestPipe.bottom/height;
            //predicting output and making dicision based on input
            let output = this.brain.predict(inputs);
            //console.log(output);
            if(output[0] >= 0.5){
                this.up();
            }
            // if(this.y > closestPipe.top && this.y < closestPipe.bottom){
            //     this.score++;
            // }
        }
        
    }
    
    copy() {
        return new ball(this.brain);
      }

    show(){
        fill(255,0,0,150);
        ellipse(this.x, this.y, this.w, this.h);
        
    }

    update(){
        this.y += this.yVel;

        // if(this.y >= height - this.w/2){
        //     this.y = height - this.w/2;
        //     this.yVel = 0;
        // }
        // else if(this.y <= 0){
        //     this.y = 0;
        //     this.yVel = 0;
        // }

        this.yVel += G;
        this.score++;
    }

    up(){
        this.yVel += this.jumpForce;
    }

}