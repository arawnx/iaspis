import React from 'react';
import PropTypes from 'prop-types';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import lexicon from './wordlist.json';
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
			if(e.target.value.charAt(e.target.value.length-1) !== ' ') {
				this.inputRef.current.value = e.target.value.substring(0, e.target.value.length-1);
				this.inputRef.current.style.backgroundColor = "rgba(200,0,0,0.4)";
				this.props.scoreCallback(-0.15);
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
			this.props.fillCallback();
			this.props.scoreCallback(0.2);
			this.inputRef.current.value = '';
		}
	}

	computeStyle = () => {
		return {
			fontSize: this.props.textWidth.toString() + "vmin"
		};
	}

	render() {
		return (
			<label style={this.computeStyle()} className="text">
				{this.props.target}
				<input spellcheck="false" style={this.computeStyle()} id="input" type="text" ref={this.inputRef} onChange={this.tookInput} className="text"/>
			</label>
		);
	}
}

TextInput.propTypes = {
	target: PropTypes.string.isRequired,
	textWidth: PropTypes.number.isRequired,
	fillCallback: PropTypes.func.isRequired,
	scoreCallback: PropTypes.func.isRequired
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			target: this.randSel(1),
			score: 1,
			textWidth: 70,
			begun: false
		};
	}

	randSel = (level) => {
		level = Math.floor(level);
		let lvlwords = lexicon[level.toString()];
		return lvlwords[Math.floor(Math.random() * lvlwords.length)];
	}

	reloadTarget = () => {
		this.setState({
			target: this.randSel(this.state.score),
			textWidth: this.computeTextWidth()
		});
	}

	computeTextWidth = () => {
		return Math.min(Math.floor(100/Math.floor(this.state.score)), 60);
	}

	mutateScore = (diff) => {
		if(this.state.score + diff < 1) {
			this.setState({
				score: 1
			});
		} else if(this.state.score + diff > 19) {
			this.setState({
				score: 19
			});
		} else {
			this.setState({
				score: this.state.score + diff
			});
		}
	}

	begin = () => {
		this.setState({
			begun: true
		});
	}

	render() {
		if(this.state.begun) {
			return (
				<TextInput fillCallback={this.reloadTarget} scoreCallback={this.mutateScore} textWidth={this.state.textWidth} target={this.state.target}/>
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
