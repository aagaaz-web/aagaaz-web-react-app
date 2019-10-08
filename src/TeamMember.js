import React, {Component} from 'react';

import './TeamMember.css';

const IMAGE_LOCATION = "./src/images/";

class TeamMember extends Component
{
    render() {

        let imgSrc = `${IMAGE_LOCATION}${this.props.image}.jpg`;
        console.log(imgSrc);

        return(


            <div className="TeamMember">
                
                <img src={imgSrc} height="100" width="100" />
                <h3>{this.props.name}</h3>
                <h3>{this.props.designation}</h3>

            </div>
        );
    }
}

export default TeamMember;