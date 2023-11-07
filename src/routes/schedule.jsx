import React from 'react';
import FixedSchedule from '../components/FixedSchedule';
import {useState} from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const SchedulePage = () => {
  const[isHidden, setIsHidden] = useState(false);

  function hideLink(){
    setIsHidden(true);
  }


    return (
      <div>

        <Link
          to="/start"
          state={{
              title: "Let's Set Your Schedule",
              subtitle: "Choose between a default schedule(one prompt per day) or a custom one that lets you choose the days and hours of the day when you receive prompts."
          }}
          style={{
            display: isHidden ? 'none' : '',
          }}>
              <button
                className="backbutton" 
                onClick={hideLink}>Go Back!</button>
        </Link>

        <FixedSchedule/>
      </div>
    );
};
 
export default SchedulePage;