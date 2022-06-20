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
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.querySelector('.turtle-input').focus();
    this.canvas = this.canvasRef.current;
    this.turtleCanvas = this.turtleCanvasRef.current;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    this.turtleApp = new Turtle(this.canvas, this.turtleCanvas);
  }

  resizeCanvas() {
    const canvasDiv = document.querySelector('.canvas-div');
    canvasDiv.style.width = '90%';
    canvasDiv.style.height = visualViewport.height - 200;
    document.querySelector('.input-div').style.width = '90%';
  }

  render() {
    return (<div className='main-app'><div className="canvas-div">
      <canvas height="1000" width="2000" ref={this.canvasRef} className="canvas"/>
      <canvas height="1000" width="2000" ref={this.turtleCanvasRef} className="turtle-canvas"/></div>
      <TurtleInput
        onInput={this.handleInput}
        onKeyDown={this.handleKeyDown}
        onSubmit={this.handleSubmit}
        onSave={this.handleSave}
      />
    </div>);
  }

  handleSave() {
    console.log('handleSave');
  }

  handleSubmit() {
    this.turtleApp.dispatch(...turtleParser(this.state.inputText));
  }

  handleInput(e) {
    this.setState({inputText: e.target.value});
  }

  handleKeyDown(e) {
    if (e.code === 'Enter' && e.ctrlKey) {
      this.handleSubmit(e);
    }
  }
}

export default Canvas;