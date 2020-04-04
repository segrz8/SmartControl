import React from 'react';
import './App.scss';
import simpleParallax from 'simple-parallax-js'
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Main from './Components/Main'
import References from './Components/References'
import Rodo from './Components/Rodo'

import logo from './img/logoSC.jpg';
import logoS from './img/logoSCs.jpg';

class App extends React.Component {

	// state = {}



	componentDidMount = () => {
		const image = document.getElementsByClassName('thumbnail');
		new simpleParallax(image, {
			scale: 1.3,
			delay: .8,
		});
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter basename={process.env.PUBLIC_URL}>
					<div className="App__logo">
						<picture>
							<source media="(min-width: 461px)" srcSet={logo} />
							<img src={logoS} className="App__mainImg" alt="logo" />
						</picture>
					</div>
					<ScrollToTop>
						<Route exact path="/" component={Main} />
						<Route path="/references" component={References} />
						<Route path="/rodo" component={Rodo} />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
