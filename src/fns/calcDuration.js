import humanizeDuration from 'humanize-duration'

module.exports = function calcDuration (utcString) {
  const diff = new Date() - new Date(utcString)
  const humanString = humanizeDuration(diff, {
    largest: 2,
    round: true,
    conjunction: ' and '
  })
  return {
    milliseconds: diff,
    toString: () => humanString
  }
}
