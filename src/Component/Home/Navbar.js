import React, { useState, Fragment } from 'react';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useScrollTrigger, Slide, Drawer, makeStyles} from '@material-ui/core';
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
      color: 'white'
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
            <Drawer open={open} classes={{ paper: styles.paper }}>
                <div style={{width:'250px'}}>

                </div>
            </Drawer>
            <HideOnScroll {...props}>
                <div className="container">
                    <div className='ham-icon' onClick={toogleDrawer}>
                        <FaBars style={{ color: 'white' }} />
                    </div>
                    <div className="logo">
                        <Link to='/' style={{ textDecoration: 'none' }}><h2>eksposesulsel</h2></Link>
                    </div>
                    <Navigation />
                </div>
            </HideOnScroll>
        </Fragment>
    );
}

export default Navbar;