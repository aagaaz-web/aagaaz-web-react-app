import React, {Component} from 'react';

import './About.css';

import AboutImage from './AboutImage';


const AboutText = {

    para1: "We are the official and only Music Society of Bharati Vidyapeeth's College of Engineering, New Delhi. We are a group of like-minded people who share love and passion for music.",
    para2: 'We love to spend time with each other and fill ours’ and others’ lives with sweet melodies that stay with us forever.',
    para3: 'Jam Sessions and open mics we organize regularly help us spread our music and make up a day for ourselves too. It helps us and others to relax from the hefty schedule of college and get through the stressful days. There is a healthy environment in the society where everyone learns and grows together as a team. Also, people here tend to become good leaders and gain great personality skills due to the exposure people get here.',
    para4: 'The society is not limited to the college but performs at inter college-competitions too and has won at many of them. We have won competitions that are open for everyone as we participate in these events actively. Also, we are not here to be mistaken for a side-gig in college as some of the people from here, have and are making their careers in the music industry itself.',
    para5: 'It is a place where everyone has a role to play and everyone is equally important, we welcome everyone to this great place and enjoy the musical journey with us.',
}

class About extends Component
{
    render() {
        return(
            <div id="About-Main" className="About">
                
                <h1 className="Section-Heading">
                    About Us
                </h1>

                <div className="About-Container">

                    <div className="About-Container-Content">
                        <p> 
                            {AboutText.para1}
                        </p>
                        <p> 
                            {AboutText.para2}
                        </p>
                        <p> 
                            {AboutText.para3}
                        </p>
                        <p> 
                            {AboutText.para4}
                        </p>
                        <p> 
                            {AboutText.para5}
                        </p>
                    </div>

                    <div className="About-Container-Images">

                        <AboutImage image="https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1571152850/Showcase%20Photos/image1.jpg" />
                        <AboutImage image="https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1575794850/Showcase%20Photos/image2.jpg" />
                        <AboutImage image="https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1575794851/Showcase%20Photos/image3.jpg" />
                        <AboutImage image="https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1575794853/Showcase%20Photos/image4.jpg" />

                    </div>

                </div>
                
            </div>
        );
    }
}

export default About;
