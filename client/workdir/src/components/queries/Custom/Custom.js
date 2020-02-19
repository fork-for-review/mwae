import React, { useState } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';

/* Reactstrap components */
import {
  Input,
  InputGroup,
  Jumbotron,
} from 'reactstrap';

/* Components */
import { NavBread } from '../../NavBread';

/* Styled Components */
import styled from 'styled-components';

/* Query */
const CustomQuery = graphql`
query CustomQuery($title: String!) {
  posts(title: $title) {
    edges {
      node {
        id
        title
        text
        createdDate
      }
    }
  }
}
`;

/* Styles */
const StyledPost = styled.div`
  .jumbotron {
    padding: 1rem;
  }
`;

const Post = ({title, text, createdDate}) => (
  <StyledPost>
    <Jumbotron>
      <h4>{title}</h4>
      <p>{createdDate}</p>
      <hr className="my-2" />
      <p>{text}</p>
    </Jumbotron>
  </StyledPost>
);

export const Custom = (props) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <NavBread path={props.location.pathname} />

      <h4>Example</h4>
      <InputGroup>
        <Input
          type="text"
          name="search"
          placeholder="Search"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </InputGroup>

      <hr className="my-2" />

      <QueryRenderer
        environment={environment}
        query={CustomQuery}
        variables={{title: value}}
        render={({error, props}) => {
          if (error) return <div>{error.message}</div>;
          else if (props) return <div>
            {props.posts.edges.map(({node}) =>
              <Post
                key={node.id}
                title={node.title}
                text={node.text}
                createdDate={node.createdDate}
              />
            )}
          </div>;
          return <div>Loading...</div>;
        }}
      />

    </div>
  );
};
