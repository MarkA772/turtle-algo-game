import React from 'react';


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.sidebarRef = React.createRef(null);
    this.state = {
      sidebarOpen: false,
    }
  }

  toggleNav() {
    if (this.state.sidebarOpen) {
      this.setState({sidebarOpen: false});
    } else {
      this.setState({sidebarOpen: true});
    }
    // const sidebar = this.sidebarRef.current;
    // console.log(sidebar.style.width)
    // sidebar.style.width = '100px';
  }

  render() {
    return (
    <>
    <div
      className='sidebar'
      style={{width: this.state.sidebarOpen ? '250px' : '0px'}}
      ref={this.sidebarRef}
    >
      <div className='sidebar-inner'>
        Test
      </div>
    </div>
    <button
       className='sidebar-button'
       onMouseDown={() => this.toggleNav()}
    >
      &gt;
    </button>
    </>
    );
  }
}


export default SideBar;