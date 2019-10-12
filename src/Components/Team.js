import React, {Component} from 'react';

import './Team.css';
import TeamMember from './TeamMember';



class Team extends Component
{

    render() {

        
        return(
            <div className="Team">

                <h1 className="Section-Heading">Our Team</h1>
                
                <div className="Team-CoreTeam">

                    <h1>Core Team</h1>

                    <div className="Team-CoreTeam-Cards">

                        <TeamMember image="nitin_jayant" name="Nitin" designation="Web Executive, Technical Music" email="thenitinjayant@gmail.com" instagram="https://www.instagram.com/TheNitinJayant" facebook="https://www.facebook.com/TheNitinJayant" tel="tel: 9997180390"/>
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />

                    </div>

                </div>

                
                <div className="Team-ExTeam">

                    <h1>Executive Team</h1>

                    <div className="Team-ExTeam-Cards">

                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />

                    </div>

                </div>

            </div>
        );
    }
}

export default Team;