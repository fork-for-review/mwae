import React from 'react';

/* Reactstrap components */
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

export const NavigationBreadcrumb = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem>Examples</BreadcrumbItem>
      <BreadcrumbItem active>Posts</BreadcrumbItem>
    </Breadcrumb>
  </div>
);
