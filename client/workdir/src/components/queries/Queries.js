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

      <ListGroupItem tag="a" href="/queries/simple">
        Simple Query
      </ListGroupItem>

      <ListGroupItem tag="a" href="/queries/arguments">
        Query With Arguments
      </ListGroupItem>

      <ListGroupItem tag="a" href="/queries/custom">
        Query With Custom Arguments
      </ListGroupItem>
      
    </ListGroup>
  </div>
);
