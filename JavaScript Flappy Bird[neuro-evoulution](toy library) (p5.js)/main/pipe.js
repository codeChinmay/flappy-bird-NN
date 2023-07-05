class pipe {

    constructor(){
        this.x = width;
        this.w = 30;
        this.vel = 5;
        this.gap = 100;
        this.top = random(14, height-200);
        this.bottom = this.top + this.gap;
        this.highlight = false
    }


    show(){
        if(this.highlight){
            fill(255,0,0);
        }
        else{
            fill(255);
        }
        rectMode(CORNER);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.bottom, this.w, (height - (this.top + this.gap)));
    }
    
    update(){
        this.x -= this.vel;
    }

    hit(ball){
        if(ball.y - ball.h/2 <= this.top || ball.y + ball.h/2 >= this.bottom){
            if(ball.x + ball.w/2 >= this.x && ball.x-ball.w/2 <= this.x + this.w){
                return true;
            }
        }
        else{
            return false;
        }
        
    }

    offScreen(){
        if(this.x <= 0){
            return true;
        }
        else{
            return false;
        }
    }
}