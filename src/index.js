import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client'
import { Provider } from "unstated";
import InternalDevTools from "./dev-tools";
import EditorStateContainer from "./state/editor";

let ROOT
const DEVTOOLS_CLASS_NAME = "__prosemirror-dev-tools__";
function createPlace() {
  if(ROOT) return ROOT
  let place = document.querySelector(`.${DEVTOOLS_CLASS_NAME}`);
  if (!place) {
    place = document.createElement("div");
    place.className = DEVTOOLS_CLASS_NAME;
    document.body.appendChild(place);
    ROOT = createRoot(place)
  } else {
    ReactDOM.unmountComponentAtNode(place);
    place.innerHTML = "";
    ROOT = createRoot(place)
  }
  return ROOT;
}

function createDevTools(editorView, props) {
  const editorState = new EditorStateContainer(editorView, props)
  const place = createPlace()
  place.render(
      <Provider inject={[editorState]}>
        <InternalDevTools />
      </Provider>
  )
  return editorState.updateState
}

export { createDevTools };
