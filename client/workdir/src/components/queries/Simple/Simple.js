import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';

/* Components */
import { Doc } from '../../Doc';
import { Post } from '../../Post';

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

const Example = () => (
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

export const Simple = (props) => (
  <Doc
    example={<Example />}
    pythonCode={pythonCode}
    pythonCodeHref={'https://github.com/makridenko/mwae/blob/master/core/workdir/post/schema.py'}
    jsCode={jsCode}
    jsCodeHref={'https://github.com/makridenko/mwae/blob/master/client/workdir/src/components/queries/Simple/Simple.js'}
    {...props}
  />
);
