import React from "react";
import {Link} from "react-router-dom";
import Button from '../components/Button';

const LandingPage = () => {
    return(
        <Link 
        to ="/start" 
        state={{
          title:"Get Started",
          subtitle:"Get Prompts once per day or create a custom schedule"
        }}>
              <Button> Get Started </Button>
        </Link>
    );
}

export default LandingPage;