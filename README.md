![prosemirror-dev-tools](/docs/assets/logo.png)

This is a monkey patched fork of https://github.com/d4rkr00t/prosemirror-dev-tools which fixed the wrong indexing problem (see this [discussion](https://discuss.prosemirror.net/t/is-there-a-good-way-to-understand-the-pos-that-is-used-all-over/3458/6)).




## Table of Content

- [Table of Content](#table-of-content)
- [Quick Start](#quick-start)
  - [NPM Way](#npm-way)
- [Features](#features)
  - [State](#state)
  - [History](#history)
  - [Plugins](#plugins)
  - [Schema](#schema)
  - [Structure](#structure)
  - [Snapshots](#snapshots)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Quick Start

### NPM Way

Install `prosemirror-dev-tools` package from npm:

```sh
npm install --save-dev kepta/prosemirror-dev-tools
```

Wrap `EditorView` instance in applyDevTools method:

```js
import applyDevTools from "prosemirror-dev-tools";

const view = new EditorView /*...*/();

applyDevTools(view);
```

## Features

### State

- Inspect document – all nodes and marks
- Inspect selection – position, head, anchor and etc.
- Inspect active marks
- See document stats – size, child count

![prosemirror-dev-tools state tab](/docs/assets/state-tab.png)

### History

- Inspect document changes over time
- Time travel between states
- See selection content for particular state in time
- See selection diff

![prosemirror-dev-tools history tab](/docs/assets/history-tab.png)

### Plugins

Inspect state of each plugin inside prosemirror.

![prosemirror-dev-tools plugins tab](/docs/assets/plugins-tab.png)

### Schema

Inspect current document schema with nodes and marks.

![prosemirror-dev-tools schema tab](/docs/assets/schema-tab.png)

### Structure

Visual representation of current document tree with positions at the beginning
and the end of every node.

![prosemirror-dev-tools structure tab](/docs/assets/structure-tab.png)

### Snapshots

Snapshots allow you to save current editor state and restore it later. State is
stored in local storage.

![prosemirror-dev-tools snapshots tab](/docs/assets/snapshots-tab.png)

## Demo

- [Demo & Example Setup](https://codesandbox.io/s/l9n6667ooz)

## Contributing

Contributions are highly welcome! This repo is commitizen friendly — please read
about it [here](http://commitizen.github.io/cz-cli/).

## License

- **MIT** : http://opensource.org/licenses/MIT
