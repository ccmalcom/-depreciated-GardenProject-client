import React from 'react';
//import { Button } from 'reactstrap';
import styled from 'styled-components';
import Fade from 'react-reveal';
import img from '../assets/garden.jpg';


const Wrapper = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    height: 100vh;
    
`
const Title = styled.div`
    font-family: 'Yeseva One';
    font-size: 100px;
    color: white;
    text-align: center;
    padding-top: 90px;
    `

const Section = styled.div`
    font-family: 'Yeseva One';
    font-size: 70px;
    color: white;
    text-align: center;
    
`

const Paragraph = styled.p`
    font-family: 'Nunito';
    font-size: 30px;
    color: white;
    text-align: center;
    padding: 0px;
    margin: 50px;
    `
const Div = styled.div`
    padding: 50px;
    margin-left: 575px;
    font-family: 'Yeseva One';
`


const Home = () => {
    return (
        <Wrapper>
            <Fade cascade>
                <Title>
                    <p>Plant it</p>
                </Title>
                <Section>
                <p>An open-source garden index, stocked by you.</p>
                </Section>
                <Paragraph>
                Search for plants below. If you can't find what you're looking for, add it to the list! Create an account (or login) to access MyGarden, where you can add plants from the index to your very own virtual garden to keep track of everything you grow and how to grow it.
                </Paragraph>
                
            </Fade>
        </Wrapper>
    )
}

export default Home;