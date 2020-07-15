import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function Picture (){
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [date, setDate] = useState('')
    const [explanation, setExplanation] = useState('')

    useEffect(()=>{
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=RF6gFc8i2pt3uCpFUH2gbmbA8a09X9Duad6lhnps')
        .then(res => {
            console.log('The res was', res)
            setTitle(res.data.title)
            setImage(res.data.url)
            setDate(res.data.date)
            setExplanation(res.data.explanation)
            
        })
        .catch(err =>{
            console.log('The error was', err)
        })
    },[])
    
    return (
        <div>
            <div>{title}</div>
            <img src={image} alt= '' ></img>
            <div>{date}</div>
            <div>{explanation}</div>
        </div>
    )
}

    
    
