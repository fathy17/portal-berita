import React from 'react';
import { Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <Toolbar className='tags' style={{ padding: '0' }}>
                <Link to='/tags/Daerah' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>DAERAH</h4>
                </Link>
                <Link to='/tags/Ekobis' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>EKOBIS</h4>
                </Link>
                <Link to='/tags/HukumKriminal' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>HUKUM KRIMINAL</h4>
                </Link>
                <Link to='/tags/Nasional' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>NASIONAL</h4>
                </Link>
                <Link to='/tags/Peristiwa' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>PERISTIWA</h4>
                </Link>
                <Link to='/tags/Politik' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>POLITIK</h4>
                </Link>
                <Link to='/tags/Ragam' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>RAGAM</h4>
                </Link>
                <Link to='/tags/Sport' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>SPORT</h4>
                </Link>
                <Link to='/tags/Teknologi' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>TEKNOLOGI</h4>
                </Link>
                {/* <Search /> */}
            </Toolbar>
        </div>
    );
}

export default Navigation;