class pipe{

    constructor(){
        this.xPos = width;
        this.yPos = height/2;
        this.vel = 3;
        this.gap = 30;
        this.width = 30;
    }

    show(){
        this.upperRectCenter = createVector(this.xPos, (this.y - this.gap/2)/2);
        this.upperRectHeight = this.y - this.gap/2;
        this.lowerRectCenter = createVector(this.x,(this.y + this.gap/2)/20);
        this.lowerRectHeight = height - this.y + this.gap/2; 
        fill(255);
        rectMode(CENTER);
        rect(this.upperRectCenter.x, this.upperRectCenter.y, this.width, this.upperRectHeight);
        rect(this.lowerRectCenter.x, this.lowerRectCenter.y, this.width, this.lowerRectHeight);
    }

    update(){
        this.xPos -= this.vel;
    }

}