import React from 'react';
import { ImFacebook } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

function FooterPart() {
    return (
        <div>
            <footer className='footer_container'>
                <ImFacebook color="white" className="iconsize" />
                <img  alt='telegram' />
                <img alt='twitter' />
                <img alt='facebook' />
            </footer>
        </div>
    )

}

export default FooterPart;