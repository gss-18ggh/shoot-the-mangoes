class Stone{

constructor(x, y, w, h){

    var options={
        isStatic : true
    }

    this.body= Bodies.rectangle(x, y, w, h, options);

    this.width = w;
    this.height = h;
    this.body.position.x = x;
    this.body.position.y = y;

    this.image=loadImage("stone.png");

}

display(){

push();
image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
pop();
}

}