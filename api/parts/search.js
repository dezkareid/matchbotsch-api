const partsModule = require('../../modules/parts')
const authModule = require('../../modules/authentication')

function search (req, res) {
  const { year, make, model, submodel, part } = req.body
  authModule.requestToken()
    .then(() => partsModule.search(year, make, model, submodel, part))
    .then(parts => res.json({ parts: parts.slice(0, 4) }))
    .catch(console.error)
}

module.exports = search
