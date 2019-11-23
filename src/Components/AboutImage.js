import React, {Component} from 'react';

import './AboutImage.css';

class AboutImage extends Component
{
    render() {
        return(
            <div id="AboutImage-Main" className="AboutImage">
                
                <img src={this.props.image} alt="Aagaaz Photo" />

            </div>
        );
    }
}

export default AboutImage;
