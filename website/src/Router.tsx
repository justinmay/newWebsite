import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home'


interface RouterProps {
}

const SiteRouter: React.SFC<RouterProps> = (props) => {
    return(
    <Router>
        <div>  
          <Route exact path="/" component={Home} />
          <Route exact path="/Vineeth" component={Home} />
        </div>
    </Router>);
}

export default SiteRouter