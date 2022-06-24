import React from 'react';
import SideBarContent from './SideBarContent.jsx';


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    }
  }

  toggleNav(e) {
    if (e.button === 0) {
      if (this.state.sidebarOpen) {
        this.setState({sidebarOpen: false});
      } else {
        this.setState({sidebarOpen: true});
      }
    }
  }

  render() {
    return (
    <>
    <div
      className='sidebar'
      style={{
        width: this.state.sidebarOpen ? '250px' : '0px',
        minWidth: this.state.sidebarOpen ? '250px' : '0px'
      }}
    >
      <SideBarContent
        algoList={this.props.algoList}
        updateAlgos={this.props.updateAlgos}
        insertAlgo={this.props.insertAlgo}
        deleteAlgo={this.props.deleteAlgo}
      />
      <div className='speed-slider-div'>
        <label htmlFor="speed">Speed:</label>
        <input
          id="speed"
          className='speed-slider'
          type="range"
          min="1"
          max="3"
        ></input>
      </div>
    </div>
    <button
       className='sidebar-button'
       onMouseDown={(e) => this.toggleNav(e)}
    >
      &gt;
    </button>
    </>
    );
  }
}


export default SideBar;