import React from 'react';
import Button from '../components/Button';
import {Link} from 'react-router-dom';


 const Start = () => {
   
    return (      
        <div>
            <div class="button-container">
            <Link 
                to ="/schedule"
                
                state={{
                title:"Get Started",
                subtitle:"Get Prompts once per day or create a custom schedule",
                isSubmitted: true,
                className: "submittedweekcontainer"
                }}>
              <Button> Default Schedule </Button>
            </Link>
            <Link 
                to ="/schedule" 
                state={{
                title:"Get Started",
                subtitle:"Get Prompts once per day or create a custom schedule",
                isSubmitted: false,
                className: "submittedweekcontainer"
                }}>
                <Button>Custom Schedule</Button>

            </Link>
            </div>
        </div>
    );
};


export default Start;

