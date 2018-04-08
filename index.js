const getOptions = require('loader-utils').getOptions

const arrify = (x) => Array.isArray(x) ? x : [x]

module.exports = function (source) {
  const options = getOptions(this)
  const data = JSON.parse(source)

  let keys = Object.keys(data).filter((key) => !key.startsWith('_'))
  if (options && options.only !== undefined) keys = arrify(options.only)

  const result = {}
  for (let key of keys) result[key] = data[key]
  return JSON.stringify(result, null, 2)
}
