import React from 'react';
import { Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <Toolbar className='tags' style={{ padding: '0' }}>
                <Link to='/tags/Sosial' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>SOSIAL</h4>
                </Link>
                <Link to='/tags/Politik' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>POLITIK</h4>
                </Link>
                <Link to='/tags/Kriminal' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>KRIMINAL</h4>
                </Link>
                <Link to='/tags/olahraga' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>OLAHRAGA</h4>
                </Link>
                <Link to='/tags/Daerah' style={{ textDecoration: 'none' }}>
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>DAERAH</h4>
                </Link>
                <form >
                    <input type="text" style={{ height: '17px', fontSize: '12px' }}></input>
                    <button type="submit" style={{ fontFamily: 'Montserrat', fontSize: '12px', fontWeight: 'bold', height: '23px' }}>CARI</button>
                </form>
            </Toolbar>
        </div>
    );
}

export default Navigation;