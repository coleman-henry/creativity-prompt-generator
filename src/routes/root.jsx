import React from "react";
import {Outlet} from 'react-router-dom';
import Banner from '../components/Banner';
import { useLocation } from 'react-router';
import {useState} from 'react';
import {Link} from 'react-router-dom'


const Root = (props) => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState(false);
  console.log(location.state)
  const heading= location.state?.title;
  const paragraph= location.state?.subtitle;

  function hideLink(){
    setIsHidden(true);
  }
    return (
      <div>
        <Banner 
          heading={heading} 
          paragraph={paragraph}/>
        <Link
          to="/start"
          state={{
            title: "Let's Set Your Schedule",
            subtitle: "Choose between a default schedule(one prompt per day) or a custom one that lets you choose the days and hours of the day when you receive prompts."
          }}
          style={{
            display: isHidden ? 'none' : '',
          }}>
            <button onClick={hideLink}>
              Get Started! Click Here.
            </button>
        </Link>
          <Outlet/>
      </div>
    );
};

export default Root;