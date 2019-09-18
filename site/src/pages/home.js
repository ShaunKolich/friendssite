import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import styled from 'styled-components';
import Slider from '../components/slider';
import Resume from '../img/Full Stack Web Development.pdf';
import { Link } from 'react-router-dom';

const SliderWrapper = styled.div`
width:100%;
height:500px;
// border:2px solid red;

`;

const AboutMe = styled.div`
border:2px solid red;
width:100%;
height:500px;
display flex;
justify-content:center;
flex-direction:column;
align-content:center;

 
Button{
    width:20%;
    margin-bottom:10px;
    display:flex;
    justify-content:center;
    margin: 0 auto;
    
.button{
    color:white;
    text-decoration:none;

}
.button:hover{
    color:black;
}
}

`;

class Home extends Component {
    render() {
        return (
            <div>
                <SliderWrapper>
                    <Slider />

                </SliderWrapper>
                <AboutMe>
                    <h1>About Me</h1>
                    <p>Hard-working professional with 13+ years of experience and a proven knowledge of project lifecycle,
troubleshooting, and desktop technology. Aiming to leverage my skills to successfully fill the Full Stack Web
Developer role at your company.</p>
                    <button><Link to= {Resume} className = "button" target="_blank" download>Download</Link></button>
                    <button><a href="https://www.linkedin.com/in/shaun-kolich-98517450/" className = "button" target="_blank">LinkedIn</a></button>
                    <button>Check out Github</button>
                </AboutMe>



            </div>


        )

    }

}

export default Home;