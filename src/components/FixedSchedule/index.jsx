import React from 'react';
import"./style.css";
import {useState} from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


function HourSlot({hourValue, isEditable}){
    //TODO: Move logic for isActive up to setHours
    const [isActive, setIsActive] = useState('true');

    useEffect(() =>{
        setIsActive(JSON.parse(window.localStorage.getItem('isActive')))
    }, []);

    useEffect(() => {
        window.localStorage.setItem('isActive', isActive);
    }, [isActive])


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
    const [className, setClassName] = useState(location.state?.className);
    const [bannerHeading, setBannerHeading] = useState(location.state?.title);
    const [bannerParagraph, setBannerParagraph] = useState(location.state?.subtitle);
    const [dialogOpen, setDialogOpen] = useState(false);



    function closeDialog(){
        setDialogOpen(false);
    }
    function closeDialogHandleSubmit(){
        setDialogOpen(false);
        setIsSubmitted(!isSubmitted);
        setClassName("submittedweekcontainer");
        setBannerHeading("Your Schedule is all set up!");
        setBannerParagraph("Push the edit button below your schedule to make changes");

    }

    console.log(location.state?.isSubmitted);

    function handleSubmit(){
        setIsSubmitted(!isSubmitted);
        setClassName("submittedweekcontainer");
    }

    function showWarning(){
        setDialogOpen(true);
    }

    console.log(`isSubmitted? ${isSubmitted}`)
    return(
        <div className={className}>

            <div className="daycontainer">
                <Day value="Monday" isEditable={!isSubmitted}/>
            </div>

            <div className="daycontainer">
                <Day value="Tuesday" isEditable={!isSubmitted}/>
            </div>            
            
            <div className="daycontainer">
                <Day value="Wednesday" isEditable={!isSubmitted}/>
            </div>            
            
            <div className="daycontainer">
                <Day value="Thursday" isEditable={!isSubmitted}/>
            </div>            
            
            <div className="daycontainer">
                <Day value="Friday" isEditable={!isSubmitted}/>
            </div>            
            
            <div className="daycontainer">
                <Day value="Saturday" isEditable={!isSubmitted}/>
            </div>            
            
            <div className="daycontainer">
                <Day value="Sunday" isEditable={!isSubmitted}/>
            </div>
           
            <div className="submitbuttoncontainer"
            style={{
                display: isSubmitted ? 'none' : ''
            }}>

         
                <button className="submitbutton"
                onClick={showWarning}>
                    Submit
                </button>
                <p>This will save changes, but you can always edit your schedule again</p>
            </div>




            <div className="promptcontainer submittedweekcontainer"
            style={{
                display: isSubmitted ? '' : 'none'
            }}>
                    <h1>Your prompts will appear here!</h1>

                <Link         
                state={{
                title:"Customize your Schedule",
                subtitle:"Click hour slots to toggle availability (green=on, grey=off). Click the corner buttons to toggle entire days (plus turns on, x turns off).",
                isSubmitted: false,
                className: "weekcontainer"
                }}>
                    <button className="editschedulebutton"
                        onClick={handleSubmit}>
                        Edit Schedule
                    </button>
                </Link>

            </div>

            <div className="warningdialog"
                style={{
                    display: dialogOpen? '' : 'none'
                }}>
           
                    <h1>
                        Are you sure you want to submit?
                    </h1>
                    <p>
                        If you change your mind, you'll still have the option to edit your schedule again.
                    </p>
                <div className="buttonwrapper">
           
                        <button  onClick={closeDialog}>Cancel</button>
  
                        <Link         
                            state={{
                            title:"Your schedule is all set up!",
                            subtitle:"Push the edit button below your schedule to make changes.",
                            isSubmitted: false,
                            className: "warningdialogbutton"
                            }}>
                                <button  onClick={closeDialogHandleSubmit}>Submit</button>
                        </Link>
                    
  
                </div>

          
            </div>
        </div>   
    );
}

