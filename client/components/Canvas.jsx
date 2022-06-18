import React from 'react';


class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef(null);
    this.turtleCanvasRef = React.createRef(null);
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.turtleCanvas = this.turtleCanvasRef.current;
    this.turtleApp = new Turtle(this.canvas, this.turtleCanvas);
    this.turtleApp.loop(100000, ['fd', 'rt'], [100, 144]);
  }

  render() {
    return (<div className="canvas-div">
      <canvas height="600" width="800" ref={this.turtleCanvasRef} className="turtle-canvas"/>
      <canvas height="600" width="800" ref={this.canvasRef} className="canvas"/>
    </div>);
  }
}

/**
 * Turtle class to encapsulate turtle drawing logic. Canvas component should
 *   create this class and pass in the canvas context for it to work with.
 * 
 * Canvas component will send events to the Turtle instance from react.
 * Canvas component does not need to know what the turtle is doing, as it
 *   will be drawing directly to the canvas and won't need react to be updated.
 * 
 * Turtle should draw slowly, so user can see the turtle as it draws the lines
 *   and patterns.
 * 
 * To start with, we need functions for turning left/right at an angle, moving
 *   forward x pixels, and back x pixels, and drawing a line.
 * 
 * We also need capability to call those functions in loops.
 * We also need to keep in mind that when we parse these commands it will have
 *   the loop count and the function names inside them with their own args.
 * So this can be complicated if not set up properly. We need a flexible way
 *   to call this funcionality in many different ways and different orders.
 */
class Turtle {
  constructor(canvas, turtleCanvas) {
    this.orientation = 0; // degrees orientation, 0 is upwards
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.turtleCanvas = turtleCanvas;
    this.turtleContext = turtleCanvas.getContext('2d');
    this.posx = canvas.width / 2;
    this.posy = canvas.height / 2;
    this.drawTurtle();
  }

  drawTurtle() {
    const ctx = this.turtleContext;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    const h = 12;
    let [ x, y ] = this.angleToCoord(h);
    ctx.beginPath();
    ctx.moveTo(x, y);
    [ x, y ] = this.angleToCoord(h / 2 - 1, this.orientation - 90);
    ctx.lineTo(x, y);
    [ x, y ] = this.angleToCoord(h / 2 - 1, this.orientation + 90);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLineF(dist) {
    const ctx = this.context;
    ctx.beginPath();
    const [ x, y ] = this.angleToCoord(dist / 2 - 1, this.orientation, this.posx, this.posy);
    ctx.moveTo(this.posx, this.posy);
    ctx.lineTo(x, y);
    ctx.stroke();
    this.posx = x;
    this.posy = y;
    this.drawTurtle();
  }

  drawLineB(dist) {
    const ctx = this.context;
    ctx.beginPath();
    const [ x, y ] = this.angleToCoord(-dist / 2 - 1, this.orientation, this.posx, this.posy);
    ctx.moveTo(this.posx, this.posy);
    ctx.lineTo(x, y);
    ctx.stroke();
    this.posx = x;
    this.posy = y;
    this.drawTurtle();
  }

  turnRt(deg) {
    this.orientation += deg;
    this.drawTurtle();
  }
  
  turnLt(deg) {
    this.orientation -= deg;
    this.drawTurtle();
  }

  /**
   * Loop using the dispatcher
   * 
   * @param {int} count Times to loop
   * @param {array} cmds Array of commands
   * @param {array} args Array of arguments for commands of same index
   */
  loop(count, cmds, args) {
    let i = 0,
      j = 0,
      delta = Date.now();

    const animationLoop = () => {
      if (i >= count) return;
      if (j >= cmds.length) {
        i++;
        j = 0;
      } else {
        this.dispatch(cmds[j], args[j]);
        j++;
      }
      if (Date.now() - delta > 50) {
        delta = Date.now();
        requestAnimationFrame(animationLoop);
      } else {
        animationLoop();
      }
    }
    requestAnimationFrame(animationLoop);
  }

  async dispatch(event, args) {
    switch (event) {
      case 'fd':
        this.drawLineF(args);
        break;

      case 'bk':
        this.drawLineB(args);
        break;
      
      case 'clr':
        this.clear();
        break;

      case 'rt':
        this.turnRt(args);
        break;
      
      case 'lt':
        this.turnLt(args);
        break;
    
      default:
        break;
    }
  }

  angleToCoord(distance, angle=this.orientation, originX=this.posx, originY=this.posy) {
    angle = angle - 90;
    const x = originX + distance * Math.cos(Math.PI * angle / 180.0);
    const y = originY + distance * Math.sin(Math.PI * angle / 180.0);
    return [x, y];
  }
}


export default Canvas;