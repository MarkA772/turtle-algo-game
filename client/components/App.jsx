import React from 'react';
import Canvas from './Canvas.jsx';
import SideBar from './SideBar.jsx';
import '../css/App.css';


class App extends React.Component {

  render() {
    return (
    <><h1>Hello from App.jsx!</h1>
      <div className='app-inner'><SideBar />
      <Canvas /></div>
    </>
    );
  }
}


export default App;