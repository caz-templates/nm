// @ts-check

const path = require('path')
const { name, version } = require('./package.json')

const date = new Date()

/** @type {import('caz').Template} */
module.exports = {
  name,
  version,
  metadata: {
    year: date.getFullYear(),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    day: String(date.getDate()).padStart(2, '0')
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
        { title: 'Automatic test', value: 'test', selected: true },
        { title: 'TypeScript', value: 'typescript' },
        // { title: 'Rollup', value: 'rollup' },
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
        { value: 'npm' },
        { value: 'yarn' },
        { value: 'pnpm' }
      ]
    }
  ],
  filters: {
    'docs/**': ({ features }) => features.includes('docs'),
    'bin/**': ({ features }) => features.includes('cli'),
    'lib/cli.js': ({ features }) => features.includes('cli') && !features.includes('typescript'),
    'src/cli.ts': ({ features }) => features.includes('cli') && features.includes('typescript'),
    'example/*.js': ({ features }) => features.includes('example') && !features.includes('typescript'),
    'example/*.ts': ({ features }) => features.includes('example') && features.includes('typescript'),
    'test/*.js': ({ features }) => features.includes('test') && !features.includes('typescript'),
    'test/*.ts': ({ features }) => features.includes('test') && features.includes('typescript'),
    'lib/index.js': ({ features }) => !features.includes('typescript'),
    'src/index.ts': ({ features }) => features.includes('typescript'),
    'tsconfig.eslint.json': ({ features }) => features.includes('typescript'),
    'tsconfig.json': ({ features }) => features.includes('typescript')
  },
  install: 'npm',
  init: true,
  setup: async ctx => {
    ctx.config.install = ctx.answers.install && ctx.answers.pm
  },
  complete: async ctx => {
    const client = ctx.config.install ? ctx.config.install : 'npm'
    console.clear()
    console.log(`Created a new project in ${ctx.project} by the ${ctx.template} template.\n`)
    console.log('Getting Started:')
    if (ctx.dest !== process.cwd()) {
      console.log(`  $ cd ${path.relative(process.cwd(), ctx.dest)}`)
    }
    if (ctx.config.install === false) {
      console.log(`  $ ${client} install`)
    }
    if (ctx.answers.features.includes('typescript')) {
      console.log(`  $ ${client} run build`)
    }
    if (ctx.answers.features.includes('test')) {
      console.log(`  $ ${client} test`)
    }
    console.log('\nHappy hacking :)\n')
  }
}
