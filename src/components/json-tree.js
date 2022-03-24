import React from "react";
import { JSONTree as JSONTreeV } from "react-json-tree";
import { jsonTreeTheme } from "./../theme";

export default function JSONTree(props) {
  return (
    <JSONTreeV
      invertTheme={false}
      theme={jsonTreeTheme}
      hideRoot
      {...props}
    />
  );
}
