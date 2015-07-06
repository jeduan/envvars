'use strict'
var camelCase = require('camelcase')

module.exports = function envVars (text, options) {
  if (typeof text !== 'string') throw new TypeError('Expected a string')
  var regex = /^export ([A-Z_]+)="?([^\"]+)"?$/

  return text.split('\n').reduce(function (memo, line) {
    var result = regex.exec(line)
    if (result == null) return memo

    var key = camelCase(result[1])
    memo[key] = result[2]
    return memo
  }, {})
}
