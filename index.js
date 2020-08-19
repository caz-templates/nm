// @ts-check

// !!! Sharing the dependencies of caz
module.paths = module.parent.paths

const path = require('path')
const chalk = require('chalk')
const { name, version } = require('./package.json')

const date = new Date()

/** @type {import('caz').Template} */
module.exports = {
  name,
  version,
  metadata: {
    year: date.getFullYear(),
    month: ('0' + (date.getMonth() + 1)).substr(-2),
    day: ('0' + date.getDate()).substr(-2)
  },
  prompts: [
    {
      name: 'name',
      type: 'text',
      message: 'Project name'
    },
    {
      name: 'version',
      type: 'text',
      message: 'Project version'
    },
    {
      name: 'description',
      type: 'text',
      message: 'Project description',
      initial: 'Awesome node modules.'
    },
    {
      name: 'author',
      type: 'text',
      message: 'Project author name'
    },
    {
      name: 'email',
      type: 'text',
      message: 'Project author email'
    },
    {
      name: 'url',
      type: 'text',
      message: 'Project author url'
    },
    {
      name: 'license',
      type: 'select',
      message: 'Project license',
      hint: ' ',
      choices: [
        { value: 'MIT' },
        { value: 'BSD-3-Clause' },
        { value: 'Apache' },
        { value: 'Unlicense' }
      ]
    },
    {
      name: 'github',
      type: 'text',
      message: 'GitHub username or organization',
      initial: 'zce'
    },
    {
      name: 'features',
      type: 'multiselect',
      message: 'Choose the features you need',
      instructions: false,
      choices: [
        { title: 'TypeScript', value: 'typescript' },
        // { title: 'Rollup', value: 'rollup' },
        { title: 'Automatic test', value: 'test', selected: true },
        { title: 'CLI Program', value: 'cli' },
        { title: 'Additional docs', value: 'docs' },
        { title: 'Additional examples', value: 'example' }
      ]
    },
    {
      name: 'install',
      type: 'confirm',
      message: 'Install dependencies',
      initial: true
    },
    {
      name: 'pm',
      type: prev => process.env.NODE_ENV === 'test' || prev ? 'select' : null,
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
    /** @param {{ features: string[] }} answers */
    'bin/**': answers => answers.features.includes('cli'),
    /** @param {{ features: string[] }} answers */
    'docs/**': answers => answers.features.includes('docs'),
    /** @param {{ features: string[] }} answers */
    'example/*.js': answers => answers.features.includes('example') && !answers.features.includes('typescript'),
    /** @param {{ features: string[] }} answers */
    'example/*.ts': answers => answers.features.includes('example') && answers.features.includes('typescript'),
    /** @param {{ features: string[] }} answers */
    'lib/index.js': answers => !answers.features.includes('typescript'),
    /** @param {{ features: string[] }} answers */
    'lib/cli.js': answers => answers.features.includes('cli') && !answers.features.includes('typescript'),
    /** @param {{ features: string[] }} answers */
    'src/index.ts': answers => answers.features.includes('typescript'),
    /** @param {{ features: string[] }} answers */
    'src/cli.ts': answers => answers.features.includes('cli') && answers.features.includes('typescript'),
    /** @param {{ features: string[] }} answers */
    'test/*.js': answers => answers.features.includes('test') && !answers.features.includes('typescript'),
    /** @param {{ features: string[] }} answers */
    'test/*.ts': answers => answers.features.includes('test') && answers.features.includes('typescript'),
    /** @param {{ features: string[] }} answers */
    '.travis.yml': answers => answers.features.includes('test'),
    /** @param {{ features: string[] }} answers */
    'tsconfig.json': answers => answers.features.includes('typescript')
  },
  init: true,
  setup: async ctx => {
    ctx.config.install = ctx.answers.install && ctx.answers.pm
  },
  complete: async ctx => {
    console.clear()
    console.log(chalk`Created a new project in {cyan ${ctx.project}} by the {blue ${ctx.template}} template.\n`)
    console.log('Getting Started:')
    if (ctx.dest !== process.cwd()) {
      console.log(chalk`  $ {cyan cd ${path.relative(process.cwd(), ctx.dest)}}`)
    }
    if (ctx.config.install === false) {
      console.log(chalk`  $ {cyan npm install} {gray # or yarn}`)
    }
    console.log(chalk`  $ {cyan ${ctx.config.install ? ctx.config.install : 'npm'} test}`)
    console.log('\nHappy hacking :)\n')
  }
}
