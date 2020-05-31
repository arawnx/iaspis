import React from 'react';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import lexicon from './20.json';
import './App.css';

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
			if(e.target.value.charAt(e.target.value.length-1) != ' ') {
				this.inputRef.current.value = e.target.value.substring(0, e.target.value.length-1);
				this.inputRef.current.style.backgroundColor = "rgba(200,0,0,0.4)";
				setTimeout(() => {
					this.inputRef.current.style.backgroundColor = "transparent";
				}, 1000);
			} else {
				this.inputRef.current.value = '';
			}
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
				<input spellcheck="false" id="input" type="text" ref={this.inputRef} onChange={this.tookInput} className="text"/>
			</label>
		);
	}
}

TextInput.propTypes = {
	target: PropTypes.string,
	callback: PropTypes.func
};

function shuffle(passes, arr) {
	let res = arr.slice(0);
	for(;passes>0;passes--) {
		for(let i = 0; i < res.length; i++) {
			if(Math.random() <= 0.5) {
				let ch = res[i];
				res.splice(i, 1);
				res.unshift(ch);
			}
		}
	}
	return res;
}

function zip(a1, a2) {
	return a1.map((c, i) => {
		return "" + c + a2[i];
	});
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lexicon: this.genLexicon(),
			begun: false
		};
		console.log(lexicon);
	}

	genLexicon = () => {
		let letters	= shuffle(5, "qwertyuiopasdfghjklzxcvbnm".split(""));
		let dual	= zip(letters, shuffle(5, letters));
		let triple	= zip(dual, shuffle(5, letters));
		let quadruple	= zip(triple, shuffle(5, letters));
		let quintuple	= zip(quadruple, shuffle(5, letters));
		return letters.concat(dual).concat(triple).concat(quadruple).concat(quintuple);
	}

	reloadTarget = () => {
		this.setState({
			lexicon: this.state.lexicon.slice(1)
		});
	}

	begin = () => {
		this.setState({
			begun: true
		});
	}

	render() {
		if(this.state.begun) {
			return (
				<TextInput callback={this.reloadTarget} target={this.state.lexicon[0]}/>
			);
		} else {
			return (
				<div>
					<div className="banner">
					Press [SPACE] to begin
					</div>
					<KeyboardEventHandler handleKeys={['space']} onKeyEvent={this.begin}>
					</KeyboardEventHandler>
				</div>
			);
		}
	}
}

export default App;
