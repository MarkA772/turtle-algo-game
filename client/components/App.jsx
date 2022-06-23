import React from 'react';
import Canvas from './Canvas.jsx';
import SideBar from './SideBar.jsx';
import '../css/App.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algoList: [],
      inputText: ''
    };
    this.updateAlgos = this.updateAlgos.bind(this);
    this.insertAlgo = this.insertAlgo.bind(this);
    this.deleteAlgo = this.deleteAlgo.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  updateAlgos() {
    fetch('/api')
      .then(res => res.json())
      .then(data => this.setState({algoList: data}));
  }

  handleInput(e) {
    this.setState({inputText: e.target.value});
  }

  insertAlgo(e) {
    if (e.button === 0) {
      this.setState({inputText: e.target.innerText});
      setTimeout(() => document.querySelector('.turtle-input').focus(), 0);
    }
  }

  deleteAlgo(algoId, e) {
    if (e.button === 0) {
      const body = {id: algoId};
      fetch('/api', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      })
        .then(() => this.updateAlgos())
        .catch(e => console.log('err: ', e));
    }
  }

  render() {
    return (
    <><h1>Hello from App.jsx!</h1>
      <div className='app-inner'>
      <SideBar
        algoList={this.state.algoList}
        updateAlgos={this.updateAlgos}
        insertAlgo={this.insertAlgo}
        deleteAlgo={this.deleteAlgo}
      />
      <Canvas
        updateAlgos={this.updateAlgos}
        inputText={this.state.inputText}
        handleInput={this.handleInput}
      />
      </div>
    </>
    );
  }
}


export default App;