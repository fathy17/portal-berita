import React, { useState, Fragment } from 'react';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useScrollTrigger, Slide, Drawer, makeStyles } from '@material-ui/core';
import Navigation from './Navigation';

function HideOnScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles({
    paper: {
        background: '#293462',
        color: 'white',
        top: '50px'
    }
});

const Navbar = (props) => {

    const [open, setOpen] = useState(false)
    const toogleDrawer = () => {
        setOpen(!open)
    }

    const styles = useStyles();

    return (
        <Fragment>
            <Drawer anchor="top" open={open} classes={{ paper: styles.paper }}>
                <div>
                    <div style={{width:'100%', height:'100%', textAlign:'center', margin:'30px 0'}} onClick={toogleDrawer}>
                        <Link to="/tags/Sosial" style={{ textDecoration: 'none' , color:'white'}}><h3>SOSIAL</h3></Link>
                        <Link to="/tags/Politik" style={{ textDecoration: 'none' , color:'white'}}><h3>POLITIK</h3></Link>
                        <Link to="/tags/Kriminal" style={{ textDecoration: 'none' , color:'white'}}><h3>KRIMINAL</h3></Link>
                        <Link to="/tags/olahraga" style={{ textDecoration: 'none' , color:'white'}}><h3>OLAHRAGA</h3></Link>
                        <Link to="/tags/Daerah" style={{ textDecoration: 'none' , color:'white'}}><h3>DAERAH</h3></Link>
                    </div>
                </div>
            </Drawer>
            <HideOnScroll {...props}>
                <div className="container">
                    <div className='ham-icon' onClick={toogleDrawer}>
                        <FaBars style={{ color: 'white' }} />
                    </div>
                    <div className="logo">
                        <Link to='/' style={{ textDecoration: 'none' }} onClick={()=>setOpen(false)}><h2>eksposesulsel</h2></Link>
                    </div>
                    <Navigation />
                </div>
            </HideOnScroll>
        </Fragment>
    );
}

export default Navbar;