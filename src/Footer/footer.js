import React from 'react';
import facebook from "../assets/images/icon/fb.svg";
import discord from "../assets/images/icon/discord.svg";
import twitter from "../assets/images/icon/twitter.svg";
import telegram from "../assets/images/icon/telegram.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';

function FooterPart() {
    return (
        <div>
            <footer className='footer_container'>
                <img src={discord} alt='discord' />
                <img src={telegram} alt='telegram' />
                <img src={twitter} alt='twitter' />
                <img src={facebook} className='facebookicon' alt='facebook' />
            </footer>
        </div>
    )

}

export default FooterPart;