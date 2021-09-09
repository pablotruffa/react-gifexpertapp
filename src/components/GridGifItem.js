import React from 'react'

export const GridGifItem = ({id,title,url}) => {

    return (
        <div className="animate__animated animate__fadeIn">
            <img alt={title} src={url}/>
            <p>{title}</p>
            
        </div>
    )
}
