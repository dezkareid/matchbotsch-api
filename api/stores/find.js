const stores = [

  {
    "id": 149914,
    "name": "CALZ. DEL EJERCITO #1396, COL. QUINTA VELARDE, Guadalajara, JA 44430, MX",
    "address": {
      "address1": "CALZ. DEL EJERCITO #1396",
      "address2": "COL. QUINTA VELARDE",
      "city": "Guadalajara",
      "state": "JA",
      "zipCode": "44430",
      "country": "MX"
    },
    "pickUp": false,
    "hotshot": 100,
    "dropship": false,
    "shippingMethods": [],
    "distance": 3,
    "supplier": {
      "credentialsFormat": [
        {
          "label": "Autozone PIN",
          "internalName": "customerNumber",
          "type": "text"
        }
      ],
      "lockedStore": false,
      "id": 2501,
      "name": "AutoZone"
    }
  },
  {
    "id": 149919,
    "name": "Av. Revolución #705, Col. General Real, Guadalajara, JA 44890, MX",
    "address": {
      "address1": "Av. Revolución #705",
      "address2": "Col. General Real",
      "city": "Guadalajara",
      "state": "JA",
      "zipCode": "44890",
      "country": "MX"
    },
    "pickUp": false,
    "hotshot": 100,
    "dropship": false,
    "shippingMethods": [],
    "distance": 4,
    "supplier": {
      "credentialsFormat": [
        {
          "label": "SpeedDIAL User ID",
          "internalName": "customerNumber",
          "type": "text"
        },
        {
          "label": "SpeedDIAL Password",
          "internalName": "password",
          "type": "password"
        }
      ],
      "lockedStore": false,
      "id": 15061,
      "name": "WORLDPAC"
    }
  },
  {
    "id": 149915,
    "name": "CALZADA INDEPENDENCIA NORTE # 2109, COL. MONUMENTAL, Guadalajara, JA 44320, MX",
    "address": {
      "address1": "CALZADA INDEPENDENCIA NORTE # 2109",
      "address2": "COL. MONUMENTAL",
      "city": "Guadalajara",
      "state": "JA",
      "zipCode": "44320",
      "country": "MX"
    },
    "pickUp": false,
    "hotshot": 0,
    "dropship": true,
    "shippingMethods": [
      "USPS",
      "UPS",
      "FedEx"
    ],
    "distance": 5,
    "supplier": {
      "credentialsFormat": [
        {
          "label": "Autozone PIN",
          "internalName": "customerNumber",
          "type": "text"
        }
      ],
      "lockedStore": false,
      "id": 2501,
      "name": "AutoZone"
    }
  },
  {
    "id": 149916,
    "name": "FRANCISCO SILVA ROMERO # 260, COL. LOMAS DE TLAQUEPAQUE, San Pedro Tlaquepaque, JA 45559, MX",
    "address": {
      "address1": "FRANCISCO SILVA ROMERO # 260",
      "address2": "COL. LOMAS DE TLAQUEPAQUE",
      "city": "San Pedro Tlaquepaque",
      "state": "JA",
      "zipCode": "45559",
      "country": "MX"
    },
    "pickUp": false,
    "hotshot": 0,
    "dropship": true,
    "shippingMethods": [
      "USPS",
      "UPS",
      "FedEx"
    ],
    "distance": 5,
    "supplier": {
      "credentialsFormat": [
        {
          "label": "Autozone PIN",
          "internalName": "customerNumber",
          "type": "text"
        }
      ],
      "lockedStore": false,
      "id": 2501,
      "name": "AutoZone"
    }
  },
  {
    "id": 149918,
    "name": "Avenida Felipe Ángeles No. 333-A, Col. Progreso, Guadalajara, JA 44730, MX",
    "address": {
      "address1": "Avenida Felipe Ángeles No. 333-A",
      "address2": "Col. Progreso",
      "city": "Guadalajara",
      "state": "JA",
      "zipCode": "44730",
      "country": "MX"
    },
    "pickUp": false,
    "hotshot": 100,
    "dropship": false,
    "shippingMethods": [],
    "distance": 6,
    "supplier": {
      "credentialsFormat": [
        {
          "label": "TAMS Password",
          "internalName": "customerNumber",
          "type": "text"
        }
      ],
      "lockedStore": false,
      "id": 15110,
      "name": "NAPA Auto Parts"
    }
  }
]

function find (req, res) {
  const name = req.query.name.toLowerCase()
  console.log(name)
  const filteredStores = stores.filter(store => store.supplier.name.toLowerCase().indexOf(name) > -1)
  res.json({ stores: filteredStores })
}

module.exports = find
