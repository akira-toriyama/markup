import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const SyntaxHighlight: React.FC = (props) => (
  <SyntaxHighlighter language="css">{props.children}</SyntaxHighlighter>
);
