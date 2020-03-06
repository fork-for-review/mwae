export const jsCode =  `import React, { useState } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../../../Environment';

/* Query */
const WithArgsQuery = graphql\`
query WithArgsQuery($first: Int!) {
  posts(first: $first) {
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

const Example = (props) => {
  const [value, setValue] = useState(0);
  const values = [0,1,2,3];
  return (
    <div>
      <InputGroup>
        <Input
          type="select"
          name="select"
          id="rangeSelect"
          value={value}
          onChange={e => setValue(e.target.value)}
        >
          {values.map((val) => <option>{val}</option>)}
        </Input>
      </InputGroup>

      <QueryRenderer
        environment={environment}
        query={WithArgsQuery}
        variables={{first: value}}
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
`;
