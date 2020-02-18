import React from 'react';

/* Reactstrap components */
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

export const NavBread = ({path}) => {
  const sections = path.split('/').slice(1);
  const firstCapital = string => string[0].toUpperCase() + string.slice(1);
  return (
    <Breadcrumb>
      <BreadcrumbItem
        tag="a"
        href={'/'+sections[0]}
      >
        {firstCapital(sections[0])}
      </BreadcrumbItem>
      <BreadcrumbItem
        active
        tag="span"
      >
        {firstCapital(sections[1])}
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
