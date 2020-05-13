import React from 'react';

const NasaCard = props => {
    console.log('props from nasa card component: ', props)

    const { photo } = props;


    return (
        <div>
            <img src={photo.url} alt="nasa phot" />
            <h1>{photo.date}</h1>
        <h2>{photo.explanation}</h2>
        </div>
    )
}

export default NasaCard;