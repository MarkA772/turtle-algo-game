import React from 'react';


class SavedAlgos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algoList: []
    };
    this.updateAlgos();
  }

  updateAlgos() {
    fetch('/api')
      .then(res => res.json())
      .then(data => this.setState({algoList: data}));
  }

  render() {
    const algoList = [];
    this.state.algoList.forEach(algo => {
      algoList.push(<span key={algo.algoid}>{algo.algostring}</span>);
    });
    return (
    <>{algoList}
    </>
    );
  }
}


export default SavedAlgos;