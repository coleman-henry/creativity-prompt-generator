import React from 'react';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import './style.css'


 const Start = () => {
   
    return (      
        <div>
            <div class="button-container">

                <div class="button-wrapper">
                    <Link 
                        to ="/schedule"  
                        state={{
                        title:"Your schedule is all set up!",
                        subtitle:"Push the edit button below your schedule to make changes.",
                        isSubmitted: true,
                        className: "submittedweekcontainer"
                        }}>
                    <Button> Default Schedule </Button>
                    </Link>
                    <p class="cost-benefit">Quick and easy, but prompts may come at times that don't work for you</p>
                </div>

                <div class="button-wrapper">
                    <Link 
                        to ="/schedule" 
                        state={{
                            title:"Customize your schedule",
                            subtitle:"Click hour slots to toggle availability (green=on, grey=off). Click the corner buttons to toggle entire days (plus turns on, x turns off).",
                            isSubmitted: false,
                            className: "weekcontainer"
                        }}>
                        <Button>Custom Schedule</Button>
                    </Link>
                    <p class="cost-benefit">Gives full control over your schedule, but requires more time to set up</p>
                </div>

            </div>
        </div>
    );
};


export default Start;

