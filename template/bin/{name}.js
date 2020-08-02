#!/usr/bin/env node

const cac = require('cac')
const <%= _.camelCase(name) %> = require('..')
const { name, version } = require('../package')

const cli = cac(name)

// TODO: Implement module cli

cli.option('--host <host>', 'Email host')

cli.help().version(version)

const { args: [input], options: { host } } = cli.parse()

console.log(<%= _.camelCase(name) %>(input, { host }))
