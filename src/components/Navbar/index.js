import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
        <header className="App-header">
            {/* <div class="banner">
                <h1>Welcome to your Creative Exercise Prompt Generator!</h1>
                <p>We'll send prompts for fun creative exercises as often as you want.</p>
            </div> */}
            <Nav>
                <NavMenu>
                    <NavLink 
                        to={{pathname:"/start", 
                            state:
                            {
                            title:"Get Started",
                            subtitle:"Get Prompts once per day or create a custom schedule"
                            }
                        }}
                        activeStyle>
                            Start
                        </NavLink>
                    <NavLink to="/scheduleIsSet" activeStyle>
                            Schedule
                    </NavLink>
                </NavMenu>
            </Nav>
        </header>
        </>
    );
};
 
export default Navbar;
