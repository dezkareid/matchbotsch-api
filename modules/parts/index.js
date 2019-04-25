const { makeAuthRequest } = require('../authentication')

function getMakeId (year, makeName) {
  const options = {
    method: 'GET'
  }

  const makerNameNormalized = makeName.toLowerCase()

  const url = `https://api.beta.partstech.com/taxonomy/vehicles/makes?year=${year}`

  return makeAuthRequest(url, options)
    .then(response => response.json())
    .then(makers => {
      return makers.filter(maker => {
        return maker.makeName.toLowerCase() === makerNameNormalized
      })
    })
    .then(makers => {
      return makers[0].makeId
    })
}

function getModel (year, makeId, model) {
  const options = {
    method: 'GET'
  }

  const modelNameNormalized = model.toLowerCase()

  const url = `https://api.beta.partstech.com/taxonomy/vehicles/models?year=${year}&make=${makeId}`

  return makeAuthRequest(url, options)
    .then(response => response.json())
    .then(models => models.filter(model => model.modelName.toLowerCase() === modelNameNormalized))
    .then(models => models[0].modelId)
}

function getSubModelId (year, makeId, modelId, submodel) {
  const options = {
    method: 'GET'
  }

  const submodelNameNormalized = submodel.toLowerCase()
  const url = `https://api.beta.partstech.com/taxonomy/vehicles/submodels?year=${year}&make=${makeId}&model=${modelId}`
  return makeAuthRequest(url, options)
    .then(response => response.json())
    .then(submodels => submodels.filter(submodel => submodel.submodelName.toLowerCase() === submodelNameNormalized))
    .then(submodels => {
      return submodels && submodels[0].submodelId
    })
}

function getEngine (year, makeId, modelId, submodelId) {
  const options = {
    method: 'GET'
  }

  const url = `https://api.beta.partstech.com/taxonomy/vehicles/engines?year=${year}&make=${makeId}&model=${modelId}&submodel=${submodelId}`
  return makeAuthRequest(url, options)
    .then(response => response.json())
    .then(engines => engines[0])
}

function getParts (searchBody) {
  const options = {
    method: 'POST',
    body: JSON.stringify(searchBody)
  }
  const url = `https://api.beta.partstech.com/catalog/search`
  return makeAuthRequest(url, options)
    .then(response => response.json())
}

function transformPart (part) {
  return {
    partNumber: part.partNumber,
    partName: part.partName,
    retailer: part.brand.displayName,
    image: (part.images && part.images[0] && part.images[0].preview) || 'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
    details: part.partsTechCatalogURL
  }
}

function search (year, make, model, submodel, part) {
  const vehicleParams = {
    yearId: year
  }
  const searchBody = {
    searchParams: {
      vehicleParams,
      keyword: part
    }
  }
  return getMakeId(year, make)
    .then(makeId => { vehicleParams.makeId = makeId })
    .then(() => getModel(year, vehicleParams.makeId, model))
    .then(modelId => { vehicleParams.modelId = modelId })
    .then(() => getSubModelId(year, vehicleParams.makeId, vehicleParams.modelId, submodel))
    .then(submodelId => {
      if (submodelId) {
        vehicleParams.subModelId = submodelId
      }
    })
    .then(() => getEngine(year, vehicleParams.makeId, vehicleParams.modelId, vehicleParams.subModelId))
    .then(engine => {
      vehicleParams.engineId = engine.engineId
      vehicleParams.engineParams = engine.engineParams
    })
    .then(() => getParts(searchBody))
    .then((searchResult) => {
      return searchResult.parts.map(transformPart)
    })
}

module.exports = {
  getMakeId,
  getModel,
  getSubModelId,
  search
}
