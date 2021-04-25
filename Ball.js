class Ball
{
constructor(x,y,w,h)
	{
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		
		this.image=loadImage("paper.png")
	    this.body=Bodies.rectangle(x, y,w,h, options);
 		World.add(world, this.body);

	}
	display(){
			push()
			translate(this.body.position.x,this.body.position.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.body.angle)
			imageMode(CENTER)
			image(this.image,0,0,this.w,this.h);
			pop()
			
	}

}