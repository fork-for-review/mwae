import React from 'react'
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../Environment';

const PostsQuery = graphql`
query PostsQuery {
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

const Post = ({title, text, createdDate}) => (
  <div>
    <h4>{title}</h4>
    <p>{createdDate}</p>
    <hr />
    <p>{text}</p>
  </div>
);

export const Posts = () => (
  <QueryRenderer
    environment={environment}
    query={PostsQuery}
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
