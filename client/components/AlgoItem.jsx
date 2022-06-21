import React from 'react';


class AlgoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className='algo-item'>
      <span onMouseDown={this.props.insertAlgo}>{this.props.algoItem}</span>
      <span onMouseDown={() => {this.props.deleteAlgo(this.props.algoId)}}> X</span>
    </div>
    );
  }
}


export default AlgoItem;