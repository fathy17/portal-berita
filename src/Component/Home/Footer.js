import React from 'react';


const Footer = () => {
    return (
        <div style={{
            position: 'relative',
            left: '0',
            bottom: '0',
            width: '100%',
            backgroundColor: '#293462',
            color: 'white',
            display: 'flex',
            height: '100px',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{textAlign:'center'}}>
                <h1 style={{fontSize:'24px', fontWeight:'bold'}}>eksposesulsel</h1>
                <p style={{fontSize:'12px', fontWeight:'bold'}}>2019 eksposesulsel.com - ALL RIGHT RESERVED</p>
            </div>
        </div>
    );
}

export default Footer;