import React from 'react';


class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef(null);
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.turtleApp = Turtle(this.canvasRef);
  }

  render() {
    return (<div>
      <canvas ref={this.canvasRef}/>
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
  constructor(canvas) {
    this.orientation = 0; // degrees orientation, 0 is upwards
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.posx = canvas.width / 2;
    this.posy = canvas.height / 2;
    this.drawTurtle();
  }

  drawTurtle() {
    
  }
}


export default Canvas;