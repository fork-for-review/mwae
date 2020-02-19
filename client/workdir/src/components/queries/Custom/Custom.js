import React, { useState } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';

/* Reactstrap components */
import {
  Input,
  InputGroup,
} from 'reactstrap';

/* Components */
import { Doc } from '../../Doc';
import { Post } from '../../Post';

/* Code examples */
import { pythonCode } from './codes/python';
import { jsCode } from './codes/javascript';

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

const Example = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <InputGroup>
        <Input
          type="text"
          name="search"
          placeholder="Search"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </InputGroup>

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

export const Custom = (props) => (
  <Doc
    example={<Example />}
    pythonCode={pythonCode}
    pythonCodeHref={'https://github.com/makridenko/mwae/blob/master/core/workdir/post/schema.py'}
    jsCode={jsCode}
    jsCodeHref={'https://github.com/makridenko/mwae/blob/master/client/workdir/src/components/queries/Custom/Custom.js'}
    {...props}
  />
);
