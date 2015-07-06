# envvars [![Build Status](https://travis-ci.org/jeduan/envvars.svg?branch=master)](https://travis-ci.org/jeduan/envvars) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

> Parse exported environment variables from a string


## Install

```
$ npm install --save envvars
```


## Usage

```bash
$ cat .env
export FOO=foo
export FOO_BAR=bar
export BAR_FOO="baz"
```

```js
var envVars = require('envvars');

fs.readFile('.env', 'utf8', function (content) {
  var result = envVars(content)
  // => {foo: 'foo', fooBar: 'bar', barFoo: 'baz'}
})
```


## API

### envVars(input)

#### input

*Required*  
Type: `string`

The string with the exported variables

## License

MIT © [Jeduan Cornejo](https://github.com/jeduan)
