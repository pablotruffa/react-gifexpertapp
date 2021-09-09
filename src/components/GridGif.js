import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridGifItem } from './GridGifItem';

export const GridGif = ({category}) => {

    //const [images, setImages] = useState([])

    const { data:images, loading } = useFetchGifs(category);
    //renombramos data x data:images para cambiarle el nombre

   /*  useEffect( ()=>{
        getGifs(category).then( imgs => setImages(imgs));

    },[ category ]); */

    
    
    
    return (
        <div>
            <h2>{category}</h2>
            {/* {loading ? 'Cargando...' : 'Data cargada'} */}
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
                {
                    images.map( img => {
                        return (
                            <GridGifItem
                                {...img}
                                key={img.id}
                            />
                        )
                    
                    })
                }
        </div>
    )
}
