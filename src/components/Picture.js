import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled, { keyframes } from 'styled-components'


const kf = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.3);
    opacity: 0.5;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
`

const Container = styled.div`
   padding: 0 75px;
   margin: 20px;
   border: 3px solid #282c34;
   transform: scale(0);
   animation: ${kf} 1s ease-in-out forwards;

h2{
    border: 5px solid #D96C06;
    color: white;
    background-color: #E01A4F;
    border-radius: 10px;
    &:hover{
        background-color:white;
        color:#E01A4F;
    }
}


p {
    font-size: 1.3rem;
    padding: 10px 40px;
    &:nth-of-type(2) {
      color: #E01A4F;
    }
}
    
img{
    width: auto;
    &:hover {
      border: 10px solid white;
    }
}
`   


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
        <Container className = "container">
            <div>
                <h2>{title}</h2>
                <p>{explanation}</p> 
                <p>Date: {date}</p>
                <img src={image} alt= '' ></img>
            </div>
            
        </Container>
    )
}



    
    
