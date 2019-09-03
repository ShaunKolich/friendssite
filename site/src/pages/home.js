import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import styled from 'styled-components';
import ControlledCarousel from '../components/slider';

const SliderWrapper = styled.div`
width:100%;
height:500px;
border:2px solid red;

`;

class Home extends Component{
    render() {
        return (
           <div>
            <SliderWrapper>
            <ControlledCarousel/>    

           </SliderWrapper> 
           </div>
                
           
    )

}

}

export default Home;