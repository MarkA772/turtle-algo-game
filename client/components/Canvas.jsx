import React from 'react';


class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef(null);
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    console.log(this.canvasRef);
  }

  render() {
    return (<div>
      <canvas ref={this.canvasRef}/>
    </div>);
  }
}


export default Canvas;