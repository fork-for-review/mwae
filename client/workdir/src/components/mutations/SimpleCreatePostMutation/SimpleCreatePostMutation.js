import React from 'react';

/* Reactstrap components */
import {
  Input,
  InputGroup,
  Button,
} from 'reactstrap';

/* Components */
import { Doc } from '../../Doc';
import { ExampleSimpleQuery } from '../../queries/Simple/Simple'

/* Code examples */
import { pythonCode } from './codes/python';
import { jsCode } from './codes/javascript';

const Example = () => {
  return (
    <div>
      <h4>Create New Post</h4>
      <InputGroup>
        <Input
          type="text"
          placeholder="title"
        />
        <Input
          type="text"
          placeholder="text post"
        />
        <Button>Create Post</Button>
      </InputGroup>
      <hr className="my-2" />
      <h4>All posts</h4>
      <ExampleSimpleQuery />
    </div>
  );
};

export const SimpleCreatePostMutation = (props) => (
  <Doc
    example={<Example />}
    pythonCode={pythonCode}
    pythonCodeHref={'https://github.com/makridenko/mwae/blob/master/core/workdir/post/schema.py'}
    jsCode={jsCode}
    jsCodeHref={'https://github.com/makridenko/mwae/blob/master/client/workdir/src/components/queries/Custom/Custom.js'}
    {...props}
  />
);
