const fakeParts = {
  parts: [
    {
      partNumber: '253626',
      retailer: 'Don Pepe',
      image: 'https://refaccionariamario.info/26791-tm_large_default/bujia-bosch-fr7ldc.jpg',
      price: '250'
    },
    {
      partNumber: '253626',
      retailer: 'Don Pepe',
      image: 'https://refaccionariamario.info/26791-tm_large_default/bujia-bosch-fr7ldc.jpg',
      price: '250'
    },
    {
      partNumber: '253626',
      retailer: 'Don Pepe',
      image: 'https://refaccionariamario.info/26791-tm_large_default/bujia-bosch-fr7ldc.jpg',
      price: '250'
    },
    {
      partNumber: '253626',
      retailer: 'Don Pepe',
      image: 'https://refaccionariamario.info/26791-tm_large_default/bujia-bosch-fr7ldc.jpg',
      price: '250'
    },
    {
      partNumber: '253626',
      retailer: 'Don Pepe',
      image: 'https://refaccionariamario.info/26791-tm_large_default/bujia-bosch-fr7ldc.jpg',
      price: '250'
    }
  ]
}

function search (req, res) {
  res.json(fakeParts)
}

module.exports = search
