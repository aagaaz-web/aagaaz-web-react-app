import React, {Component} from 'react';

import './ContactInformation.css';

class ContactInformation extends Component
{
    render() {
        return(
            <div id="ContactInformation-Main" className="ContactInformation">
                
                <h2>
                    Email: {this.props.email}
                </h2>

                <h2>
                    Phone: {this.props.phone} ({this.props.phonename})
                </h2>

            </div>
        );
    }
}

export default ContactInformation;