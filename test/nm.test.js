const fs = require('fs')
const path = require('path')
const { default: caz, inject } = require('caz')

const template = path.join(__dirname, '..')
const temp = path.join(__dirname, '..', 'dist')

beforeAll(async () => {
  jest.spyOn(console, 'log').mockImplementation()
  jest.spyOn(console, 'clear').mockImplementation()
})

afterAll(async () => {
  jest.clearAllMocks()
  fs.rmdirSync(temp, { recursive: true })
})

test('minimal', async () => {
  inject([
    'minimal',
    '0.1.0',
    'minimal template',
    'zce',
    'w@zce.me',
    'https://zce.me',
    'MIT',
    'zce',
    [],
    false,
    'npm'
  ])

  const project = path.join(temp, 'minimal')

  await caz(template, project, { force: true })

  expect(fs.existsSync(project)).toBe(true)
  expect(fs.existsSync(path.join(project, 'README.md'))).toBe(true)
})

test('maximal', async () => {
  inject([
    'maximal',
    '0.1.0',
    'maximal template',
    'zce',
    'w@zce.me',
    'https://zce.me',
    'MIT',
    'zce',
    [
      'feature1',
      'feature2'
    ],
    true,
    'npm'
  ])

  const project = path.join(temp, 'maximal')

  await caz(template, project, { force: true })

  expect(fs.existsSync(project)).toBe(true)
  expect(fs.existsSync(path.join(project, 'README.md'))).toBe(true)
})
