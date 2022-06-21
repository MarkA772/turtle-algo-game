import React from 'react';


class SavedAlgos extends React.Component {
  constructor(props) {
    super(props);
    this.props.updateAlgos();
  }

  render() {
    const algoList = [];
    this.props.algoList.forEach(algo => {
      algoList.push(<div key={algo.id}>{algo.algostring}</div>);
    });
    return (
    <>{algoList}
    </>
    );
  }
}


export default SavedAlgos;