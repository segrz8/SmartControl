import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import simpleParallax from 'simple-parallax-js'

import bus from '../img/bus.jpg';
import busS from '../img/busS.jpg';

class Main extends React.Component {

    handleScroll = (section) => {
        document.querySelector(`.${section}`).scrollIntoView({
            behavior: 'smooth',
        })
    }

    handleServiceSlideIn = () => {
        for (let i = 1; i < 6; i++) {
            const scrollValue = window.scrollY
            const service = document.querySelector(`.App__service${i}`)
            const serviceTop = service.offsetTop
            const serviceHeight = service.offsetHeight
            const windowHeight = window.innerHeight
            if (scrollValue > serviceTop + serviceHeight - windowHeight) {
                service.classList.add(`App__service${i}--visible`)
            }
        }
    }

    componentDidMount = () => {
        // SlideIn
        window.addEventListener('scroll', this.handleServiceSlideIn)

        // Parallax
        const image = document.getElementsByClassName('thumbnail');
        new simpleParallax(image, {
            scale: 1.4,
            delay: .8,
        });
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleServiceSlideIn)
        console.log(1)
    }

    render() {
        return (
            <div className="App">
                <div className="App__mainImg">
                    <picture>
                        <source media="(min-width: 461px)" srcSet={bus} />
                        <img src={busS} className="thumbnail" alt="bus" />
                    </picture>
                </div>
                <div onClick={() => this.handleScroll('App__about')} className="App__btnAbout btn">O nas</div>
                <div onClick={() => this.handleScroll('App__services')} className="App__btnServices btn">Nasze Usługi</div>
                <Link to='/References' className="App__btnReferences btn"><div>Referencje</div></Link>
                <div onClick={() => this.handleScroll('App__contact')} className="App__btnContact btn">Kontakt</div>
                <section className="App__about">
                    <h1>O firmie</h1>
                    <p>Nasza firma działa na wielu obszarach rynku, jednym z nich jest kontrola dokumentów przewozu (biletów). SMARTCONTROL działa w oparciu o wieloletnie doświadczenie i wysokie kwalifikacje Pracowników. Posiadamy czytniki kart mifare odpowiadające bileterkom EMAR oraz terminale płatnicze.</p>
                    <p>Nasza firma wykorzystuje własnego autorstwa program online do kontroli biletów, w którym kontrolerzy raportują o ilosci sprawdzonych biletów i wystawionych wezwaniach.</p>
                    <p className="bold">Naszym klientom oferujemy usługi na wysokim poziomie za rozsądną cenę.</p>
                    <p>Zapraszamy do współpracy.</p>
                </section>
                <section className="App__services">
                    <h1>Usługi świadczone przez SMARTCONTROL</h1>
                    <p>Oprócz kontroli dokumentu przewozu oferujemy:</p>
                    <div className="App__servicesFlex">
                        <div className="App__service1">
                            <div className="App__iconContainer">
                                <i className="fas fa-bus-alt"></i>
                            </div>
                            <h1>Wynajmy autokarów</h1>
                        </div>
                        <div className="App__service2">
                            <div className="App__iconContainer">
                                <i className="fas fa-search-dollar"></i>
                            </div>
                            <h1>Windykacja</h1>
                        </div>
                        <div className="App__service3">
                            <div className="App__iconContainer">
                                <i className="fas fa-broom"></i>
                            </div>
                            <h1>Usługi sprzątające</h1>
                        </div>
                        <div className="App__service4">
                            <div className="App__iconContainer">
                                <i className="fas fa-truck-monster"></i>
                            </div>
                            <h1>Serwis ogumienia i wulkanizacja</h1>
                        </div>
                        <div className="App__service5">
                            <div className="App__iconContainer">
                                <i className="fas fa-sign"></i>
                            </div>
                            <h1>Reklama, bilbordy itp.</h1>
                        </div>
                    </div>
                </section>
                <section className="App__contact">
                    <h1>Kontakt</h1>
                    <ul>
                        <li><span className="bold">Kontrola biletów, informacja</span><br />tel. 600 - 618 - 405<br /><a target="_blank" rel="noopener noreferrer" href="mailto: kontrola@smartkontrol.pl"> kontrola@smartkontrol.pl</a></li>
                        <li><span className="bold">Wynajmy turystyczne i okazjonalne</span><br />tel. 511 - 022 - 003</li>
                        <li><span className="bold">Windykacja</span><br /><a target="_blank" rel="noopener noreferrer" href="mailto: Windykacja@smartkontrol.pl"> Windykacja@smartkontrol.pl</a></li>
                        <li><span className="bold">Serwis Ogumienia, Wulkanizacja</span><br />ul. Lipowa 3, 21-100 Lubartów<br />tel. 509 - 433 - 337</li>
                        <li><span className="bold">Usługi Sprzątające</span><br />tel. 600 - 618 - 405</li>
                    </ul>
                </section>
                <footer className="App__footer">
                    <p className="bold">SMARTCONTROL Sp. z o.o.</p>
                    <p>ul. Chełmska 25A/35</p>
                    <p>00-724 Warszawa</p>
                    <p>KRS: 0000834389</p>
                    <p>REGON: 385809507</p>
                    <p>NIP: 521-389-35-62</p>
                    <p><i className="fas fa-envelope"></i><a target="_blank" rel="noopener noreferrer" href="mailto: bok@smartkontrol.pl"> bok@smartkontrol.pl</a></p>
                    <p><Link to='/Rodo'>Klauzula informacyjna RODO</Link></p>
                </footer>
                <div className="App__copyright">
                    <p>Copyright © 2020 SMARTCONTROL - wszelkie prawa zastrzeżone. Projekt i wykonanie: Sebastian Grzelak</p>
                </div>
            </div>
        );
    }
}

export default Main;