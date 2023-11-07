import React from 'react';
import { useLocation } from 'react-router';
import Button from '../components/Button';
import {Link} from 'react-router-dom';


 const Start = (props) => {
    const location = useLocation();
    const {title} = location.state;
    const {subtitle} = location.state;
    
    
    return (      
        <div>
            <div class="button-container">
            <Link 
                to ="/scheduleIsSet" 
                state={{
                title:"Get Started",
                subtitle:"Get Prompts once per day or create a custom schedule"
                }}>
              <Button> Default Schedule </Button>
            </Link>
                <Button>
                    Custom Schedule
                </Button>
            </div>
        </div>
    );
};


export default Start;

