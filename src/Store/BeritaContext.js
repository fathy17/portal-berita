import React, { useEffect, useState, createContext} from 'react';
import Axios from 'axios'

export const BeritaContext = createContext()

const BeritaContextProvider = (props) => {
    const [berita, setBerita] = useState([])
    const [query, setQuery] = useState()
    

    useEffect(() => {
        Axios.get('/wp-json/wp/v2/berita')
            .then(res => setBerita(res.data))
            .catch(err => console.log(err))
    }, [])


    return ( 
        <BeritaContext.Provider value={{berita, setQuery}}>
            {props.children}
        </BeritaContext.Provider>
     );
}
 
export default BeritaContextProvider;