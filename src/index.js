import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unstated";
import DevTools from "./dev-tools";
import EditorStateContainer from "./state/editor";

const DEVTOOLS_CLASS_NAME = "__prosemirror-dev-tools__";
console.log("hola 3");
function createPlace() {
  let place = document.querySelector(`.${DEVTOOLS_CLASS_NAME}`);

  if (!place) {
    place = document.createElement("div");
    place.className = DEVTOOLS_CLASS_NAME;
    document.body.appendChild(place);
  } else {
    ReactDOM.unmountComponentAtNode(place);
    place.innerHTML = "";
  }

  return place;
}

function applyDevTools(editorView, props) {
  const place = createPlace();
  const editorState = new EditorStateContainer(editorView, props);

  ReactDOM.render(
    <Provider inject={[editorState]}>
      <DevTools />
    </Provider>,
    place
  );
  return () => {
    return ReactDOM.unmountComponentAtNode(place);
  };
}

// export default applyDevTools;
export { applyDevTools };
