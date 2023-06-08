let imgSrc =
  "https://img.freepik.com/free-vector/soccer-ball-realistic_78370-594.jpg?w=740&t=st=1686002711~exp=1686003311~hmac=a7a019dc26fa3704562b1271af39372339e942f42cab5efc08c83dd4350e6af4";

let RecXAxis = 100;
let RecYAxis = 100;
let scoreEl = document.getElementById("score");
let score = parseInt(scoreEl.innerHTML);
let button = document.getElementById("button").addEventListener("click", () => {
  alert(
    "Command the soccer ball using the W, A, S, D keys on your keyboard. Every successful goal earns you a point"
  );
});

class Scene {
  // Constructor - Initalizes Canvas upon make an instance of scene
  constructor() {
    // Get Canvas from HTML
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.width = 500;
    this.canvas.height = 750;
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // Helps stop the animation if needed
    this.animationIsRunning = true;
    this.hasScored = false;
  }

  Start() {
    // Create Sprite Image
    this.sprite = new Sprite(imgSrc, 40, 50);

    this.sprite.CheckKeys();
    this.Animate();
  } // end Start method

  DrawGoalPost(xAxis, yAxis) {
    this.context.fillStyle = "black";
    this.context.strokeRect(xAxis, yAxis, 150, 75);
  }
  Animate() {
    if (this.animationIsRunning) {
      this.Clear();
      if (this.hasScored) {
        RecXAxis = Math.random() * 350;
        RecYAxis = Math.random() * 675;
        this.hasScored = false;
      }
      this.DrawGoalPost(RecXAxis, RecYAxis);
      // Check X Axis Collison
      if (
        // Sprite right side greater than Goal left side collison
        this.sprite.x + this.sprite.width > RecXAxis &&
        // Sprite left side less than Goal Right side collison
        this.sprite.x < RecXAxis + 150 &&
        // Sprite top side less than Goal bottom side collison
        this.sprite.y < RecYAxis + 75 &&
        // Sprite bottom side greater than Goal top side Collison
        this.sprite.y + this.sprite.height > RecYAxis
      ) {
        this.hasScored = true;
        score++;
        //change score and update it on
        scoreEl.innerHTML = score;
      }
      this.sprite.Draw();

      //Aarow function in order to use "this" refrence to the Scene
      requestAnimationFrame(() => this.Animate());
    }
  }

  Stop() {
    this.animationIsRunning = false;
  } // end End method

  Clear() {
    // Clears Canvas to help make the sprite move
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
} // end Scene Class

class Sprite {
  constructor(image, width, height) {
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    this.image = new Image();
    this.image.src = image;
    this.width = width;
    this.height = height;
    this.canvasHeight = this.canvas.height;
    this.canvasWidth = this.canvas.width;
    this.dx = 10;
    this.dy = 10;
    this.x = 250;
    this.y = 375;

    //loads image then calls the draw method. I had trouble with my page loading blank
    this.image.onload = () => {
      this.Draw();
    };
  }

  Draw() {
    //this.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //draw iamge (srx, xAxix, yAxis, width,)
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  } // end Draw Method

  CheckKeys() {
    //add event listener for keys wasd for movement and move them accordingly
    // I had bug where orginally my event Listener said function(event) instead of (event) =>. when i would use "this" it was not refering to the sprite class but instead it was refering to the event listener Resource "https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/"
    addEventListener("keydown", (event) => {
      // Clears prev Sprite Image
      if (event.key === "w") {
        //console.log("Pressed w");
        //console.log(this.y);
        if (this.y > 0) {
          this.y -= this.dy;
        }
      } else if (event.key === "s") {
        //console.log("Pressed s");
        if (this.y + this.height < scene.canvas.height) {
          //console.log(this.y + this.height + " canvas scene =");
          //console.log(scene.canvas.height);
          this.y += this.dy;
        }
      }
      if (event.key === "a") {
        //console.log("Pressed a");
        if (this.x > 0) {
          //console.log(this.x);
          this.x -= this.dx;
        }
      }
      if (event.key === "d") {
        //console.log("Pressed s");
        if (this.x + this.width < scene.canvas.width) {
          // console.log(
          //   "Sprite X: " + this.x + " Canvas Width: " + scene.canvas.width
          // );

          this.x += this.dx;
        }
      }
    });
  } // end InitKeys
} // end Srite Class

let scene = new Scene();
scene.Start();
