import React from 'react';


class AlgoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className='algo-item'>
      <span className="saved-algo-text" onMouseDown={this.props.insertAlgo}>{this.props.algoItem}</span>
      <span className="saved-algo-delete" onMouseDown={() => {this.props.deleteAlgo(this.props.algoId)}}>x</span>
    </div>
    );
  }
}


export default AlgoItem;