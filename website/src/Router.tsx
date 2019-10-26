import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Portfolio from './components/Portfolio';


interface RouterProps {
}

const SiteRouter: React.SFC<RouterProps> = (props) => {
    return(
    <Router>
        <div>  
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/WorkExperience" component={WorkExperience} />
          <Route exact path="/Portfolio" component={Portfolio} />
        </div>
    </Router>);
}

export default SiteRouter