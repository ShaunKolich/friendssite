import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Container, Row, Col } from 'fluid-react';
import Menu from './components/main-nav';
import Logo from '../src/img/e43e0e8c-3b34-46e3-9154-d94adb1bf0ff_200x200 (1).png';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home'

const MainContainer = styled.div`
width:100%;
// border:2px solid blue;
height:100px;

`;

const LogoDiv = styled.div`
width: 30vh;
height:100%;
display:flex;
justify-content:center;

img {
  max-width:150%;
  height:auto;
}
`;

const LoginButton = styled.div`
// border:2px solid red;
width:100%;
height:80px;
display:flex;
  flex-direction: row;
  justify-content:center;
  align-items:flex-end;
  outline: none;
  

Button {
  width:15vh;
  height:50%;
  // display:flex;
  // flex-direction: row;
  // justified-content:center;
  outline: none!important;
  color:grey;
  border-color:grey;
  

}
Button:hover{
  background-color: black;
  border-color:black;
  outline: none;
  
}
Button:focus{
  outline:none;
}



`;

function App() {
  return (
    <div className="App">

      <Router>
        <Container>
          <MainContainer>
            <Row>
              <Col>
                <Menu />
              </Col>
              <Col>
                <LogoDiv>
                  <Link to={'/'} className='nav-link'>
                    <img src={Logo} alt="logo"></img>
                  </Link>
                </LogoDiv>
              </Col>
              <Col>
                <Row>
                  {/* <LoginButton>
                    <Button outline color="info">Login</Button>{' '}
                    <Button outline color="info">Register</Button>{' '}
                  </LoginButton> */}
                </Row>
              </Col>


            </Row>
          </MainContainer>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Container>

      </Router>

    </div>
  );
}

export default App;
