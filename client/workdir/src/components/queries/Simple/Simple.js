import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';

/* Reactstrap components */
import {
  Jumbotron,
} from 'reactstrap';

/* Components */
import { NavBread } from '../../NavBread';

/* Styled Components */
import styled from 'styled-components';

/* Syntax Highlighter */
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/* Code examples */
import { pythonCode } from './codes/python';
import { jsCode } from './codes/javascript';

/* Query */
const SimpleQuery = graphql`
query SimpleQuery {
  posts {
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

export const Simple = (props) => {
  console.log(props.location.pathname);
  return (
    <div>
      <NavBread path={props.location.pathname} />

      <h3>Backend</h3>
      <a href="https://github.com/makridenko/mwae/blob/master/core/workdir/post/schema.py">{'schema.py'}</a>
      <SyntaxHighlighter
        language={'python'}
        style={atomOneDark}
        showLineNumbers
      >
        {pythonCode}
      </SyntaxHighlighter>

      <h3>Frontend</h3>
      <SyntaxHighlighter
          language={'js'}
          style={atomOneDark}
          showLineNumbers
        >
          {jsCode}
        </SyntaxHighlighter>

      <h4>Example</h4>
      <QueryRenderer
        environment={environment}
        query={SimpleQuery}
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
