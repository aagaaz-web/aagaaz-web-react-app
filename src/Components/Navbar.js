import React, {Component} from 'react';


import './Navbar.css';

class Navbar extends Component
{
    render() {
        return(
            <nav id="Navbar-Main" className="Navbar">

                <h2 className="Navbar-Brand">
                        
                    <a href="#">AAGAAZ</a> 

                </h2>

                <div className="Navbar-Links-Container">
                    <ul className="Navbar-Links">

                        <a className="Navbar-Link" href="#Cover-Main"><li>Home</li></a>
                        <a className="Navbar-Link" href="#Cover-Main"><li>About</li></a>
                        <a className="Navbar-Link" href="#Cover-Main"><li>Notice</li></a>
                        <a className="Navbar-Link" href="#Cover-Main"><li>Team</li></a>
                        <a className="Navbar-Link" href="#Cover-Main"><li>Contact</li></a>
                        
                    </ul>
                </div>

            </nav>

        );
    }
}

export default Navbar;
