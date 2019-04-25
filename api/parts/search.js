const partsModule = require('../../modules/parts')
const authModule = require('../../modules/authentication')
const cachedResponse = {
  "parts": [
    {
      "partNumber": "042-1778",
      "partName": "Beck/Arnley Air Filter",
      "retailer": "Beck/Arnley",
      "image": "https://img1.partstech.com/d1/images/9a/05/2a/w110_9a052a067cb30ce4ac0c575e5b8a8cfd6822862d.png",
      "price": "$250",
      "details": "https://punchout.beta.partstech.com/Beck-Arnley-Air-Filter/details/BBGB-042-1778?part_term=6192"
    },
    {
      "partNumber": "AF1395",
      "partName": "Hastings Air Filter",
      "retailer": "Hastings",
      "image": "https://img1.partstech.com/d6/images/09/11/7f/w110_09117f9d42e62d6fece5353a27cf83678330bb54.png",
      "price": "$250",
      "details": "https://punchout.beta.partstech.com/Hastings-Air-Filter/details/BBTS-AF1395?part_term=6192"
    },
    {
      "partNumber": "49056",
      "partName": "Wix Air Filter",
      "retailer": "Wix",
      "image": "https://img1.partstech.com/d8/images/b1/bd/b2/w110_b1bdb28d13616d8fd2d36c991906031b95e65e51.png",
      "price": "$250",
      "details": "https://punchout.beta.partstech.com/Wix-Air-Filter/details/BDCS-49056?part_term=6192"
    },
    {
      "partNumber": "RA-152",
      "partName": "ATP Premium Line",
      "retailer": "ATP",
      "image": "https://img1.partstech.com/d8/images/f8/0f/d4/w110_f80fd4d398cdb76f4e366e90d8bc6551591814b3.png",
      "price": "$250",
      "details": "https://punchout.beta.partstech.com/ATP-Cabin-Air-Filter/details/BBFB-RA-152?part_term=6832"
    }
  ]
}
function search (req, res) {
  return res.json(cachedResponse)
  /*
    const { year, make, model, submodel, part } = req.body
    authModule.requestToken()
      .then(() => partsModule.search(year, make, model, submodel, part))
      .then(parts => res.json({ parts: parts.slice(0, 4) }))
      .catch(console.error)
  */
}

module.exports = search
