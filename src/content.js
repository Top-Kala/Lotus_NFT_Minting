import React from 'react';
import Mainbody from './Body/body.js';
import Header from './Navbar/navbar.js';
import FooterPart from './Footer/footer.js';

function Content() {
    return (
        <div>
            <Header />
            <Mainbody />
            <FooterPart />
        </div>
    )
}

export default Content;