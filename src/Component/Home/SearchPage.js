import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios'
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const SearchPage = (props) => {
    const [item, setItem] = useState([])

    console.log(props)
    useEffect(() => {
        Axios.get(`/wp-json/wp/v2/berita?search=${props.match.params.id}`)
            .then(res => setItem(res.data))
            .catch(err => console.log(err))
    }, [props.match.params.id])

    console.log(item)
    if (item.length) {
        return (
            <Fragment>
                <Grid container spacing={3} style={{marginTop:'50px'}}>
                    <Grid item xs={12} sm={7}>
                        <div className="textMobile" style={{ display: 'flex', alignItems: 'center' }}>
                            <h2 style={{ margin: '15px', fontSize: '24px', letterSpacing: '0.1em', fontWeight: 'bold', color: '#293462' }}>HASIL PENCARIAN <h3 style={{fontSize:'24px', color:'#EC9B3B', letterSpacing:'0'}}>"{props.match.params.id}"</h3></h2>
                        </div>
                        {item.length ? (
                            <Fragment>
                                <Grid container spacing={3}>
                                    {item.map(data => {
                                        return (
                                            <Fragment key={data.id}>
                                                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="gMobile">
                                                    <Box className="boxMobile" style={{ backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }}>
                                                        <img src={data.acf.gambar} alt={data.title.rendered} style={{ objectFit: 'cover', backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }} />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                                    <Link to={`/berita/${data.id}`} style={{ textDecoration: 'none' }}>
                                                        <h2 style={{ marginTop: '10px', marginBottom: '10px', fontWeight: '600', fontSize: '18px', fontStyle: 'normal', color: '#293462' }}>{data.title.rendered}</h2>
                                                    </Link>
                                                    <h2 style={{ fontWeight: '600', fontSize: '12px', color: '#808080' }}>{data.acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{data.date}</Moment></h2>
                                                    <div>
                                                        <p style={{ fontSize: '12px', height: '50px' }} dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
                                                    </div>
                                                    {data.acf.tag.map(item => {
                                                        return (
                                                            <Fragment key={item}>
                                                                <Link to={`/tags/${item}`} style={{ textDecoration: 'none' }}><button style={{ width: '70px', height: '25px', backgroundColor: '#EC9B3B', fontSize: '9px', color: 'white', textTransform: 'uppercase', fontWeight: '600', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', marginTop: '5px' }}>{item}</button></Link>
                                                            </Fragment>
                                                        )
                                                    })}
                                                </Grid>
                                                <hr style={{ height: '2px', width: '100%', border: 'none', backgroundColor: 'grey' }} />
                                            </Fragment>
                                        )
                                    })}
                                </Grid>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                                    <button style={{
                                        width: '160px',
                                        height: '40px',
                                        fontSize: '18px',
                                        letterSpacing: '0.1em',
                                        fontWeight: 'bold',
                                        fontFamily: 'Montserrat',
                                        background: 'none',
                                        border: 'solid 1px black',
                                        margin: '10px',
                                        cursor: 'pointer',
                                    }}>LOAD MORE</button>
                                </div>
                            </Fragment>
                        ) : (
                                <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                                    <CircularProgress />
                                </div>
                            )}


                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Box style={{ backgroundColor: 'grey', height: '100%', marginTop: '30px' }}></Box>
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
            </Fragment>
        )
    } return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
            <CircularProgress />
        </div>
    )
}



export default SearchPage