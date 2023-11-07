import React from 'react';
import Button from '../components/Button';
import {Link} from 'react-router-dom';


 const Start = () => {
   
    return (      
        <div>
            <div class="button-container">
            <Link 
                to ="/scheduleIsSet"
                
                state={{
                title:"Get Started",
                subtitle:"Get Prompts once per day or create a custom schedule",
                isSubmitted: true,
                }}>
              <Button> Default Schedule </Button>
            </Link>
            <Link 
                to ="/scheduleIsSet" 
                state={{
                title:"Get Started",
                subtitle:"Get Prompts once per day or create a custom schedule",
                isSubmitted: false,
                }}>
                <Button>Custom Schedule</Button>

            </Link>
            </div>
        </div>
    );
};


export default Start;

