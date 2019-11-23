import React, {Component} from 'react';

import './Team.css';
import TeamMember from './TeamMember';


const QUESTION_MARK_IMAGE = "https://savoryconceptsllc.com/wp-content/uploads/2016/05/question-mark-png-5a381257a89243.6425987715136241516905-1.jpg";

const images = {

    VanditaSharma: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574536853/Executive%20Team%20Images/upsgx7gf3imaolkqzntm.png',

    NitinJayant: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1570608912/Executive%20Team%20Images/2019-2020/nitin_jayant.jpg',
    AkashKaushal: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513098/Executive%20Team%20Images/2019-2020/prvil6amiseqc3cslz01.png',
    Jyotika: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513102/Executive%20Team%20Images/2019-2020/igc9thuceoao2gtzsiyq.png',
    EeshaGupta: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513103/Executive%20Team%20Images/2019-2020/patfyz4dxyh2czfu5bcj.png',
    Prerna: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513105/Executive%20Team%20Images/2019-2020/z60k897qtejnzinw53r8.png',
    Sahil: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513105/Executive%20Team%20Images/2019-2020/cqoefhyw8kxfyw9ni09u.png',
    Tarun: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513106/Executive%20Team%20Images/2019-2020/wywn71kvdwjknxnpf39o.png',
    AdityaSaxena: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513106/Executive%20Team%20Images/2019-2020/mxb6hzqxarrlldsnsesd.png',
    ShivangiRoy: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513108/Executive%20Team%20Images/2019-2020/ckydcwxbpqvnzh6zwb4e.png',
    SarthakMishra: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513109/Executive%20Team%20Images/2019-2020/pid0w1zdkjg3rkgkd9od.png',
    Ratan: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513109/Executive%20Team%20Images/2019-2020/kw11rpzjmxpyvp9jkr3a.png',
    Varun: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513110/Executive%20Team%20Images/2019-2020/loeg4zwu2mpwrkg2ork9.png',
    Naman: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513110/Executive%20Team%20Images/2019-2020/rvd2brnophsetwrvoq9j.png',
    Veeral: 'https://res.cloudinary.com/aagaaz-bvcoe/image/upload/v1574513111/Executive%20Team%20Images/2019-2020/hwxkg1idd1vx3vwhhejw.png',
}


class Team extends Component
{

    render() {

        
        return(
            <div id="Team-Main" className="Team">

                <h1 className="Section-Heading">Our Team</h1>
                
                <div className="Team-Heads">

                    <h1>Heads</h1>

                    <div className="Team-Heads-Cards">

                        <TeamMember image={images.VanditaSharma} name="Vandita Sharma" designation="Society Mentor" phone="#" instagram="#" facebook="#" email="#" />
                        <TeamMember image={images.AkashKaushal} name="Akash Kaushal" designation="Soceity Head" phone="7289901886" instagram="akash_kaushal453/" facebook="akashkaushal453/" email="akashkaushal544@gmail.com" />

                    </div>

                </div>

                {/* <div className="Team-CoreTeam">

                    <h1>Core Team</h1>

                    <div className="Team-CoreTeam-Cards">

                        <TeamMember image="nitin_jayant" name="Nitin Jayant" designation="Web Executive, Technical Music" email="thenitinjayant@gmail.com" instagram="https://www.instagram.com/TheNitinJayant" facebook="https://www.facebook.com/TheNitinJayant" tel="tel: 9997180390"/>
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />
                        <TeamMember image="photo_low" name="Nitin" designation="Web Executive" />

                    </div>

                </div> */}

                
                <div className="Team-ExTeam">

                    <h1>Executive Team</h1>

                    <div className="Team-ExTeam-Cards">

                        <TeamMember image={images.NitinJayant} name="Nitin Jayant" designation="Web Executive, Technical Music Head" phone="9997180390" instagram="thenitinjayant" facebook="thenitinjayant" email="thenitinjayant@gmail.com" />
                        <TeamMember image={images.AdityaSaxena} name="Aditya Saxena"  designation="Technical Music Team" email="aditya.saxena33@gmail.com" phone="9717556425" instagram="jay027__" facebook="aditya.saxena.925" />
                        <TeamMember image={images.EeshaGupta} name="Eesha Gupta" designation="Social Media Head" phone="9643308996" instagram="Eesha__guptat" facebook="eesha.gupta.77" email="Gupta.eesha10@gmail.com" />
                        <TeamMember image={images.Sahil} name="Sahil Ganguly"  designation="Social Media Executive" email="sahilshubhamganguly@gmail.com" phone="7042243169" instagram="sahhuehuel" facebook="sahil.ganguly.7"  />
                        <TeamMember image={images.Veeral} name="Veeral Sharma"  designation="Social Media Executive" email="veeralsharma0001@gmail.com" phone="9599402877" instagram="veeralsharma" facebook="veeral.sharma.0"  />
                        <TeamMember image={images.Naman} name="Naman Kaushik"  designation="Documentation Team" email="namankaushikplt@gmail.com" phone="8700369581" instagram="#" facebook="#" />
                        <TeamMember image={QUESTION_MARK_IMAGE} name="SHRESHTH KHANDELWAL"  designation="Design Team Head" email="shreshthkhandelwal30@gmail.com" phone="8130660940" instagram="__shreshth3009/" facebook="shreshth.khandelwal.9" />
                        <TeamMember image={images.Prerna} name="Prerna Arya"  designation="Design Team, Sponsorship Team" email="aryaprerna23@gmail.com" phone="9354129489" instagram="aryaprerna23" facebook="#" />
                        {/* <TeamMember image={QUESTION_MARK_IMAGE} name="Ish Takkar"  designation="Documentation Team" email="ishtakkar21@gmail.com" phone="8800335270" instagram="ish.takkar" facebook="ish.takkar" /> */}
                        {/* <TeamMember image="photo_low" name="Tarun Sharma"  designation="Team Member" email="9873910132hello@gmail.com" phone="9873910132" instagram="tarun_sharma007ts" facebook="#" /> */}
                        <TeamMember image={images.Varun} name="Varun Chopra"  designation="Teaching Head" email="varun.chopraa06@gmail.com" phone="9990130785" instagram="varun_chopraa" facebook="#" />
                        <TeamMember image={images.ShivangiRoy} name="Shivangi Roy"  designation="Publications Head" email="shivangi22.sr@gmail.com" phone="9971180205" instagram="shivangi_022" facebook="#" />
                        <TeamMember image={QUESTION_MARK_IMAGE} name="Kushagra Kapoor"  designation="Band Head" email="kushagra.kapoor2012@gmail.com" phone="9717498842" instagram="kushagrakapoor" facebook="kushagra.kapoor.161" />
                        <TeamMember image={images.SarthakMishra} name="Sarthak Mishra"  designation="Classical Head" email="sarthakkmishraa@gmail.com" phone="9560507126" instagram="jeevannmusic" facebook="#" />
                        <TeamMember image={images.Jyotika} name="Jyotika Bhati"  designation="Event Management Head" email="jyotika2810@gmail.com" phone="9560507126" instagram="jyotikabhati_" facebook="jyotikabhati28" />
                        <TeamMember image={images.Ratan} name="Ratan Gupta"  designation="Western Music Head" email="ratan10@outlook.com" phone="8527563731" instagram="#" facebook="#" />

                    </div>

                </div>

            </div>
        );
    }
}

export default Team;