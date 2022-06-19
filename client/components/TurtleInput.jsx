import React from 'react';
import Canvas from './Canvas.jsx';
import '../css/App.css';


class TurtleInput extends React.Component {

  render() {
    return (
    <div className='input-div'><br />
    <textarea
      className='turtle-input'
      onInput={this.props.onInput}
    />
    <div>
      <button
        className='turtle-submit'
        onMouseDown={this.props.onSubmit}
      >
        Submit
      </button>
      <br />
      <button
        className='turtle-save'
        onMouseDown={this.props.onSave}
      >
        Save
      </button>
    </div>
    </div>
    );
  }
}


export default TurtleInput;