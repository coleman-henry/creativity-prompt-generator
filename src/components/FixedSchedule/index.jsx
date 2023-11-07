import React from 'react';
import"./style.css";
import {useState} from 'react';

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
    const [isSubmitted, setIsSubmitted] = useState("false");
    function handleSubmit(){
        setIsSubmitted(!isSubmitted);
    }
    console.log(`isSubmitted? ${isSubmitted}`)
    return(
        <div className="weekcontainer">

            <div classname="daycontainer">
                <Day value="Monday" isEditable={isSubmitted}/>
            </div>

            <div classname="daycontainer">
                <Day value="Tuesday"/>
            </div>            
            
            <div classname="daycontainer">
                <Day value="Wednesday"/>
            </div>            
            
            <div classname="daycontainer">
                <Day value="Thursday"/>
            </div>            
            
            <div classname="daycontainer">
                <Day value="Friday"/>
            </div>            
            
            <div classname="daycontainer">
                <Day value="Saturday"/>
            </div>            
            
            <div classname="daycontainer">
                <Day value="Sunday"/>
            </div>
           
    
            <button classname="submitbutton"
            onClick={handleSubmit}
            style={{
                display: isSubmitted ? '' : 'none',
            }}>
                Submit
            </button>
     
            
        </div>
    );
}