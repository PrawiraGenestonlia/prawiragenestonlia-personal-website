import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ParticlesConfig from '../Assets/particlesjs-config.json';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var homepageDescriptionPart1 = this.props.data.homepageDescriptionPart1;
      var homepageDescriptionPart2 = this.props.data.homepageDescriptionPart2;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <div>
        <Particles params={ParticlesConfig} width='100%' height='93%' style={{ position: 'absolute', zIndex: '2' }} />

        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Works</a></li>
              <li><a className="smoothscroll" href="#testimonials">Inspiration</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="row banner" style={{ width: '100%', textAlign: 'center', position: 'relative', zIndex: 4 }}>
            <div className="banner-text">
              <center>
                <h1 className="responsive-headline">I'm {name}.</h1>
                <h3>{homepageDescriptionPart1} <span>{homepageDescriptionPart2}</span>. {description}.</h3>


                <ul className="social">
                  {networks}
                </ul>

              </center>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>
        </header>
      </div>
    );
  }
}

export default Header;
