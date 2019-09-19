import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
var Coverflow = require('react-coverflow');


class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.setState = {
            // // foods: this.props.foods,
            // newfood: this.props.foods[0]
        }




    }

    render() {

        const SliderWrapper = styled.div`
        
        li{
            list-style:none;
            display: flex;
            flex-direction: row;
            justify-content: center;
            justify-content: space-between;
            margin: 20px 30px;
            //  border: 1px solid red;
             width:150px;
             font-size:12px;
             line-height:-1;
             color:white;
             
               
        }
        img{
            height:50%;
            width:80%;
        }
        `;

        const SliderInfo = styled.div`
            display: flex;
            width: 100%;
            background-color:#000000;
background-image: linear-gradient(315deg, #000000 0%, #7f8c8d 74%);
            height: 500px;
            justify-content: center;
            align-items: center;
            overflow-x:hidden; 
            // border:2px solid yellow;
            font-size:12px;
             line-height:-1; 
        `;


        return (
            <div>

                <SliderWrapper>
                    <h1>Portfolio</h1>
                    <SliderInfo>
                        <Coverflow width={1060}
                            height={480}
                            displayQuantityOfSide={2}
                            navigation={false}
                            enableHeading={false}
                        >

                            <div>

                            </div>







                        </Coverflow>,
                </SliderInfo>
                </SliderWrapper>



            </div>

        )
    }
}
export default Slider;