class Scene {
  // Constructor - Initalizes Canvas upon make an instance of scene
  constructor() {
    // Get Canvas from HTML
    this.canvas = document.getElementById("canvas");
    this.context = canvas.getContext("2d");
    this.canvas.width = 500;
    this.canvas.height = 750;
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // Helps stop the animation if needed
    this.animationIsRunning = true;
  }

  Start() {
    // Initalize movement keys
    this.InitKeys();
  } // end Start method

  Stop() {
    this.animationIsRunning = false;
  } // end End method

  InitKeys() {
    //add event listener for keys wasd for movement
    addEventListener("keydown", function (event) {
      if (event.key === "w") {
        console.log("pressed w");
      } else if (event.key === "a") {
        console.log("Pressed a");
      } else if (event.key === "s") {
        console.log("Pressed s");
      } else if (event.key === "d") {
        console.log("Pressed d");
      }
    });
  } // end InitKeys

  Clear() {
    // Clears Canvas to help make the sprite move
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
} // end Scene Class

class Sprite {
  constructor(scene, image, width, height) {
    this.scene = scene;
    this.canvas = scene.canvas;
    this.context = this.canvas.getContext("2d");
    this.image = new Image();
    this.image.src = image;
    this.width = width;
    this.height = height;
    this.canvasHeight = this.canvas.height;
    this.canvasWidth = this.canvas.width;
    this.dx = 2;
    this.dy = 2;
    this.x = 250;
    this.y = 375;
  }

  Draw() {
    //draw iamge (srx, xAxix, yAxis, width,)
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
} // end Srite Class

let scene = new Scene();
scene.Start();

let sprite = new Sprite(
  scene,
  "https://img.freepik.com/free-vector/soccer-ball-realistic_78370-594.jpg?w=740&t=st=1686002711~exp=1686003311~hmac=a7a019dc26fa3704562b1271af39372339e942f42cab5efc08c83dd4350e6af4",
  40,
  50
);

sprite.Draw();
