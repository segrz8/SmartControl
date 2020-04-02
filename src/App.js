import React from 'react';
import './App.scss';

import logo from './img/logoSC.jpg';
import bus from './img/bus.jpg';

class App extends React.Component {

	// state = {}

	render() {
		return (
			<div className="App">
				<div className="App__logo">
					<picture>
						<source media="(min-width: 461px)" srcSet={logo} />
						<img src={logo} className="d-block w-100 App__mainImg" alt="logo" />
					</picture>
				</div>
				<div className="App__mainImg">
					<picture>
						<source media="(min-width: 461px)" srcSet={bus} />
						<img src={bus} className="d-block w-100" alt="bus" />
					</picture>
				</div>
				<section className="App__about">
					<h1>O firmie</h1>
					<p>Nasza firma działa na wielu obszarach rynku, jednym z nich jest kontrola dokumentów przewozu (biletów). SMARTCONTROL działa w oparciu o wieloletnie doświadczenie i wysokie kwalifikacje Pracowników. Posiadamy czytniki kart mifare odpowiadające bileterkom EMAR oraz terminale płatnicze.</p>
					<p className="bold">Naszym klientom oferujemy usługi na wysokim poziomie za rozsądną cenę.</p>
					<p>Zapraszamy do współpracy.</p>
				</section>
				<section className="App__services">
					<h1>Usługi świadczone przez SMARTCONTROL</h1>
					<p>Oprócz kontroli dokumentu przewozu oferujemy:</p>
					<div className="App__service">
						<div className="App__iconContainer">
							<i className="fas fa-bus-alt"></i>
						</div>
						<h1>Wynajmy autokarów</h1>
					</div>
					<div className="App__service">
						<div className="App__iconContainer">
							<i className="fas fa-search-dollar"></i>
						</div>
						<h1>Windykacja</h1>
					</div>
					<div className="App__service">
						<div className="App__iconContainer">
							<i className="fas fa-broom"></i>
						</div>
						<h1>Usługi sprzątające</h1>
					</div>
					<div className="App__service">
						<div className="App__iconContainer">
							<i className="fas fa-truck-monster"></i>
						</div>
						<h1>Serwis ogumienia i wulkanizacja</h1>
					</div>
					<div className="App__service">
						<div className="App__iconContainer">
							<i className="fas fa-sign"></i>
						</div>
						<h1>Reklama, bilbordy itp.</h1>
					</div>
				</section>
				<section className="App__reference">
					<p className="bold">Referencje</p>
					<p>Chcesz poznać nasze referencje? Napisz do nas.</p>
				</section>
				<section className="App__contact">
					<h1>Kontakt</h1>
					<ul>
						<li><span className="bold">Kontrola biletów, informacja</span><br />tel. 600 - 618 - 405</li>
						<li><span className="bold">Wynajmy turystyczne i okazjonalne</span><br />tel. 511 - 022 - 003</li>
						<li><span className="bold">Serwis Ogumienia, Wulkanizacja</span><br />ul. Lipowa 3, 21-100 Lubartów<br />tel. 509 - 433 - 337</li>
						<li><span className="bold">Usługi Sprzątające</span><br />tel. 600 - 618 - 405</li>
						<li><span className="bold">smartcontrol.pl</span><br /><a target="_blank" rel="noopener noreferrer" href="mailto: bok@smartkontrol.pl"> bok@smartkontrol.pl</a><br />tel. 600 - 618 - 405</li>
					</ul>
				</section>
				<footer className="App__footer">
					<p className="bold">SMARTCONTROL Sp. z o.o.</p>
					<p>ul. Chełmska 25A/35</p>
					<p>00-724 Warszawa</p>
					<p>KRS: 0000834389</p>
					<p>REGON: 060145766</p>
					<p>NIP: 9461195940</p>
					<p><i className="fas fa-envelope"></i><a target="_blank" rel="noopener noreferrer" href="mailto: bok@smartkontrol.pl"> bok@smartkontrol.pl</a></p>
				</footer>
				<div className="App__copyright">
					<p>Copyright © 2020 SMARTCONTROL - wszelkie prawa zastrzeżone</p>
				</div>
			</div>
		);
	}
}

export default App;
