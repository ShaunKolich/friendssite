import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Container, Row, Col } from 'fluid-react';
import Menu from './components/main-nav';
import Logo from '../src/img/Logo.jpg';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home'

const MainContainer = styled.div`
width:100%;
border:2px solid blue;
height:120px;

`;

const LogoDiv = styled.div`
width: 30vh;
height:100%;

img {
  max-width:100%;
  height:auto;
}
`;

const LoginButton = styled.div`
// border:2px solid red;
width:300px;
height:80px;
display:flex;
  flex-direction: row;
  justify-content:center;
  align-items:flex-end;

Button {
  width:30%;
  height:50%;
  // display:flex;
  // flex-direction: row;
  // justified-content:center;
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
                  <LoginButton>
                    <Button outline color="info">Login</Button>{' '}
                    <Button outline color="info">Register</Button>{' '}
                  </LoginButton>
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
