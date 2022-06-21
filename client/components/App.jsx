import React from 'react';
import Canvas from './Canvas.jsx';
import SideBar from './SideBar.jsx';
import '../css/App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algoList: []
    };
    this.updateAlgos = this.updateAlgos.bind(this);
  }

  updateAlgos() {
    fetch('/api')
      .then(res => res.json())
      .then(data => this.setState({algoList: data}));
  }

  render() {
    return (
    <><h1>Hello from App.jsx!</h1>
      <div className='app-inner'>
      <SideBar algoList={this.state.algoList} updateAlgos={this.updateAlgos} />
      <Canvas updateAlgos={this.updateAlgos} /></div>
    </>
    );
  }
}


export default App;