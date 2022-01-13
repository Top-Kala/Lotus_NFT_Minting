import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import Button from '@mui/material/Button';
import 'react-pro-sidebar/dist/css/styles.css';
import './header.css';

const MenuItems = [
];


const Header = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)

    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    const [selectedItem, setSelectedItem] = useState();

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            <p>
                                {menuCollapse ? "swap" : "swap & wallet"}
                            </p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Button>ABOUT</Button>
                        <Button>KYC</Button>
                        <Button>CONTACT</Button>
                        <Button>MARKETPLACE</Button>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;