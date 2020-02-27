import React from 'react';

/* Reactstrap components */
import {
  ListGroup,
  ListGroupItem,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

export const Mutations = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem active>Mutations</BreadcrumbItem>
    </Breadcrumb>
    <ListGroup>

      <ListGroupItem tag="a" href="/mutations/simple">
        Simple Mutation
      </ListGroupItem>

    </ListGroup>
  </div>
);
