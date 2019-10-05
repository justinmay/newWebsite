import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import Me from '../assets/pictures/aboutMe.jpg';
import highFive from '../assets/lotties/highfive.json';
import "./TypeText.css";
import "../stylesheets/AboutMe.css";

type AboutMeProps =  {
    text: string,
}

type AboutMeState = {
}

class AboutMe extends React.Component<AboutMeProps,AboutMeState> {
    constructor(props: AboutMeProps) {
        super(props)
        this.state = {
        }  
    }

    render() {

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: highFive,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };

        return(
            <div>
                <div style={{position:"absolute",height:"100vh",width:"100vw",display:"flex"}}>
                    <div className="picContainer">
                        <img src={Me} className="pic" alt="me"/>
                        <div className="links">
                            <Link to='/Home'>
                                <button className="button">
                                    Home
                                </button>
                            </Link>
                            <button className="button">
                                Portfolio
                            </button>
                            <button className="button">
                                Work Experience
                            </button>
                            <button className="button">
                                Blog
                            </button>
                            <button className="button">
                                Photography
                            </button>
                        </div>
                    </div>
                    <div className="infoContainer">
                        <h1 className="title"> Justin May</h1>
                        <div className="description">
                        I am a senior at Rutgers - New Brunswick studying Electrical and Computer Engineering 
                        and Computer Science. I strongly believe in using compassion and kindness 
                        to better identify and solve the suffering of those around us. I believe that we can ultimately use technology
                         for the greater good. I'm a sucker for good UX. 
                          In my free time, I love photography, Model UN, longboarding, and reading.
                        </div>
                    </div>
                </div>
                <div className="lottieContainer">
                    <Lottie options={defaultOptions}
                        height={300}
                        width={300}
                    />
                </div>
            </div>
        )
    }
}

export default AboutMe;