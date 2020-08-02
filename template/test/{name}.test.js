const <%= _.camelCase(name) %> = require('..')

// TODO: Implement module test
test('<%= name %>', () => {
  expect(<%= _.camelCase(name) %>('w')).toBe('w@zce.me')
  expect(<%= _.camelCase(name) %>('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => <%= _.camelCase(name) %>(100)).toThrow('Expected a string, got number')
})
