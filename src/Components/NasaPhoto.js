import React, {useEffect, useState } from 'react';
import axios from "axios";
import NasaCard from "./NasaCard";
// https://api.nasa.gov/planetary/apod


const NasaPhoto = () => {

    const [photo, setPhoto] = useState();

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod')
        .then(response => {
            console.log('nasa api response', response)
            setPhoto(response.data)
        })
    })

    return (
    <div>
        <NasaCard />
    </div>
    )
}

export default NasaPhoto;
