import React, {Component} from 'react';

import $ from 'jquery';

import Button from './Button';

import './Cover.css';

// const COVER_IMAGE = 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574514272/Assets/cover.jpg';

class Cover extends Component
{
    componentDidMount()
    {
        $('.Button-Link').on('click', function(event) {
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
            <div id="Cover-Main" className="Cover">
                <div className="Cover-Heading">
                    <h1 className="Cover-Heading1">AAGAAZ</h1>
                    <h2 className="Cover-Heading2">The Music Society of BVCOE</h2>
                    <Button text="Discover!" background="#00203FFF" color="#ADEFD1FF" link="#About-Main" />
                </div>

            </div>
        );
    }
}

export default Cover;
