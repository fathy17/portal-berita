import React from 'react';
import { Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="navigation">
            <Toolbar className='tags' style={{ padding: '0' }}>
                <h4 style={{ marginRight: '20px', fontSize: '12px', color:'white' }}>SOSIAL</h4>
                <h4 style={{ marginRight: '20px', fontSize: '12px', color:'white' }}>POLITIK</h4>
                <h4 style={{ marginRight: '20px', fontSize: '12px', color:'white' }}>KRIMINAL</h4>
                <Link to='/tags/565' style={{ textDecoration: 'none', color: 'black' }}><h4 style={{ marginRight: '20px', fontSize: '12px', color:'white' }}>OLAHRAGA</h4></Link>
                <h4 style={{ marginRight: '20px', fontSize: '12px', color:'white' }}>DAERAH</h4>
                <form >
                    <input type="text" style={{ height: '17px', fontSize: '12px' }}></input>
                    <button type="submit" style={{ fontFamily: 'Montserrat', fontSize: '12px', fontWeight: 'bold', height: '23px' }}>CARI</button>
                </form>
            </Toolbar>
        </div>
    );
}

export default Navigation;