import React, { Component } from 'react';

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
         <div class="container demo">
            <div class="content">
               <div id="large-header" class="large-header">
                  <header id="home">
                     <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                        <ul id="nav" className="nav">
                           <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                           <li><a className="smoothscroll" href="#about">About</a></li>
                           <li><a className="smoothscroll" href="#resume">Resume</a></li>
                           <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                           <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                           <li><a className="smoothscroll" href="#contact">Contact</a></li>
                        </ul>
                     </nav>
                     <div className="row banner" style={{width:'100%', textAlign:'center'}}>
                        <div className="banner-text">
                           <center>
                              <h1 className="responsive-headline">I'm {name}.</h1>
                              <h3>{homepageDescriptionPart1} <span>{homepageDescriptionPart2}</span>. {description}.</h3>
                              <hr />
                              <ul className="social">
                                 {networks}
                              </ul>
                           </center>
                        </div>
                     </div>
                     <canvas id="demo-canvas"></canvas>
                     <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                     </p>
                  </header>
               </div>
            </div>
         </div>
      );
   }
}

export default Header;
