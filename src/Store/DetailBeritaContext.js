import React, { useEffect, useState, createContext} from 'react';
import Axios from 'axios'

export const DetailBeritaContext = createContext()

const DetailBeritaContextProvider = (props) => {
    const [detailBerita, setDetailBerita] = useState([])
    const [beritaId, setBeritaId] = useState([])

    useEffect(() => {
        Axios.get(`/wp-json/wp/v2/berita/${beritaId}`)
            .then(res => setDetailBerita(res.data))
            .catch(err => console.log(err))
    }, [beritaId])

    
    return ( 
        <DetailBeritaContext.Provider value={{detailBerita, setBeritaId, beritaId, setBeritaId}}>
            {props.children}
        </DetailBeritaContext.Provider>
     );
}
 
export default DetailBeritaContextProvider