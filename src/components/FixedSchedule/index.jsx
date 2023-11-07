import React from 'react';
import"./style.css";
import {useState} from 'react';
import { useLocation } from 'react-router';

function HourSlot({hourValue, isEditable}){
    //TODO: Move logic for isActive up to setHours
    const [isActive, setIsActive] = useState('true');
    function handleClick(){
        if(isEditable){
            setIsActive(!isActive);
        }
    }
   


    return (
        <div 
            className="hourslot"
            
             style={{
                 backgroundColor: isActive? '' : 'rgba(128, 128, 128, 0.336)',
                 color: isActive? '' : 'rgba(128, 128, 128, 0.377)',
                 border: isActive? '' : '1px solid rgba(128, 128, 128, 0.247)',
             }}
             onClick={handleClick}
            >
            {hourValue}
        </div>
    );
}

//No Dependencies
function setHours(){
    let hours = [];
    for(let i = 1; i <24; i++){
        i > 12 ? hours[i] = `${i-12}:00 PM` : hours[i] = `${i}:00 AM`;
    }
    hours[0] = "12:00 AM";
    hours[12] = "12:00 PM";
    return hours;
}
//Depends on setHours
function initHourSlots(isEditable){
    const hours = setHours();
    const hourSlots = [];
    for(let i=0; i<hours.length; i++){
        hourSlots.push(<HourSlot isEditable={isEditable} hourValue={hours[i]}/>) 
    }
    return hourSlots;
}

//Depends on initHourSlots --> setHours
function Day({value, isEditable}){
    const [isActive, setIsActive] = useState('true');
    
    function toggleDay() {
        if(isEditable){
            setIsActive(!isActive);
        }
    }
    console.log(`isEditable? ${isEditable}`)
  
    return(
        <div className="dayslot"
        style={{
            boxShadow: isActive ? '' : 'none',
        }}>
            <div className="dayheader"
            style={{
                backgroundColor:isActive ? '' : '#33344e',
                backgroundImage:isActive? '' : 'none',
                boxShadow:isActive ? '' : 'none',
            
            }}>
                <h3 className="dayname">{value}</h3>
                <button 
                    className="closebutton"
                    style={{
                        display:isEditable ? '' : 'none',
                        backgroundImage:isActive ? '' : 'none',
                        boxShadow: isActive ? '' : 'none',
                        backgroundColor: isActive ? '' : 'inherit',
                    }}
                    onClick={toggleDay}>
                        {isActive? "X" : "+"}
                </button>
            </div>
            <div
            style={{
                display:isActive? '' : 'none'
            }}>
                {initHourSlots(isEditable)}
            </div>
        </div>
    );
}

export default function EditSchedule() {
    const location = useLocation();
    const [isSubmitted, setIsSubmitted] = useState(location.state?.isSubmitted);
    const [className, setClassName] = useState("weekcontainer");
    console.log(location.state?.isSubmitted);
    

    function handleSubmit(){
        setIsSubmitted(!isSubmitted);
        setClassName("submittedweekcontainer");
        console.log(className);
    }
    console.log(`isSubmitted? ${isSubmitted}`)
    return(
        <div className={className}>

            <div classname="daycontainer">
                <Day value="Monday" isEditable={!isSubmitted}/>
            </div>

            <div classname="daycontainer">
                <Day value="Tuesday" isEditable={!isSubmitted}/>
            </div>            
            
            <div classname="daycontainer">
                <Day value="Wednesday" isEditable={!isSubmitted}/>
            </div>            
            
            <div classname="daycontainer">
                <Day value="Thursday" isEditable={!isSubmitted}/>
            </div>            
            
            <div classname="daycontainer">
                <Day value="Friday" isEditable={!isSubmitted}/>
            </div>            
            
            <div classname="daycontainer">
                <Day value="Saturday" isEditable={!isSubmitted}/>
            </div>            
            
            <div classname="daycontainer">
                <Day value="Sunday" isEditable={!isSubmitted}/>
            </div>
           
    
            <button classname="submitbutton"
            onClick={handleSubmit}
            style={{
                display: isSubmitted ? 'none' : '',
            }}>
                Submit
            </button>

            <div className="promptcontainer submittedweekcontainer"
            style={{
                display: isSubmitted ? '' : 'none'
            }}>
                    <h1>Your prompts will appear here!</h1>
            </div>
     
            
            
        </div>
    );
}