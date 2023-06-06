let imgSrc =
  "https://img.freepik.com/free-vector/soccer-ball-realistic_78370-594.jpg?w=740&t=st=1686002711~exp=1686003311~hmac=a7a019dc26fa3704562b1271af39372339e942f42cab5efc08c83dd4350e6af4";

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
  }

  Start() {
    // Create Sprite Image
    this.sprite = new Sprite(imgSrc, 40, 50);
    this.Animate();
  } // end Start method

  Animate() {
    if (this.animationIsRunning) {
      this.sprite.CheckKeys();
      this.sprite.Draw();
      requestAnimationFrame(this.Animate);
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
    this.dx = 2;
    this.dy = 2;
    this.x = 250;
    this.y = 375;

    //loads image then calls the draw method. I had trouble with my page loading blank
    this.image.onload = () => {
      this.Draw();
    };
  }

  Draw() {
    //draw iamge (srx, xAxix, yAxis, width,)
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  CheckKeys() {
    //add event listener for keys wasd for movement and move them accordingly
    // I had bug where orginally my event Listener said function(event) instead of (event) =>. when i would use "this" it was not refering to the sprite class but instead it was refering to the event listener Resource "https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/"
    addEventListener("keydown", (event) => {
      if (event.key === "w") {
        console.log("Pressed w");
        this.y -= this.dy;
        this.Draw();
      } else if (event.key === "s") {
        console.log("Pressed s");
        this.y += this.dy;
        this.Draw();
      }
      if (event.key === "a") {
        console.log("Pressed a");
        this.x -= this.dx;
        this.Draw();
      }
      if (event.key === "d") {
        console.log("Pressed s");
        this.x += this.dx;
        this.Draw();
      }
    });
  } // end InitKeys
} // end Srite Class

let scene = new Scene();
scene.Start();
