export const jsCode = `import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';

/* Query */
const SimpleQuery = graphql\`
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
\`;


export const Simple = () => (
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
);
`;
