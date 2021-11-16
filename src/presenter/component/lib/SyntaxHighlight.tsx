import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import prettier from "prettier/standalone";
import parserCss from "prettier/parser-postcss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StyledComponent = any;

const fmt = (p: StyledComponent) =>
  prettier.format(p.componentStyle?.rules[0], {
    parser: "css",
    plugins: [parserCss],
  });

export const CssSyntaxHighlight: React.FC = (props) => (
  <SyntaxHighlighter language="css">{fmt(props.children)}</SyntaxHighlighter>
);
