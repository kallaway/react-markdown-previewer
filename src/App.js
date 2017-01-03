import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Markdown Previewer</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<MainFrame />
      </div>
    );
  }
}

class MainFrame extends Component {
	render() {
		return (
			<div>
				<p>Trying out putting one component into another</p>
				<Editor />
				<Preview />
			</div>
		);
	}
}

class Editor extends Component {
	render() {
		return (
			<p>This is Editor</p>
		);
	}
}

class Preview extends Component {
	render() {
		return (
			<p>This is Preview</p>
		);
	}
}



export default App;
