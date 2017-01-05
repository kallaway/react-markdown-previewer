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
			<div className="Main-frame">
				<Editor />
				<Preview />
			</div>
		);
	}
}

class Editor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultText:
			`Heading
			=======

			Sub-heading
			-----------

			### Another deeper heading

			Paragraphs are separated
			by a blank line.

			Leave 2 spaces at the end of a line to do a
			line break

			Text attributes *italic*, **bold**,
			\`monospace\`, ~~strikethrough~~ .
			`
		}
	}

	onTextareaChange = () => {
		// Load the
		// based on the content of this table,
	}

	render() {
		return (
			<div className="Editor">
				<p>This is Editor</p>
				<textarea defaultValue={this.state.defaultText}></textarea>
			</div>

		);
	}
}

class Preview extends Component {
	changeBackgroundOnClick = () => {
		alert("test has run successfully");
	}

	render() {
		return (
			<div className="Preview">
				<p>This is Preview</p>
				<button onClick={this.changeBackgroundOnClick}>Test</button>
			</div>

		);
	}

}





export default App;
