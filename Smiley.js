/*
 * Write a Smiley class which draws a simple smiley face 
     (using at least two different drawing primitive shapes).  
 * Use a random color for the main color of the smiley. 
 * Initialize the position to be the center of the canvas.  
 *   (use variables, not hard-coded values, as the size of the canvas may change.)
 * Generate a random speed between -3 and 3 for each direction
 * Move the smiley in both x and y, using those random speeds.
 * Each time the smiley reaches an edge, it should change direction.
 *   (Think bouncing ball example.)
*/

// Create a Smiley class. Don't forget appropriate opening and closing curly brackets.
 class Smiley{
    
    // the class should have a constructor 
    // which declares all needed variables and functions
    constructor(){
        // You'll variables for the x and y positions and x and y speeds
        this.x = width/2;
        this.y = height/2;
        this.xspeed = random(-3, 3);
        this.yspeed = random(-3, 3);

        // You'll need a variable for the color of the face, 
        //    which should be randomly generated
        this.faceColor = color(random(255), random(255), random(255));
        // You'll need a variable to keep track of whether the smiley 
        //    has bounced since the last time we checked.  Initialize it to false.
        this.bounced = false;

        // Write a function which draws your Smiley.
        // Use at least two shapes.
        this.display = function(){
            fill(this.faceColor);
            ellipse(this.x, this.y, 40, 40);
            fill(0);
            ellipse(this.x-10, this.y-10, 5, 5);
            ellipse(this.x+10, this.y-10, 5, 5);
        };
        
        // Write a function which moves the Smiley, and check to see if it hit an edge.
        // If an edge was hit, change direction, and bounced variable appropriately.
    
        this.move = function(){
            this.x += this.xspeed;
            this.y += this.yspeed;

            if (this.x < 0 || this.x>width){
                this.xspeed *= -1;
                this.bounced = true;
            }
            if (this.y < 0 || this.y>height){
                this.yspeed *= -1;
                this.bounced = true;
            }

        };
        
        // Write the didBounce function, which returns the value of the bounced variable.
        //   However, we want to first reset the bounced variable to false.  
        //   How can we return the current value of the variable, and also reset the value?
        //   If we first say return the current value, we won't be able to reset it.
        //   If we first reset it, we'll lose the current value.
        //   So, we use a temporary variable to hold the current value of bounced.
        //       We then reset the value of bounced to false.
        //       Then, finally, return the value in temporary variable.

        this.didBounce = function(){
            let temp = this.bounced;
            this.bounced = false;
            return temp;
        };
    } 
 }
          