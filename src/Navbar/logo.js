import React from 'react';

import logo from './lotus.png';

const Logo = () => {
    return (
        <div className='logo_container' >
            <img src={logo} alt="Logo" height="150" />
        </div>
    );
};

export default Logo;