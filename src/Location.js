import React, {Component} from 'react';

import './Location.css';

class Location extends Component
{
    render() {
        return(
            <div className="Location">

                <i className="fas fa-map-marker-alt fa-6x"></i>

                <div className="Location-Address">
                    
                    <h1>BVCOE</h1>
                    <p >
                        Rohtak Road, A-4 Block, Paschim Vihar, New Delhi, Delhi 110063
                    </p>

                </div>
                
            </div>
        );
    }
}

export default Location;
