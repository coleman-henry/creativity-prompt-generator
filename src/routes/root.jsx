import React from "react";
import {Outlet} from 'react-router-dom';
import Banner from '../components/Banner';



const Root = (props) => {

    return (
      <div>
        <Banner 
          heading={props.title} 
          paragraph={props.subtitle}/>
          <Outlet/>
      </div>
    );
};

export default Root;