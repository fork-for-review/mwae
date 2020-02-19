import React from 'react';

/* Reactstrap components */
import {
  Jumbotron,
} from 'reactstrap';

/* Styled Components */
import styled from 'styled-components';

/* Styles */
const StyledPost = styled.div`
  .jumbotron {
    margin-top: 1rem;
    padding: 1rem;
  }
`;

export const Post = ({title, text, createdDate}) => (
  <StyledPost>
    <Jumbotron>
      <h4>{title}</h4>
      <p>{createdDate}</p>
      <hr className="my-2" />
      <p>{text}</p>
    </Jumbotron>
  </StyledPost>
);
