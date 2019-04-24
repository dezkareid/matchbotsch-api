module.exports = {
  accessType: process.env.ACCESS_TYPE || 'user',
  credentials: {
    user: {
      id: process.env.USER_ID,
      key: process.env.USER_KEY
    },
    partner: {
      id: process.env.PARTNER_ID,
      key: process.env.PARTNER_KEY
    }
  }
}
