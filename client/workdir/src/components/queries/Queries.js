import React from 'react';

/* Reactstrap components */
import {
  ListGroup,
  ListGroupItem,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

export const Queries = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem active>Queries</BreadcrumbItem>
    </Breadcrumb>
    <ListGroup>
      <ListGroupItem tag="a" href="/queries/simple">Simple Query</ListGroupItem>
    </ListGroup>
  </div>
);
