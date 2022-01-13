import React, { useState } from 'react';
import { Container, Navbar, Nav,  } from "react-bootstrap";
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react';
import Logo from './logo.js';
import '../style/style.css';

/* const Web3 = require("web3");

const ethEnabled = () => {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        return true;
    }
    return false;
}

const ConnectButton = () => {
    return (<Button onClick={ethEnabled} >CONNECT WALLET</Button>
    );
}; */

function Navigation() {
    const [visible, setVisible] = useState(false);
    const toogleSidebar = () => {
        setVisible(!visible);
    }
    return (
        <div>
            <Navbar expand="lg" sticky="top">
                <Container className='header'>
                    <Navbar.Brand ><Logo /></Navbar.Brand>
                    <div className='nav_container'>
                        <Navbar className='justify-content-end'>
                            <Nav className='navbar_button_container'>
                                <Nav.Link href="/">About</Nav.Link>
                                <Nav.Link href="/">KYC</Nav.Link>
                                <Nav.Link href="/">Contact</Nav.Link>
                                <Nav.Link href="/">Marketplace</Nav.Link>
                            </Nav>
                            <Button className='connect_button' variant="contained">CONNECT WALLET</Button>
                            <IconButton size="xxlarge" color="secondary" onClick={() => toogleSidebar()}>
                                <MenuIcon className='menuicon'/>
                            </IconButton>
                        </Navbar>
                    </div>
                </Container>
            </Navbar>

            <div className={visible? 'side side-show' : 'side hide'}>
                <Container>
                    <div className='sidebar_container'>
                        <IconButton color="secondary" onClick={() => toogleSidebar()}>
                            <CloseIcon className='cancelicon'/>
                        </IconButton>
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link href="/">KYC</Nav.Link>
                        <Nav.Link href="/">Contact</Nav.Link>
                        <Nav.Link href="/">Marketplace</Nav.Link>
                    </div>
                </Container>
            </div>

            <div className={visible ? 'cover cover-show' : 'cover hide'}></div>
        </div>
    )
}

export default Navigation;