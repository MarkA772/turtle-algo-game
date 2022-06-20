import React from 'react';
import TurtleInput from './TurtleInput.jsx';

import Turtle from '../utils/Turtle.js';
import turtleParser from '../utils/TurtleParser.js';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef(null);
    this.turtleCanvasRef = React.createRef(null);
    this.state = {
      inputText: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.turtleCanvas = this.turtleCanvasRef.current;
    this.turtleApp = new Turtle(this.canvas, this.turtleCanvas);
  }

  render() {
    return (<div className="canvas-div">
      <canvas height="600" width="800" ref={this.turtleCanvasRef} className="turtle-canvas"/>
      <canvas height="600" width="800" ref={this.canvasRef} className="canvas"/>
      <TurtleInput
        onInput={this.handleInput}
        onSubmit={this.handleSubmit}
        onSave={this.handleSave}
      />
    </div>);
  }

  handleSave() {
    console.log('handleSave');
  }

  handleSubmit() {
    console.log(turtleParser(this.state.inputText));
    this.turtleApp.dispatch(...turtleParser(this.state.inputText));
  }

  handleInput(e) {
    this.setState({inputText: e.target.value});
  }
}

export default Canvas;