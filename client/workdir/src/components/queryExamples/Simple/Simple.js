import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';

/* Reactstrap components */
import {
  Spinner,
} from 'reactstrap';

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

export const ExampleSimpleQuery = ({reloadList, setReloadList}) => (
  <QueryRenderer
    environment={environment}
    query={SimpleQuery}
    render={({error, props, retry}) => {
      if (error) return <div>{error.message}</div>;
      else if (props) {

        if (reloadList) {
          setReloadList(false);
          retry();
        }

        return (
          <div>
            {props.posts.edges.map(({node}) =>
              <Post
                key={node.id}
                title={node.title}
                text={node.text}
                createdDate={node.createdDate}
              />
            )}
          </div>
        );
      }
      return <Spinner color="primary" />;
    }}
  />
);

export const Simple = (props) => (
  <Doc
    example={<ExampleSimpleQuery />}
    pythonCode={pythonCode}
    pythonCodeHref={'https://github.com/makridenko/mwae/blob/master/core/workdir/post/schema.py'}
    jsCode={jsCode}
    jsCodeHref={'https://github.com/makridenko/mwae/blob/master/client/workdir/src/components/queries/Simple/Simple.js'}
    {...props}
  />
);
