import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menubar from './Components/Menubar';
import Splitter from './Components/Splitter';
import './App.css';

/**
 * Main application component with resizable split pane layout.
 * Demonstrates: React class components, state management, event handling, component composition.
 */
class App extends Component {

  constructor() {
    super();
    this.state = {
      SplitPos: (window.innerWidth / 2)
    }
  }

  /**
   * Handle menu actions to programmatically position the splitter.
   */
  handleMenuItemSelect(Item) {
    switch(Item) {
      case "SlideLeft":
        this.setState({ SplitPos: 0 }, () => {
          console.log(this.state.SplitPos);
        });
        break;
      case "SlideCenter":
        this.setState({ SplitPos: (window.innerWidth / 2) }, () => {
          console.log(this.state.SplitPos);
        });
        break;
      case "SlideRight":
        this.setState({ SplitPos: window.innerWidth }, () => {
          console.log(this.state.SplitPos);
        });
        break;
      default:
        console.log(Item);
        break;
    };
  }

  /**
   * Handle user dragging the splitter bar.
   */
  handleSplitChange(splitPos) {
    this.setState({ SplitPos: splitPos }, () => {
      console.log(this.state.SplitPos);
    });
  }

  render() {
    return (
      <div className="AppContainer">
        <Menubar onMenuItemSelect={this.handleMenuItemSelect.bind(this)} />
        <Splitter
          SplitPos={this.state.SplitPos}
          LeftPane={<div>LeftPane</div>}
          RightPane={<div>RightPane</div>}
          onSplitChange={this.handleSplitChange.bind(this)}
        />
      </div>
    );
  }
}

Splitter.propTypes = {
  SplitPos: PropTypes.number
}

export default App;
