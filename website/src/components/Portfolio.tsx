import React from 'react';
import "./TypeText.css";
import "../stylesheets/Portfolio.css";
import Project from './Project';
import {Link} from 'react-router-dom';

import circuit from '../assets/pictures/EEG/circuit.png';
import robot from '../assets/pictures/EEG/robot.png';
import poster from '../assets/pictures/EEG/poster.png';
import bitcamp1 from '../assets/pictures/bitcamp/pic.jpg';
import bitcamp2 from '../assets/pictures/bitcamp/pic2.jpg';
import split1 from '../assets/pictures/split/split1.png';
import split2 from '../assets/pictures/split/split2.png';
import split3 from '../assets/pictures/split/split3.png';
import p1 from '../assets/pictures/pennapps/p1.png';
import p2 from '../assets/pictures/pennapps/p2.png';
import p3 from '../assets/pictures/pennapps/p3.png';
import a1 from  '../assets/pictures/arbender/a1.png';

type PortfolioProps =  {
}

type PortfolioState = {
}

class Portfolio extends React.Component<PortfolioProps,PortfolioState> {
    constructor(props: PortfolioProps) {
        super(props)
        this.state = {
        }  
    }

    render() {
        return (
            <div style={{backgroundColor: "#999", width:"100vw",height:"100vh",overflow:"scroll"}}>
                <div className="FloatRight">
                    <div className="NavBar">
                        <Link to='/Home'>
                        <button className="NavBarLink">Home</button>
                        </Link>
                        <Link to='/AboutMe'>
                        <button className="NavBarLink">About Me</button>
                        </Link>
                        <Link to='/Portfolio'>
                        <button className="NavBarLink">Projects</button>
                        </Link>
                        <Link to='/Blog'>
                        <button className="NavBarLink">Blog</button>
                        </Link>
                        <Link to='/Photography'>
                        <button className="NavBarLink">Photos</button>
                        </Link>
                    </div>
                </div>
                <div className="projectTemp">
                    <Project 
                    title="Smart Robot Navigation with Computer Vision and EEG Control"
                    pics={[poster,circuit,robot]}
                    body="Developed and Designed an Arduino/Pi controlled smart robot with a team of electrical and mechanical engineering students. Built a brain waveform reader (EEG), that interprets a user’s occipital lobe waveform. Blinks are interpreted by a Python script from the EEG to actions taken by the robot to retrieve a ball over a local network."
                    />
                </div>
                <div style={{width:"100vw",height:"100vh",backgroundColor:"#999",position:"relative"}}>
                    <div className="quote">
                    <Project 
                        title="Running in the 90s: PennApps XVIII Top 10 Hack"
                        pics={[p1,p2,p3]}
                        devpost="https://devpost.com/software/running-into-the-90s"
                        video="https://youtu.be/cTh3Q6a2OIM"
                        github="https://github.com/justinmay/symphonia"
                        body="This is an interactive game to learn simple piano mechanics by giving children a fun rewarding way to practice. Using a Midicontroller we map piano keys onto a keyboard, and use them as inputs. Chords and arpeggios correspond to actions on the screen. Users will press the keys on the piano to trigger in game actions. In game actions correspond to the music, so by the end of the level a player would've mastered the skills. For example, our finished level teaches chord progressions. Our demo level (found in the source code) teaches arpeggios."/>
    
                    </div>
                </div>
                <div style={{width:"100vw",height:"100vh",backgroundColor:"rgb(39, 39, 39)",position:"relative"}}>
                    <div className="quote2">
                        <Project 
                        title="Flow: HackUMD (BitCamp 2019) Best Moonshot Prize"
                        pics={[bitcamp1,bitcamp2]}
                        devpost="https://devpost.com/software/flow-k572np"
                        github="https://github.com/justinmay/bitcamp2018"
                        body="Our app controls the entire user experience as soon as they drive onto the stadium campus. Right off the bat, the app is used for parking validation and entering the premises: The user is then prompted through signs on the road to an optimal parking spot, avoiding all avoidable traffic. Once the user parks, the app memorizes where the user Parks and prompts the user to a Gate. From there, the user can find their seat, find food, find restrooms, or get live stat updates about the venue from the app."
                        />
                        </div>
                </div>
                <div style={{width:"100vw",height:"100vh",backgroundColor:"#999",position:"relative"}}>
                    <div className="quote">
                    <Project 
                        title="Spl-it: Hack Rutgers Fall 2019 Capital One Presents: Best Financial Hack and Best use of MongoDB Atlas"
                        pics={[split1,split2,split3]}
                        devpost="https://devpost.com/software/spl-it-lz1xuw"
                        github="https://github.com/justinmay/HackRuFall2019"
                        body="Once you sit down at a table, Spl-it pairs with the bluetooth beacon on the table, automatically recognizing where you're sitting. The waiter/waitress enters your order on their tablet. Once you're done, the table receives an automated, itemized, bill where you choose what you want to pay for. Spl-it automatically handles shared items, distributes multi-order items, and organizes payments."/>
                    
                    </div>
                </div>
                <div style={{width:"100vw",height:"100vh",backgroundColor:"rgb(39, 39, 39)",position:"relative"}}>
                    <div className="quote2">
                    <Project 
                    title="Avatar the Last AR Bender: PennApps XVIII Snapchat Award"
                    pics={[a1]}
                    devpost="https://devpost.com/software/agni-kai"
                    github="https://github.com/justinmay/PennAppsFall18"
                    body="Enter the Avatar state and play as Aang, the Avatar. Experience the power of the Avatar, manipulating water, earth, fire, and air in AR. Fight against enemies that will track your location. You can also take snapchats of your Avatar adventures with the click of a button and share it with all your friends! Compatible with all stereoscopic headsets. Clicking the z button will screencap the current VR overlay and prompt you to publish it to your snapchat story!"/>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio