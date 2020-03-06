import {
  commitMutation,
  graphql,
} from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
mutation PostCreateMutation($input: PostCreateInput!) {
  postCreate(input: $input) {
    post {
      id
    }
  }
}
`;

export default (title, text, callback) => {
  const variables = {
    input: {
      title,
      text,
    },
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        if (response.postCreate)
          callback(true, response.postCreate.id);
        else
          callback(false, response.error);
      },
      onError: err => console.error(err),
    },
  );
};
