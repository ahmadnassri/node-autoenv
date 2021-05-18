const { test } = require('tap')

const autoenv = require('../lib')

test('default cwd', assert => {
  assert.plan(1)

  autoenv()

  assert.equal(process.env.FOO, undefined)
})

test('custom root', assert => {
  assert.plan(1)

  process.env.NODE_ENV = 'test'

  autoenv(__dirname)

  assert.equal(process.env.FOO, 'bar')
})
