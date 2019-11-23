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
                        
                    <a href="#Cover-Main">AAGAAZ</a> 

                </h2>

                <div className="Navbar-Links-Container">
                    <ul className="Navbar-Links">

                        <a  className="Navbar-Link" href="#Cover-Main"><li>Home</li></a>
                        <a  className="Navbar-Link" href="#About-Main"><li>About</li></a>
                        <a  className="Navbar-Link" href="#Notice-Main"><li>Notice</li></a>
                        <a  className="Navbar-Link" href="#Team-Main"><li>Team</li></a>
                        <a  className="Navbar-Link" href="#Contact-Main"><li>Contact</li></a>
                        
                    </ul>
                </div>

            </nav>

        );
    }
}

export default Navbar;
