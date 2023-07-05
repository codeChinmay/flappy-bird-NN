

function nextGeneration(){
    calculateFitness();
    pickOne();
    for(var i = 0; i < Pop; i++){
        birds[i] = new ball(pickOne());
    }
    console.log('next Generation');
}

function calculateFitness(){
    let sum = 0;
    for(var i = 0; i < savedBirds.length; i++ ){
        sum += savedBirds[i].score;
    }

    for(let bird in savedBirds){
        bird.fitness = bird.score / sum;
    }
}

//a github algorythm that picks one bird based on thier fitness
function pickOne(){
    let index = 0;
    var r = random(1);
    // var r = 0.9;
    while(r > 0){
        r = r - savedBirds[index].fitness;
        index++;
    }
    index--;
    return savedBirds[index].brain;
}

   

