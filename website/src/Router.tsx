import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import AboutMe from './components/AboutMe';


interface RouterProps {
}

const SiteRouter: React.SFC<RouterProps> = (props) => {
    return(
    <Router>
        <div>  
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/AboutMe" component={AboutMe} />
        </div>
    </Router>);
}

export default SiteRouter