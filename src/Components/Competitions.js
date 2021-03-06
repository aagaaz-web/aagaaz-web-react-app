import React, {Component} from 'react';

import './Competitions.css';


const CompetitionsText = {

    para1: "The auditions were held as a two phased event in the month of August 2018 on 13th (Monday) and 16th (Thursday) to allow different batches from all years to participate in the same. The two phased auditions also served the purpose to students who didn’t clear the first phase to be invited for another shot in the second phase.",
    para2: 'While auditioning, judging was performed by a distinctive panel of 5 people from different expertise including instrumentals, Hindi genre songs and western genre songs. A critical analysis was performed using a multi-set of attributes recorded for each participant. Selection of participants was later referred to from the attributes and their corresponding ratings. More than 40 students from different branches and years took part in the auditions. There were exceptionally talented people who not only were passionate about music, but felt it as a way of living.',
    para3: 'The categories in which we took auditions were vocals and instrumental. In vocals the subcategories were Hindi (Classical, Folk) and Western. In instrumental category, the participants were allowed to play any instrument they want to play and Acoustic guitars were provided by the team as well.',
    para4: 'A total of 20 participants from the interview were selected to be a part of the new Aagaaz members along with 30 old members, constituting a total of 50 member society in the year 2018-19.',
}

class Competitions extends Component
{
    render() {
        return(
            <div id="Competitions-Main" className="Competitions">
                
                <h1 className="Section-Heading">
                    Competitions
                </h1>
            </div>
        );
    }
}

export default Competitions;
