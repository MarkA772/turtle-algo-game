import React from 'react';
import '../css/App.css';


class TurtleInput extends React.Component {

  render() {
    return (
    <div className='input-div'><br />
    <textarea
      className='turtle-input'
      value={this.props.inputText}
      onInput={this.props.onInput}
      onKeyDown={this.props.onKeyDown}
    />
    <div>
      <button
        className='turtle-submit'
        onMouseDown={this.props.onSubmit}
      >
        Submit< br />
        (ctrl+enter)
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