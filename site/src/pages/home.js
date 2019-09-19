import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import styled from 'styled-components';
import Slider from '../components/slider';
import Resume from '../img/Full Stack Web Development.pdf';
import { Link } from 'react-router-dom';
import ProjSlider from '../components/projSlider';

const SliderWrapper = styled.div`
width:100%;
height:500px;
// border:2px solid red;

`;

const AboutMe = styled.div`
// border:2px solid red;
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
    color:white;
    
.button{
    color:white;
    text-decoration:none;
    height:100%;

}
.button:hover{
    color:black!important;
    height:100%;
}
}
Button:hover{
    color:black!important;
}
p{
    width:50%;
    margin:0 auto;
    line-height:2;
}

`;

const ProjectSlider = styled.div`
width:100%;
height:600px;
// border:2px solid blue;

`;

const Contact = styled.div`
width:100%;
height:200px;
// border:2px solid red;


`;

const Footer = styled.div`

background-color:black;
color:white;
h3{
font-size:16px;
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
Developer of Front End Web Developer role at your company.</p>
                    <button><Link to={Resume} className="button" target="_blank" download>Download</Link></button>
                    <button><a href="https://www.linkedin.com/in/shaun-kolich-98517450/" className="button" target="_blank">LinkedIn</a></button>
                    <button><a href="https://github.com/ShaunKolich" className="button" target="_blank">GitHub</a></button>
                </AboutMe>
                <ProjectSlider>
                  <ProjSlider/>
                </ProjectSlider>
                <Contact>
                    <h2>Contact Info</h2> 
                    <h4><i class="fas fa-envelope"><a href = "mailto:globalxbank@gmail.com"> Send Email</a></i></h4>   
                    <h4><i class="fas fa-mobile-alt"> <a href = "tel:4074868060">Call Me</a></i></h4>
                </Contact>
                <Footer>
                    <h3>Copyright by Shaun Kolich</h3>
                </Footer>
            </div>


        )

    }

}

export default Home;