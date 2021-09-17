class paper 
{
	constructor(x,y,r)
	{

		var options={
			isStatic:false,
			restitution:0.3,
			
		
		}
		
	this.r=r;
	
		
	this.body=Bodies.circle(x,y,r,options)
	World.add(world,this.body)	
		this.image=loadImage("paper.png")
		
	}
	display()
	
	{

image(this.image,this.body.position.x,this.body.position.y,this.r)

}



}