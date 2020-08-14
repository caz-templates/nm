# <%= name %>
<% if (features.includes('test')) { %>
[![Build Status][travis-img]][travis-url]
[![Coverage Status][codecov-img]][codecov-url]<% } %>
[![License][license-img]][license-url]
[![NPM Downloads][downloads-img]][downloads-url]
[![NPM Version][version-img]][version-url]
[![Dependency Status][dependency-img]][dependency-url]
[![devDependency Status][devdependency-img]][devdependency-url]
[![Code Style][style-img]][style-url]

> <%= description %>

## Installation

```shell
$ npm install <%= name %>

# or yarn
$ yarn add <%= name %>
```

## Usage

<!-- TODO: Introduction of Usage -->

```javascript
const <%= _.camelCase(name) %> = require('<%= name %>')
const result = <%= _.camelCase(name) %>('w')
// result => 'w@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### <%= _.camelCase(name) %>(input, options?)

#### input

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`<% if (features.includes('cli')) { %>

## CLI Usage

<!-- TODO: Introduction of CLI -->

Use npx:

```shell
$ npx <%= name %> <input> [options]
```

Globally install:

```shell
$ npm install <%= name %> -g
# or yarn
$ yarn global add <%= name %>
```

```shell
$ <%= name %> --help
demo v0.1.0

Usage:
  $ <%= name %> <input>

Commands:
  <input>  Sample cli program

For more info, run any command with the `--help` flag:
  $ <%= name %> --help

Options:
  --host <host>  Sample options
  -h, --help     Display this message
  -v, --version  Display version number

Examples:
  $ <%= name %> w --host zce.me
```<% } %>

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[<%= license %>](LICENSE) &copy; [<%= author %>](<%= url %>)


<% if (features.includes('test')) { %>
[travis-img]: https://img.shields.io/travis/com/<%= github %>/<%= name %>
[travis-url]: https://travis-ci.com/<%= github %>/<%= name %>
[codecov-img]: https://img.shields.io/codecov/c/github/<%= github %>/<%= name %>
[codecov-url]: https://codecov.io/gh/<%= github %>/<%= name %><% } %>
[license-img]: https://img.shields.io/github/license/<%= github %>/<%= name %>
[license-url]: https://github.com/<%= github %>/<%= name %>/blob/master/LICENSE
[downloads-img]: https://img.shields.io/npm/dm/<%= name %>
[downloads-url]: https://npmjs.org/package/<%= name %>
[version-img]: https://img.shields.io/npm/v/<%= name %>
[version-url]: https://npmjs.org/package/<%= name %>
[dependency-img]: https://img.shields.io/david/<%= github %>/<%= name %>
[dependency-url]: https://david-dm.org/<%= github %>/<%= name %>
[devdependency-img]: https://img.shields.io/david/dev/<%= github %>/<%= name %>
[devdependency-url]: https://david-dm.org/<%= github %>/<%= name %>?type=dev
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
