import React, { useState } from 'react';

/* Components */
import { NavBread } from './NavBread';

/* Syntax Highlighter */
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/* Reactstrap components */
import {
  ListGroup,
  ListGroupItem,
  Collapse,
} from 'reactstrap';


const fileNameNum = (href) => {
  return href.split('/').length - 1;
};

const CodeBlock = (props) => {
  return (
    <Collapse isOpen={props.isOpen}>
      <hr className="my-2" />
      <a href={props.href}>
        {props.href.split('/')[fileNameNum(props.href)]}
      </a>
      <SyntaxHighlighter
        language={props.language}
        style={atomOneDark}
        showLineNumbers
      >
        {props.code}
      </SyntaxHighlighter>
    </Collapse>
  );
};

export const Doc = (props) => {
  const [backendIsOpen, setBackendIsOpen] = useState(false);
  const [frontendIsOpen, setFrontendIsOpen] = useState(false);

  const toggleBackend = () => setBackendIsOpen(!backendIsOpen);
  const toggleFrontend = () => setFrontendIsOpen(!frontendIsOpen);

  return (
    <div>
      <NavBread path={props.location.pathname} />
      <ListGroup>

        <ListGroupItem onClick={toggleBackend}>
          <h3>Backend</h3>
          <CodeBlock
            isOpen={backendIsOpen}
            href={props.pythonCodeHref}
            language={'python'}
            code={props.pythonCode}
          />
        </ListGroupItem>

        <ListGroupItem onClick={toggleFrontend}>
          <h3>Frontend</h3>
          <CodeBlock
            isOpen={frontendIsOpen}
            href={props.jsCodeHref}
            language={'js'}
            code={props.jsCode}
          />
        </ListGroupItem>

        <ListGroupItem>
          <h4>Example</h4>
          <hr className="my-2" />
          {props.example}
        </ListGroupItem>

      </ListGroup>
    </div>
  );
}
