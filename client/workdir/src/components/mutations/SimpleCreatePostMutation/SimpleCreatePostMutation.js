import React, { useState } from 'react';

/* Mutations */
import CreatePostMutation from '../../../mutations/CreatePostMutation';

/* Reactstrap components */
import {
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';

/* Styled Components */
import styled from 'styled-components';

/* Components */
import { Doc } from '../../Doc';
import { ExampleSimpleQuery } from '../../queries/Simple/Simple'

/* Code examples */
import { pythonCode } from './codes/python';
import { jsCode } from './codes/javascript';

/* Styles */
const ExampleStyle = styled.div`
  input.form-control {
    margin-bottom: 1rem;
  }

  h5 {
    font-weight: bold;
  }
`;

const confirm = (title, text, {setReloadList}) => {
  CreatePostMutation(title, text, (result, id) => {
    if (result) {
      setReloadList(true);
      alert('Successfully create new post');
    }
    else
      alert(id);
  });
};

const Example = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [reloadList, setReloadList] = useState(false);

  return (
    <ExampleStyle>

      <Form>
        <FormGroup>
          <h5>Create New Post</h5>
          <Input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="title"
          />
          <Input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="text post"
          />
          <Button
            color="success"
            onClick={() => confirm(title, text, {setReloadList})}
          >
            Create Post
          </Button>
        </FormGroup>
      </Form>

      <hr className="my-2" />
      <h5>All posts</h5>
      <ExampleSimpleQuery
        reloadList={reloadList}
        setReloadList={setReloadList}
      />

    </ExampleStyle>
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
