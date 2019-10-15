import React, { useEffect, useState, createContext} from 'react';
import Axios from 'axios'

export const BeritaContext = createContext()

const BeritaContextProvider = (props) => {
    const [berita, setBerita] = useState([])
    

    useEffect(() => {
        Axios.get('/wp-json/wp/v2/berita')
            .then(res => setBerita(res.data))
            .catch(err => console.log(err))
    }, [])


    return ( 
        <BeritaContext.Provider value={{berita}}>
            {props.children}
        </BeritaContext.Provider>
     );
}
 
export default BeritaContextProvider;