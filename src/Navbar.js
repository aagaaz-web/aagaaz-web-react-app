import React, {Component} from 'react';


import './Navbar.css';

class Navbar extends Component
{
    render() {
        return(
            <div id="Navbar-Main" className="Navbar">

                <div className="Navbar-Brand-Container">
                    <ul className="Navbar-Brand">
                        <li>
                            AAGAAZ
                        </li>
                    </ul>
                </div>

                <div className="Navbar-Links-Container">
                    <ul className="Navbar-Links">

                        <a className="Navbar-Link" href="#Cover-Main"><li>Home</li></a>
                        <a className="Navbar-Link" href="#Cover-Main"><li>About</li></a>
                        <a className="Navbar-Link" href="#Cover-Main"><li>Notice</li></a>
                        <a className="Navbar-Link" href="#Cover-Main"><li>Contact Us</li></a>


                        
                    </ul>
                </div>


            </div>

        );
    }
}

export default Navbar;
