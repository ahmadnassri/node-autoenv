const { test } = require('node:test')

const autoenv = require('../lib')

test('default cwd', t => {
  t.plan(1)

  autoenv()

  t.assert.equal(process.env.FOO, undefined)
})

test('custom root', t => {
  t.plan(1)

  process.env.NODE_ENV = 'test'

  autoenv(__dirname)

  t.assert.equal(process.env.FOO, 'bar')
})
