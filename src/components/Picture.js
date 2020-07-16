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
   display:flex;
   flex-direction:row;
   border: 3px solid #282c34;
   animation: ${kf} 1s ease-in-out forwards;
   margin: 20px;
   
h2{
    border: 5px solid #D96C06;
    margin: 15px;
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
    padding: 0 50px;
    &:nth-of-type(2) {
      color: white;
    }
}
    
img{
    width: 50vh;
    height: auto;
    padding: 10px;
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
            </div>
            <img src={image} alt= '' ></img>
        </Container>
    )
}



    
    
