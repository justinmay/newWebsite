import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from './Marker';
import {Link} from 'react-router-dom';
import './../stylesheets/WorkExperience.css';

type WelcomeProps =  {
}

type WelcomeState = {
    showSearch: boolean;
    currentInternship: string;
    center: any;
}

class WorkExperience extends React.Component<WelcomeProps,WelcomeState> {
    constructor(props: WelcomeProps) {
        super(props)
        this.state = {
            showSearch: false,
            currentInternship: "Microsoft",
            center: {
                lat: 47.6740,
                lng: -122.1215
            }
        }  
    }

    render() {

        const source = this.state.currentInternship === "Microsoft" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Building92microsoft.jpg/1599px-Building92microsoft.jpg" : 
            this.state.currentInternship === "SummitSync" ? "https://fitsmallbusiness.com/wp-content/uploads/2018/10/SummitSync-logo.png" :
            "https://www.fortmonmouthnj.com/wp-content/uploads/2014/11/2014AV59411-cropped3.jpg"
        return(
            <div style={{height:"100vh",width:"100vw"}}>
                <GoogleMap
                    bootstrapURLKeys={{ key:'AIzaSyD8VllIZxURpNW0tT-MD9EVqQR39ND4cWM' }}
                    center={this.state.center}
                    defaultZoom={11}
                >
                    <Marker
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        name="My Marker"
                        color="blue"
                    />
                </GoogleMap>
                <div className="experience">
                    <img className="image" src={source} alt="microsoft"/>
                    <h1 className="titlemap">{this.state.currentInternship}</h1>
                    <p className="text">
                        {this.state.currentInternship === "Microsoft" ? "I will be worked at Microsoft's HQ in Redmond this summer witht the Teams team! I am very excited." :
                        this.state.currentInternship === "SummitSync" ? "Worked as a summer data engineering intern. Worked primarily in python on on their in house software. Worked on social media scrapers, machine learning algorithims, and data processing. Summitsync is a startup based in Manhattan that is a meetings intelligence platform to power offline experiences for Sales & Marketing teams." :
                        "I worked at Commvault for two Summers converting the legacy legal documents over to a cloud based solution by doing data analysis and reading contracts. In addition, I performed adhoc projects on: sales force, Microsoft Visio in conjunction with a SQL server, and implementing in house apis."
                        }
                    </p>
                    <div className="listOfLinks">
                        <Link to='/Home'>
                        <button className="hotLink">Home</button>
                        </Link>
                        <Link to='/AboutMe'>
                        <button className="hotLink">About Me</button>
                        </Link>
                        <Link to='/Portfolio'>
                        <button className="hotLink">Projects</button>
                        </Link>
                        <Link to='/Blog'>
                        <button className="hotLink">Blog</button>
                        </Link>
                        <Link to='/Photography'>
                        <button className="hotLink">Photos</button>
                        </Link>
                    </div>
                </div>
                <div className="experiencePicker">
                    <button className="searchBar selected" onClick={() => {this.setState({showSearch: !this.state.showSearch})}}>
                        {this.state.currentInternship === "Microsoft" ? "Microsoft, Redmond WA, Summer Internship 2019 " :
                        this.state.currentInternship === "SummitSync" ? "SummitSync, Manhattan NYC, Summer Internship 2018" :
                        "Commvault, Tinton Falls NJ, Summer Internship 2016/ 2017"
                        }
                    </button>
                    { this.state.showSearch ? 
                    <button className="searchBar search" onClick={() => {this.setState({showSearch: false, currentInternship: "Microsoft", center: {lat: 47.6740,lng: -122.1215}})}}>
                        Microsoft, Redmond WA, Summer Internship 2019 
                    </button>
                    : null}
                    { this.state.showSearch ? 
                    <button className="searchBar search" onClick={() => {this.setState({showSearch: false, currentInternship: "SummitSync", center: {lat: 40.7622909,lng:-73.9772319}})}}>
                        SummitSync, Manhattan NYC, Summer Intenrship 2018 
                    </button>
                    : null}
                    { this.state.showSearch ? 
                    <button className="searchBar search" onClick={() => {this.setState({showSearch: false, currentInternship: "Commvault", center: {lat: 40.2999406,lng: -74.08433}})}}>
                        Commvault, Tinton Falls NJ, Summer Internship 2016/ 2017 
                    </button>
                    : null}
                </div>
            </div>
        )
    }
}

export default WorkExperience;