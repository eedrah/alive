module.exports = function verifyHttps (callback) {
  const isProd = process.env.NODE_ENV === 'production'
  if (isProd) {
    if ((window.location.host === 'eedrah.com') && (window.location.protocol !== 'https:')) {
      window.location.protocol = 'https'
    } else {
      callback()
    }
  } else {
    callback()
  }
}
