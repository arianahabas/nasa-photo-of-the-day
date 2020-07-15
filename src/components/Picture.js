import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function Picture (){
    const [photos, setPhotos]= useState('')
    useEffect(()=>{
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=RF6gFc8i2pt3uCpFUH2gbmbA8a09X9Duad6lhnps')
        .then(res => {
            console.log('The res was', res)
            setPhotos(res.data)
        })
        .catch(err =>{
            console.log('The error was', err)
        })
    },[])
    return null
}

    
    
