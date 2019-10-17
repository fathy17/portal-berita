import React from 'react';
import { Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Search from './Search';
import BeritaContextProvider from '../../Store/BeritaContext';

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
                <BeritaContextProvider>
                    <Search />
                </BeritaContextProvider>
            </Toolbar>
        </div>
    );
}

export default Navigation;