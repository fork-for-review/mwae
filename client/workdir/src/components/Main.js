import React from 'react';

/* Bootstrap layout components */
import {
  Col,
  Row,
  Container,
} from 'reactstrap';

/* Styled components */
import styled from 'styled-components';

/* Components */
import { Posts } from './Posts';
import { Nav } from './Nav';
import { NavigationBreadcrumb } from './NavigationBreadcrumb';
import { SideNav } from './SideNav';

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
          <NavigationBreadcrumb />
          <Posts />
        </Col>

      </Row>

    </Container>
  </StyledMain>
);
