import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation(); // get current location
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
        // check location and set selected value accordingly
        if (location.pathname === "/") {
            setValue(0);
        } else if (location.pathname === "/skills") {
            setValue(1);
        } else if (location.pathname === "/portfolio") {
            setValue(2);
        } else if (location.pathname === "/contact") {
            setValue(3);
        }
    }, [location.pathname]);

    const handleNavigation = (path) => {
        navigate(path);
    };


    return (
        <header>
            <code>&lt; Junhui Wen /&gt;</code>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div id="toggle">
                    <section id="icon"
                        style={{ position: "relative", float: "right", height: "19px", width: "50px", paddingRight: "15px" }}
                    >
                        <span id="top-line"></span>
                        <span id="mid-line"></span>
                        <span id="bot-line"></span>
                    </section>
                </div>
                <Box>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Home" id={"nav_home"} onClick={() => handleNavigation('/')} />
                        <BottomNavigationAction label="Skills" id={"nav_skills"} onClick={() => handleNavigation('/skills')} />
                        <BottomNavigationAction label="Portfolio" id={"nav_portfolio"} onClick={() => handleNavigation('/portfolio')} />
                        <BottomNavigationAction label="Contact" id={"nav_contact"} onClick={() => handleNavigation('/contact')}/>
                    </BottomNavigation>
                </Box>
            </div>
        </header>
    );
};

export default Header;
