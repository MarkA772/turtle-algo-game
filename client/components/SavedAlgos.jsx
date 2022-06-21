import React from 'react';
import AlgoItem from './AlgoItem.jsx';


class SavedAlgos extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateAlgos();
  }

  render() {
    const algoList = [];
    this.props.algoList.forEach(algo => {
      algoList.push(
        <AlgoItem
          key={algo.id}
          algoItem={algo.algostring}
          insertAlgo={this.props.insertAlgo}
        />
      );
    });
    return (
    <>{algoList}
    </>
    );
  }
}


export default SavedAlgos;