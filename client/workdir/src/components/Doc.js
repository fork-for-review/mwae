import React, { Fragment } from 'react';

/* Components */
import { NavBread } from './NavBread';

/* Syntax Highlighter */
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const fileNameNum = (href) => {
  return href.split('/').length - 1;
};

const CodeBlock = (props) => {
  return (
    <Fragment>
      <h3>{props.title}</h3>
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
    </Fragment>
  );
};

export const Doc = (props) => {
  return (
    <div>
      <NavBread path={props.location.pathname} />

      <CodeBlock
        title={'Backend'}
        href={props.pythonCodeHref}
        language={'python'}
        code={props.pythonCode}
      />

      <CodeBlock
        title={'Frontend'}
        href={props.jsCodeHref}
        language={'js'}
        code={props.jsCode}
      />

      <h4>Example</h4>
      <hr className="my-2" />
      {props.example}

    </div>
  );
}
