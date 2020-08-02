# <%= name %>
<% if (features.includes('test')) { %>
[![Build Status][travis-image]][travis-url]<% if (features.includes('coverage')) { %>
[![Coverage Status][codecov-image]][codecov-url]<% } %><% } %>
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> <%= description %>

## Installation

```shell
$ npm install <%= name %>

# or yarn
$ yarn add <%= name %>
```

## Usage

<!-- TODO: Introduction of API use -->

```javascript
const <%= _.camelCase(name) %> = require('<%= name %>')
const result = <%= _.camelCase(name) %>('zce')
// result => 'zce@zce.me'
```

## API

<!-- TODO: Introduction of API -->

### <%= _.camelCase(name) %>(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`<% if (features.includes('cli')) { %>

## CLI Usage

<!-- TODO: Introduction of CLI -->

```shell
$ yarn global add <%= name %>

# or npm
$ npm install <%= name %> -g
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
[travis-image]: https://img.shields.io/travis/<%= github %>/<%= name %>
[travis-url]: https://travis-ci.org/<%= github %>/<%= name %><% if (features.includes('coverage')) { %>
[codecov-image]: https://img.shields.io/codecov/c/github/<%= github %>/<%= name %>
[codecov-url]: https://codecov.io/gh/<%= github %>/<%= name %><% } %><% } %>
[downloads-image]: https://img.shields.io/npm/dm/<%= name %>
[downloads-url]: https://npmjs.org/package/<%= name %>
[version-image]: https://img.shields.io/npm/v/<%= name %>
[version-url]: https://npmjs.org/package/<%= name %>
[license-image]: https://img.shields.io/github/license/<%= github %>/<%= name %>
[license-url]: https://github.com/<%= github %>/<%= name %>/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/<%= github %>/<%= name %>
[dependency-url]: https://david-dm.org/<%= github %>/<%= name %>
[devdependency-image]: https://img.shields.io/david/dev/<%= github %>/<%= name %>
[devdependency-url]: https://david-dm.org/<%= github %>/<%= name %>?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: https://standardjs.com
