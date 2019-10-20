import React, { Fragment, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useScrollTrigger, Slide, makeStyles, SwipeableDrawer } from '@material-ui/core';
import Navigation from './Navigation';
import Logo from '../Assets/es-logo-web.png'

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
        width:'70%'
    }
});

const Navbar = (props) => {
    const [tags]=useState([
        "Daerah", "Ekobis", "Hukum Kriminal", "Nasional", "Peristiwa", "Politik", "Ragam", "Sport", "Teknologi"
    ])

    const [logo, setLogo]=useState("logo")

    useEffect(()=>{
        setOpen(false)
    },[])
    
    const [open, setOpen] = useState(false)
    const toogleDrawer = () => {
        setOpen(!open)
        setLogo("logo-off")
    }

    const onClose = () => {
        setLogo("logo")
        setOpen(!open)
    }
    const styles = useStyles();

    return (
        <Fragment>
            <SwipeableDrawer style={{width:'100%'}} anchor="left" open={open} classes={{ paper: styles.paper }} onClose={onClose} onOpen={toogleDrawer}>
                    <div style={{ width: '100%', height: '100%', margin: '20px 0 0 20px', zIndex:'11' }}>
                        <div className="logo nav">
                        <Link to='/' style={{ textDecoration: 'none' }} onClick={onClose}>
                            <div className="logoMobile nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Logo} alt="Logo" style={{ height: '40px', width: '37px', marginRight: '15px' }} />
                                <h2 style={{ fontSize: '24px', lineHeight: '17px' }}>EKSPOSE SULSEL</h2>
                            </div>
                        </Link>
                        </div>
                        <div style={{marginTop:'45px', width:'100%'}}>
                        <hr style={{marginRight:'40px'}}/>
                        {tags.map(tag=>{
                            return (
                                <Link key={tag} to={`/tags/${tag}`} style={{ textTransform:'uppercase',textDecoration: 'none', color: 'white' }} onClick={onClose}><h3 style={{fontSize:'16px'}}>{tag}</h3></Link>
                            )
                        })}
                        </div>
                    </div>
            </SwipeableDrawer>
            <HideOnScroll {...props}>
                <div className="container">
                    <div className='ham-icon' onClick={toogleDrawer}>
                        <FaBars style={{ color: 'white' }} />
                    </div>
                    <div className={logo}>
                        <Link to='/' style={{ textDecoration: 'none' }} onClick={() => setOpen(false)}>
                            <div className="logoMobile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Logo} alt="Logo" style={{ height: '40px', width: '37px', marginRight: '15px' }} />
                                <h2 style={{ fontSize: '24px', lineHeight: '17px' }}>EKSPOSE SULSEL</h2>
                            </div>
                        </Link>
                    </div>
                    <Navigation />
                </div>
            </HideOnScroll>
        </Fragment>
    );
}

export default Navbar;