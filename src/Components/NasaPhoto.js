import React, {useEffect, useState } from 'react';
import axios from "axios";
import NasaCard from "./NasaCard";


const NasaPhoto = () => {
    const [photos, setPhoto] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=z22vpzHojpyvR1WqBTpDTdGWWVukuhXXGtbfnDMW')
        .then(response => {
            console.log('nasa api response', response)
            console.log('nasa api data', response.data)
            setPhoto(response.data)
        })
        .catch(error => console.log('error', error))
    }, [])

    return (
    <div>
        <NasaCard id={photos} photo={photos}/>
    </div>
    )
}

export default NasaPhoto;
