import React from 'react';

/* Router */
import { Route, Switch } from 'react-router-dom';

/* Bootstrap layout components */
import {
  Col,
  Row,
  Container,
} from 'reactstrap';

/* Styled components */
import styled from 'styled-components';

/* Components */
import { Nav } from './Nav';
import { SideNav } from './SideNav';

/* Sections */
import { Queries } from './queries/Queries';
import { Simple } from './queries/Simple/Simple';
import { WithArgs } from './queries/WithArgs/WithArgs';


const StyledMain = styled.div`
  .row {
    margin-bottom: 15px;
  }
`;

export const Main = () => (
  <StyledMain>
    <Container>

      <Row>
        {/* Navbar */}
        <Col>
          <Nav />
        </Col>
      </Row>

      <Row>
        {/* Side navbar */}
        <Col xs="3">
          <SideNav />
        </Col>
        {/* Main info */}
        <Col xs="9">
          <Switch>

            <Route exact path='/' component={() => (
              <p>Main</p>
            )}/>

            <Route exact path='/queries' component={() => (
              <Queries />
            )}/>

            <Route exact path='/queries/simple' component={(props) => (
              <Simple
                {...props}
              />
            )}/>

            <Route exact path='/queries/arguments' component={(props) => (
              <WithArgs
                {...props}
              />
            )}/>

          </Switch>
        </Col>

      </Row>

    </Container>
  </StyledMain>
);
