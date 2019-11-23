import React, {Component} from 'react';

import './Button.css';

class Button extends Component
{
    render() {

        const btnStyle = {
            backgroundColor: this.props.background ,
            color: this.props.color,
        }

        return(
            <div className="Button">
                
                <a style={btnStyle} href={this.props.link} className="Button-Link Button-Specific Button-General">
                    {this.props.text}
                </a>

            </div>
        );
    }
}

export default Button;
