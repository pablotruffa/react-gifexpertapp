import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GridGif } from './components/GridGif'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    
    //const handleAdd = ()=> setCategories( [...categories, Math.random()] )

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>

            <ol>
                {
                    categories.map(category => {
                        return(
                            <GridGif
                                category={category}
                                key={category}
                            />
                        ) 

                    })
                }
            </ol>
        </div>
    )
}
