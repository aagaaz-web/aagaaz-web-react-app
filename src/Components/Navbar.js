import React, {Component} from 'react';
import $ from 'jquery';

import './Navbar.css';

class Navbar extends Component
{

    componentDidMount()
    {
        $('.Navbar-Link').on('click', function(event) {
            if (this.hash !== '') {
              event.preventDefault();
          
              const hash = this.hash;
          
              $('html, body').animate(
                {
                  scrollTop: $(hash).offset().top 
                },
                800
              );
            }
          });
    }


    render() {
        return(
            <nav id="Navbar-Main" className="Navbar">

                <h2 className="Navbar-Brand">
                        
                    <div className="Navbar-Brand-Image">
                        <a href="https://www.bvcoend.ac.in/"> <img src="https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1580408334/Assets/icon-bvcoe.png" /> </a>
                    </div>
                    <div className="Navbar-Brand-Link">
                        <a href="#Cover-Main">AAGAAZ</a> 
                    </div>
                </h2>

                <div className="Navbar-Links-Container">
                    <ul className="Navbar-Links">

                        <a  className="Navbar-Link" href="#Cover-Main"><li>Home</li></a>
                        <a  className="Navbar-Link" href="#About-Main"><li>About</li></a>
                        <a  className="Navbar-Link" href="#Auditions-Main"><li>Auditions</li></a>
                        <a  className="Navbar-Link" href="#Competitions-Main"><li>Competitions</li></a>
                        {/* <a  className="Navbar-Link" href="#Notice-Main"><li>Notice</li></a> */}
                        <a  className="Navbar-Link" href="#Team-Main"><li>Team</li></a>
                        <a  className="Navbar-Link" href="#Contact-Main"><li>Contact</li></a>
                        
                    </ul>
                </div>

            </nav>

        );
    }
}

export default Navbar;
