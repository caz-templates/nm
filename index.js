// // !!! Sharing the dependencies of zce-cli
// module.paths = module.parent.paths

// const path = require('path')
// const chalk = require('chalk')
// const caz = require('caz')
const pkg = require('./package.json')

/** @type {import('caz').Template} */
module.exports = {
  name: pkg.name,
  version: pkg.version,
  metadata: {
    // TODO: predefined template metadata
    // e.g. year: new Date().getFullYear()
  },
  prompts: [
    {
      type: 'text',
      name: 'name',
      message: 'Project name'
    },
    {
      type: 'text',
      name: 'version',
      message: 'Project version'
    },
    {
      type: 'text',
      name: 'description',
      message: 'Project description',
      initial: (prev, values) => `A template for creating ${values.name} apps.`
    },
    {
      type: 'text',
      name: 'author',
      message: 'Project author name'
    },
    {
      type: 'text',
      name: 'email',
      message: 'Project author email'
    },
    {
      type: 'text',
      name: 'url',
      message: 'Project author url'
    },
    {
      type: 'text',
      name: 'github',
      message: 'GitHub username or organization',
      initial: 'caz-templates'
    },
    {
      type: 'multiselect',
      name: 'features',
      message: 'Choose the features you need',
      instructions: false,
      choices: [
        { name: 'Feature1', value: 'feature1' },
        { name: 'Feature2', value: 'feature2', selected: true }
      ]
    },
    {
      type: 'confirm',
      name: 'install',
      message: 'Install dependencies',
      initial: true
    },
    {
      type: prev => prev ? 'select' : null,
      name: 'pm',
      message: 'Package manager',
      hint: ' ',
      choices: [
        { title: 'npm', value: 'npm' },
        { title: 'yarn', value: 'yarn' },
        { title: 'pnpm', value: 'pnpm' }
      ]
    }
  ],
  filters: {
    // TODO: custom filters
    // /** @param {{ features: string[] }} answers */
    // 'test/**': answers => answers.features.includes('test'),
    // /** @param {{ features: string[] }} answers */
    // '.travis.yml': answers => answers.features.includes('test')
  },
  helpers: {
    // TODO: custom helpers
    // e.g. upper: str => str.toUpperCase()
  },
  // TODO: install by npm / yarn
  install: 'npm',
  // TODO: git init
  init: true,
  setup: async ctx => {
    // TODO: custom setup hook
  },
  prepare: async ctx => {
    // TODO: custom prepare hook
  },
  emit: async ctx => {
    // TODO: custom emit hook
  },
  complete: async ctx => {
    // TODO: generate complete callback
    // console.clear()
    // console.log(chalk`Created a new project in {cyan ${ctx.project}} by the {blue ${caz.file.tildify(ctx.template)}} template.\n`)
    // console.log('Getting Started:')
    // if (ctx.dest !== process.cwd()) {
    //   console.log(chalk`  $ {cyan cd ${path.relative(process.cwd(), ctx.dest)}}`)
    // }
    // if (ctx.config.install == false) {
    //   console.log(chalk`  $ {cyan npm install} {gray # or yarn}`)
    // }
    // console.log(chalk`  $ {cyan ${config.config.install ? config.config.install : 'npm'} test}`)
    // console.log('\nHappy hacking :)\n')
  }
}
