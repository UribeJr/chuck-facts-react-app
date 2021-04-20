import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
	state = {facts:''};
	componentDidMount() {
		this.fetchFact();
	}
	fetchFact = () => {
			axios.get('https://api.chucknorris.io/jokes/random')
			.then((resp) => {
				const facts = resp.data.value;
				
				this.setState({ facts });
			})
			.catch((err) => {
				console.log('ooops something broke!',err);
			});
		}

	render() {
		const {facts} = this.state;
		return (
			<div className="app">
				<div className="card">
				<h1 className = "heading">{facts}</h1>
				<button className="button" onClick={this.fetchFact}>
				<span>ROUNDHOUSE!</span>
				</button>
				</div>
			</div>
			)
	}
}

export default App;