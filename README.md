# babel-plugin-react-class-display-name

Add displayName to ES6 classes that extend React.Component

## Installation

```sh
$ npm install babel-plugin-react-class-display-name
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["react-class-display-name"]
}
```

### Via CLI

```sh
$ babel --plugins react-class-display-name script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["react-class-display-name"]
});
```
