import React, {Component} from 'react';

import Button from './Button';

import './Cover.css';


class Cover extends Component
{
    render() {
        return(
            <div id="Cover-Main" className="Cover">
                <div className="Cover-Heading">
                    <h1 className="Cover-Heading1">AAGAAZ</h1>
                    <h2 className="Cover-Heading2">The Music Society of BVCOE</h2>
                    {/* <Button text="Discover!" background="#fff" color="#777" link="#" /> */}
                    <Button text="Discover!" background="#00203FFF" color="#ADEFD1FF" link="#About-Main" />
                </div>

            </div>
        );
    }
}

export default Cover;
