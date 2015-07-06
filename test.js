'use strict'
var test = require('tape')
var envVars = require('./')

test('basic variables', function (t) {
  var input = 'export FOO=1'
  var result = envVars(input)
  t.deepEqual({foo: '1'}, result, 'supports basic variables')
  t.end()
})

test('camelize', function (t) {
  var input = 'export FOO_BAR=bar'
  var result = envVars(input)
  t.deepEqual({fooBar: 'bar'}, result, 'camelizes the object keys')
  t.end()
})

test('quotes', function (t) {
  var input = 'export FOO_BAR_BAZ="foo-bar-baz"'
  var result = envVars(input)
  t.deepEqual({fooBarBaz: 'foo-bar-baz'}, result, 'supports quotes')
  t.end()
})

test('ignore lines thtat don\'t export a variable', function (t) {
  var input = 'export FOO=foo\necho "hello world"\nexport BAR="bar"'
  var result = envVars(input)
  t.deepEqual(result, {foo: 'foo', bar: 'bar'}, 'object ignores lines that don\'t export a variable')
  t.end()
})
