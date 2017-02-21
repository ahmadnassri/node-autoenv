'use strict'

const tap = require('tap')

tap.test('autoenv', assert => {
  assert.plan(1)

  require('./index')

  assert.equal(process.env.FOO, 'bar')
})
