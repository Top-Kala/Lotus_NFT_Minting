import React, { useState } from 'react';
import { Container, Navbar } from "react-bootstrap";
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
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

function Header() {
    return (
        <div>
            <Navbar expand="xxl" className='white' sticky="top">
                <Container className='nav_container'>
                    <Navbar.Brand ><Logo /></Navbar.Brand>
                    <Navbar className='nav-item nav-link text-white justify-content-end'>
                        <Navbar className='nav-link nav_para'>ABOUT KYC CONTACT MARKETPLACE</Navbar>
                        <Button className='nab_button' variant="contained">CONNECT WALLET</Button>
                    </Navbar>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;