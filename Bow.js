class Bow{
    constructor(bodyA, pointB){
       var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
       }

       this.pointB = pointB

       this.image = loadImage("bow 2.png");

       this.booow = Constraint.create(options);

       

       World.add(world, this.booow);
    }

    fly(){
        this.booow.bodyA = null;
    }

    display() { 

       image(this.image, 1200, 300, 200, 200);

     if (this.booow.bodyA) {
     var pointA = this.booow.bodyA.position;
     var pointB = this.pointB;
     push(); 
     strokeWeight(3);
     line(pointB.x, pointB.y, pointA.x, pointA.y); 
     pop();
     }
   
    }


}