import React from 'react';
import Canvas from './Canvas.jsx';
import '../css/App.css';


class TurtleInput extends React.Component {

  render() {
    return (
    <div className='input-div'><br />
    <textarea className='turtle-input'></textarea>
    <div>
      <button className='turtle-submit'>Submit</button><br />
      <button className='turtle-save'>Save</button>
    </div>
    </div>
    );
  }
}


export default TurtleInput;