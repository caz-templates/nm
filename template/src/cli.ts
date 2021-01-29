import cac from 'cac'
import <%= _.camelCase(name) %> from '.'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name, version } = require('../package.json')

// Unified error handling
/* istanbul ignore next */
const onError = (err: Error): void => {
  console.error(err.message)
  process.exit(1)
}

process.on('uncaughtException', onError)
process.on('unhandledRejection', onError)

const cli = cac(name as string)

// TODO: Implement module cli

cli
  .command('<input>', 'Sample cli program')
  .option('--host <host>', 'Sample options')
  .example(`  $ <%= '${name as string}' %> w --host zce.me`)
  .action((input, options) => {
    console.log(<%= _.camelCase(name) %>(input, options))
  })

cli.help().version(version).parse()
