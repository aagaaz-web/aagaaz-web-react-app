import React, {Component} from 'react';

import Location from './Location';
import Map from './Map';
import SocialMedia from './SocialMedia';

import './Contact.css';

class Contact extends Component
{
    render() {
        return(
            <div className="Contact">


                <h1 className="Section-Heading">Contact Us</h1>

                <div className="Contact-Content">

                    <div className="Contact-Address">

                        <Map />
                        <Location />

                    </div>

                    <div className="Contact-SocialMedia">

                        <SocialMedia />

                    </div>

                </div>



            </div>

        );
    }
}

export default Contact;
