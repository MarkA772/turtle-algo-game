import React from 'react';


class AlgoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className='algo-item' onMouseDown={this.props.insertAlgo}>
      {this.props.algoItem}
    </div>
    );
  }
}


export default AlgoItem;