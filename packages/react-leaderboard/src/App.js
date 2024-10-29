import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LeaderBoard from './components/LeaderBoard';
import 'h8k-components';

const title = "SPA - LeaderBoard";

function App() {
	return (
		<Router>
			<div className="App">
				<h8k-navbar header={title}></h8k-navbar>
				<LeaderBoard />
			</div>
		</Router>
	);
}

export default App;
