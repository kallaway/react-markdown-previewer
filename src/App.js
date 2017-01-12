import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var marked = require('marked');


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Markdown Previewer</h2>
        </div>
		<MainFrame />
      </div>
    );
  }
}

// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>

class MainFrame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentText: `Heading
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

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.`,
			currentMarkdown: ""
		}
	}

	handleChange(changedText) {
		var textFromTextArea = document.getElementById("goal").value;
		console.log("!!!" + textFromTextArea);
		// return changedText;
		// received the changed text and updated the info. after changing the state - should the other component also be updated?
		console.log("Handle change function gets called");
		console.log("The text given to the function is: " + changedText);
		var currentMarkdown = marked(changedText);
		this.setState({
			currentText: textFromTextArea,
			currentMarkdown: currentMarkdown,
		})

	}
	renderEditor(changedText) {
		return <Editor text={this.state.currentText} onChange={() => this.handleChange(changedText)}/>
	}

	render() {
		return (
			<div className="Main-frame">
				{this.renderEditor(this.state.currentText)}
				<Preview markdown={this.state.currentMarkdown}/>
			</div>
		);
	}
}
// <Editor text={this.state.currentText} onChange={(changedText) => this.handleChange(changedText)}/>

class Editor extends Component {
	constructor(props) {
		super(props);
		// this.test = "something";
		this.state = {
			text: `Heading
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

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.`
		}
	}
	onTextareaChange = () => {
		console.log("text changed");
		// Load the
		// based on the content of this table,
		var string = this.state.text; //how to get the current text of a text area?
		console.log(string);
		// use the library Marked to parse Markdown
		// marked(string)
		console.log(marked(string));
		// we need to somehow push the change of state into the preview component
		// send it up to the parent and then push down to Preview?
	}

	componentDidMount() {
		this.props.onChange();
	}

	render() {
		return (
			<div className="Editor">
				<p>Edit the text below:</p>
				<textarea id="goal" defaultValue={this.state.text} onLoad={this.props.onChange} onChange={this.props.onChange}></textarea>
			</div>
		);
	}
}

class Preview extends Component {

	render() {
		return (
			<div className="Preview" dangerouslySetInnerHTML={{__html: this.props.markdown}}>
			</div>
		);
	}
	// <p>This is Preview</p>
	// <button>Test</button>
}

export default App;
