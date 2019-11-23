import React, {Component} from 'react';

import Location from './Location';
import Map from './Map';
import SocialMedia from './SocialMedia';
import ContactInformation from './ContactInformation';

import './Contact.css';

class Contact extends Component
{
    render() {
        return(
            
            <div id="Contact-Main" className="Contact">


                <h1 className="Section-Heading">Contact Us</h1>

                <div className="Contact-Content">

                    <div className="Contact-Address">

                        {/* <Map latitude="28.675821" longitude="77.113194" /> */}
                        <ContactInformation email="AAGAAZ.BVCOE@gmail.com" phone="7289901886" phonename="Akash Kaushal" />
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
