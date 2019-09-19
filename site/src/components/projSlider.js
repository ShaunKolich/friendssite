import React from 'react';
import { connect } from 'react-redux';
import image1 from '../img/food.png';
import image2 from '../img/seed (1).png';
import image3 from '../img/auto.png';
import image4 from '../img/code-1839406_640.jpg';
import image5 from '../img/code-1839406_640.jpg';

import styled from 'styled-components';
var Coverflow = require('react-coverflow');


class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    project: 'Chef Project',
                    img: image1,
                    link: 'https://gracious-khorana-a12ec8.netlify.com',
                    github: 'https://github.com/chef-portfolio-team/reactapp/tree/Shaun-Kolich/chef-portfolio/src/components/Home',
                    description: 'Food Gawkers a project done with one other person in React, Redux, using both Less and Styled Components'
                },
                {
                    id: 2,
                    project: 'Seed Financial',
                    img: image2,
                    link: 'https://gracious-goldwasser-f8c320.netlify.com',
                    github: 'https://github.com/ShaunKolich/Financial',
                    description: 'Seed Financial built in React, CSS, and LESS using Fluid-React Grid System for creating the ability to scale to devices.'
                },
                {
                    id: 3,
                    project: 'Auto Shop',
                    img: image3,
                    link: 'https://modest-lovelace-82a889.netlify.com/',
                    github: 'https://github.com/ShaunKolich/MechanicsShop',
                    description: 'Autoshop project I am working on includes JS, React, Slider, CSS, and Fluid-React..'
                },
                {
                    id: 4,
                    project: 'Rest API & Node JS',
                    img: image4,
                    link: 'https://github.com/ShaunKolich/node-db-challenge/tree/Shaun-Kolich',
                    github: 'https://github.com/ShaunKolich/node-db-challenge/tree/Shaun-Kolich',
                    description: 'Here is the most recent Node Challenge using Rest API, Cookies, Login and Logout to access Dad Jokes'
                },
                {
                    id: 5,
                    project: 'Rest API & Node JS',
                    img: image5,
                    link: 'https://github.com/ShaunKolich/webdb-ii-challenge/tree/Shaun-Kolich',
                    github: 'https://github.com/ShaunKolich/webdb-ii-challenge/tree/Shaun-Kolich',
                    description: 'Uses SQLite3 for DB, API, Node, and Express to create a car database'
                },
                {
                    id: 5,
                    project: 'GitHub over 60 Repositories',
                    img: image5,
                    link: 'https://github.com/ShaunKolich',
                    github: 'https://github.com/ShaunKolich',
                    description: 'Examples HTML, CSS, LESS, Flexbox, Authentication, API, Express, Node JS, Cookies, JSON Tokens and more!'
                },
                

            ]
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
        h2{
            color:white;
            font-size:16px;
        }
        p{
            color:white;
        }
        Button{
            // width:50px;
            // height:50px;
            // text-align:center;
            border:grey;
        }
        .button{
            color:white;
            text-decoration:none;
        }
        .button:hover{
            color:black!important;
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

                            {this.state.projects.map((myprojects, id) => {
                                return (
                                    <div>
                                        <h2>{myprojects.project}</h2>
                                        <img src={myprojects.img
                                        } />
                                        <p>{myprojects.description}</p>
                                        <button><a href={myprojects.link} className="button" target="_blank">Live Site</a></button>
                                        <button><a href={myprojects.github} className="button" target="_blank">GitHub</a></button>
                                    </div>


                                )


                            })}

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