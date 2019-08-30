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
        {/* <Particles params={ParticlesConfig} width='100%' height='93%' style={{ position: 'absolute', zIndex: '2' }} /> */}

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

            <div className="title">
              <svg className="title" height="100%" width='100%' viewbox="0 0 400 400" style={{ textAlign: 'center' }}>
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="5%" stop-color="#326384" />
                    <stop offset="95%" stop-color="#123752" />
                  </linearGradient>
                  <pattern id="wave" x="0" y="0" width="120" height="110" patternUnits="userSpaceOnUse">
                    <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">
                      <animateTransform
                        attributeName="transform"
                        begin="0s"
                        dur="1.5s"
                        type="translate"
                        from="0,0"
                        to="40,0"
                        repeatCount="indefinite" />
                    </path>
                  </pattern>
                </defs>
                <text text-anchor="middle" x="200" y="130" font-size="6rem" fill="url(#wave)" fill-opacity="0.5">I'm Prawira.</text>
                <text text-anchor="middle" x="200" y="130" font-size="6rem" fill="url(#gradient)" fill-opacity="0.3">I'm Prawira.</text>
              </svg>
            </div>
            <center>
              <div className="banner-text" style={{ backgroundColor: "rgba(0,0,0,0.8)", borderRadius: '25px', width: '90%', padding: "1%" }}>
                <h3><b>{homepageDescriptionPart1} <span>{homepageDescriptionPart2}</span>. {description}.</b></h3>


                <ul className="social">
                  {networks}
                </ul>
              </div>
            </center>
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
