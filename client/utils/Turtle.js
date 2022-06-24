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
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.turtleCanvas = turtleCanvas;
    this.turtleContext = turtleCanvas.getContext('2d');
    this.resetTurtle();
    this.penDown = true;
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
    this.penDown = true;
  }

  drawLineF(dist) {
    const [ x, y ] = this.angleToCoord(dist);
    if (this.penDown) {
      const ctx = this.context;
      ctx.beginPath();
      ctx.moveTo(this.posx, this.posy);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    this.posx = x;
    this.posy = y;
    this.drawTurtle();
  }

  drawLineB(dist) {
    const [ x, y ] = this.angleToCoord(-dist);
    if (this.penDown) {
      const ctx = this.context;
      ctx.beginPath();
      ctx.moveTo(this.posx, this.posy);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    this.posx = x;
    this.posy = y;
    this.drawTurtle();
  }

  turnRt(deg) {
    this.orientation += parseInt(deg);
    this.drawTurtle();
  }
  
  turnLt(deg) {
    this.orientation -= parseInt(deg);
    this.drawTurtle();
  }

  resetTurtle() {
    this.orientation = 0; // degrees orientation, 0 is upwards
    this.posx = this.canvas.width / 2;
    this.posy = this.canvas.height / 2;
    this.drawTurtle();
  }

  /**
   * Loop using the dispatcher
   * 
   * @param {int} count Times to loop
   * @param {array} cmds Array of commands
   * @param {array} args Array of arguments for commands of same index
   */
  async loop(count, cmds, args) {
    // Thanks to https://stackoverflow.com/questions/60566546/is-it-safe-to-promisify-requestanimationframe
    function raf() {
      return new Promise(resolve => {
        requestAnimationFrame(resolve);
      })
    }
    let actions = 0;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < cmds.length; j++) {
        if (++actions % 9999 == 0) await raf();
        this.dispatch(cmds[j], args[j]);
      }
    }
  }

  dispatch(evt, args) {
    switch (evt) {
      case 'fd':
        this.drawLineF(args);
        break;

      case 'bk':
        this.drawLineB(args);
        break;
      
      case 'clr':
        this.clear();
        this.resetTurtle();
        break;

      case 'rt':
        this.turnRt(args);
        break;
      
      case 'lt':
        this.turnLt(args);
        break;
      
      case 'lp':
        this.loop(...args);
        break;

      case 'pu':
        this.penDown = false;
        break;
      
      case 'pd':
        this.penDown = true;
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

export default Turtle;