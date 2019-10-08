import React, {Component} from 'react';

import './SocialMedia.css';

class SocialMedia extends Component
{
    render() {
        return(

            <div className="SocialMedia">

                
                <a className="SocialMedia-Icons-Links" href="https://www.gmail.com/">
                    <i id="Email-Icon" class="SocialMedia-Icons fas fa-envelope fa-3x"></i>
                </a>

                <a className="SocialMedia-Icons-Links" href="https://www.facebook.com/">
                    <i id="Facebook-Icon" class="SocialMedia-Icons fa-icon fab fa-facebook-square fa-3x" ></i>
                </a>

                <a className="SocialMedia-Icons-Links" href="https://www.twitter.com">
                    <i id="Twitter-Icon" class="SocialMedia-Icons fa-icon fab fa-twitter-square fa-3x" ></i>
                </a>

                <a className="SocialMedia-Icons-Links" href="https://www.instagram.com/">
                    <i id="Instagram-Icon" class="SocialMedia-Icons fa-icon fab fa-instagram fa-3x" ></i>
                </a>

                <a className="SocialMedia-Icons-Links" href="tel: 8076989248">
                    <i id="Telephone-Icon" class="SocialMedia-Icons fa-icon fa fa-phone fa-3x"></i>
                </a>
                
            </div>
        );
    }
}

export default SocialMedia;
