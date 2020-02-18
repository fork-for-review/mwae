import React from 'react';

/* Reactstrap components */
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';


export const SideNav = () => (
  <ListGroup>
    <ListGroupItem tag="a" href="/">Main</ListGroupItem>
    <ListGroupItem tag="a" href="/queries">Queries</ListGroupItem>
  </ListGroup>
);
