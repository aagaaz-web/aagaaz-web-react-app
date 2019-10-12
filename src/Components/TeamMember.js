import React, {Component} from 'react';

import './TeamMember.css';


const IMAGE_LOCATION = "https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1570608912/Executive%20Team%20Images/";

class TeamMember extends Component
{
    render() {

        let imgSrc = 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_960_720.png';

        // console.log(imgSrc);

        return(

            <div className="TeamMember">

                {/* <img class="TeamMember-BackgroundImage" src="https://cdn5.vectorstock.com/i/1000x1000/61/59/background-with-acoustic-guitar-vector-1776159.jpg" /> */}
                
                <img id="TeamMember-ProfileImage" src= {imgSrc} height="100" width="100" />
                
                <h2>{this.props.name}</h2>

                <h3>{this.props.designation}</h3>

                <div className="TeamMember-SocialMedia">
                    
                    <a className="TeamMember-SocialMedia-Icons-Links" href={this.props.email}>
                        <i id="Email-Icon" class="TeamMember-SocialMedia-Icons fas fa-envelope fa-2x"></i>
                    </a>

                    <a className="TeamMember-SocialMedia-Icons-Links" href={this.props.facebook}>
                        <i id="Facebook-Icon" class="TeamMember-SocialMedia-Icons fa-icon fab fa-facebook-square fa-2x" ></i>
                    </a>

                    <a className="TeamMember-SocialMedia-Icons-Links" href={this.props.instagram}>
                        <i id="Instagram-Icon" class="TeamMember-SocialMedia-Icons fa-icon fab fa-instagram fa-2x" ></i>
                    </a>

                    <a className="TeamMember-SocialMedia-Icons-Links" href={this.props.tel}>
                        <i id="Telephone-Icon" class="TeamMember-SocialMedia-Icons fa-icon fa fa-phone fa-2x"></i>
                    </a>

                </div>


            </div>
        );
    }
}

export default TeamMember;