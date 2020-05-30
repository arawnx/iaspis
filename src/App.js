import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

import lexicon from './lexicon.json';

class TextInput extends React.Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	componentDidMount() {
		this.inputRef.current.focus();
	}

	tookInput = (e) => {
		if(e.target.value !== this.props.target.substring(0, e.target.value.length)) {
			this.inputRef.current.value = e.target.value.substring(0, e.target.value.length-1);
			this.inputRef.current.style.backgroundColor = "rgba(200,0,0,0.4)";
		} else {
			this.inputRef.current.style.backgroundColor = "transparent";
		}

		if(e.target.value === this.props.target) {
			this.props.callback();
			this.inputRef.current.value = '';
		}
	}

	render() {
		return (
			<label className="text">
				{this.props.target}
				<input id='input' type="text" ref={this.inputRef} onChange={this.tookInput} className="text"/>
			</label>
		);
	}
}

TextInput.propTypes = {
	target: PropTypes.string,
	callback: PropTypes.func
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {target: lexicon[Math.floor()*lexicon.length]};
	}

	reloadTarget = () => {
		this.setState({target: lexicon[Math.floor()*lexicon.length]});

	}

	render() {
		return (
			<TextInput callback={this.reloadTarget} target={this.state.target}/>
		);
	}
}

export default App;
