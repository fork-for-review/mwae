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

// Query Examples
import { QueryExamplesLinks } from './queryExamples/QueryExamplesLinks';
import { Simple } from './queryExamples/Simple/Simple';
import { WithArgs } from './queryExamples/WithArgs/WithArgs';
import { Custom } from './queryExamples/Custom/Custom';

// Mutation Examples
import { MutationExamplesLinks } from './mutationExamples/MutationExamplesLinks';
import { SimpleMutationExample } from './mutationExamples/SimpleMutationExample/SimpleMutationExample';

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
              <QueryExamplesLinks />
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

            <Route exacr path='/queries/custom' component={(props) => (
              <Custom
                {...props}
              />
            )}/>

            <Route exact path='/mutations' component={() => (
              <MutationExamplesLinks />
            )}/>

            <Route exact path='/mutations/simple' component={(props) => (
              <SimpleMutationExample
                {...props}
              />
            )}/>

          </Switch>
        </Col>

      </Row>

    </Container>
  </StyledMain>
);
