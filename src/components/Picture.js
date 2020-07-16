import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components'

const Container = styled.div`
   padding: 0 75px;
   margin: 20px;
   border: 3px solid #282c34;

`;

const Title = styled.h2`
    border: 3px solid #D96C06;
    color: white;
    background-color: #E01A4F;
    border-radius: 10px;
    align:center;
`;

const Info = styled.p`
    padding: 0 40px;
`;

const Date = styled.div`
    color: #53B3CB;
    font-size: 1.3rem;
    padding: 10px 0;

`;
const Image = styled.img`
    width: auto;
`;

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
                <Title>{title}</Title>
                <Info>{explanation}</Info> 
                <Date>Date: {date}</Date>
                <Image src={image} alt= '' ></Image>
            </div>
            
        </Container>
    )
}



    
    
