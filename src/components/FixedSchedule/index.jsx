import React from 'react';
import"./style.css";
import {useState} from 'react';

function HourSlot(hourValue){
    //TODO: Move logic for isActive up to setHours
    const [isActive, setIsActive] = useState('true');
    function handleClick(){
        setIsActive(!isActive);
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
        console.log(i);
    }
    hours[0] = "12:00 AM";
    hours[12] = "12:00 PM";
    return hours;
}
//Depends on setHours
function initHourSlots(){
    const hours = setHours();
    const hourSlots = [];
    for(let i=0; i<hours.length; i++){
        hourSlots.push(HourSlot(hours[i]));
        console.log(hourSlots[i]);
    }
    return hourSlots;
}

//Depends on initHourSlots --> setHours
function Day({value}){
    const [isActive, setIsActive] = useState('true');
    function toggleDay() {
        setIsActive(!isActive);
    }
  
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
                {initHourSlots()}
            </div>
        </div>
    );
}

export default function EditSchedule() {
    return(
        <div className="weekcontainer">

            <div classname="daycontainer">
                <Day value="Monday"/>
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
            
        </div>
    );
}