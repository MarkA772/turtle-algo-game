import React from 'react';
import SavedAlgos from './SavedAlgos.jsx';


class SideBarContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarSet: 'directions'
    }
  }

  handleTabClick(e) {
    if (e.button === 0) {
      const buttonClass = e.target.className;
      if (buttonClass.startsWith('saved-algos-button')) {
        this.setState({sideBarSet: 'saved'})
      } else if (buttonClass.startsWith('directions-button')) {
        this.setState({sideBarSet: 'directions'})
      }
    }
  }

  render() {
    return (
    <>
    <div className='sidebar-inner'>
      <div style={{width: '100%'}}>
      <button
        className={`directions-button sidebar-tabs
          ${this.state.sideBarSet === 'directions' ? ' tab-selected' : ''}`}
        onMouseDown={(e) => this.handleTabClick(e)}
      >
          Direcitons
      </button>
      <button
        className={`saved-algos-button sidebar-tabs
          ${this.state.sideBarSet === 'saved' ? ' tab-selected' : ''}`}
        onMouseDown={(e) => this.handleTabClick(e)}
      >
        Saved Algorithms
      </button>
      </div>
      <div className={`directions sidebar-content
        ${this.state.sideBarSet === 'directions' ? '' : ' hidden-content'}`}>
        <h3>Test</h3>
      </div>
      <div className={`saved-algos sidebar-content
        ${this.state.sideBarSet === 'saved' ? '' : ' hidden-content'}`}>
        <SavedAlgos
          algoList={this.props.algoList}
          updateAlgos={this.props.updateAlgos}
          insertAlgo={this.props.insertAlgo}
          deleteAlgo={this.props.deleteAlgo}
      /></div>
    </div>
    </>
    );
  }
}


export default SideBarContent;