const max = require('lodash/fp/max')
const ringNumber = require('./ringNumber')

// 1 | 2 3 4 5 6 7 8 9 | 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 | 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 |
// 0 | 0 1 0 1 0 1 0 1 |  1  0  1  2  1  0  1  2  1  0  1  2  1  0  1  2 |  2  1  0  1  2  3  2  1  0  1  2  3  2  1  0  1  2  3  2  1  0  1  2  3 |

const midPoints = (ringNo) => {
  const points = []

  for (let i = 0; i < 4; i += 1) {
    const r1 = ringNo + 1
    const n = i + ringNo
    points.push(n * r1)
  }

  return points
}

const offset = (position) => {
  if (position < 2) return 0

  console.log('midPoints(1)', JSON.stringify(midPoints(1)))
  console.log('midPoints(2)', JSON.stringify(midPoints(2)))
  console.log('midPoints(3)', JSON.stringify(midPoints(3)))
  console.log('midPoints(4)', JSON.stringify(midPoints(4)))

  return 0
}

module.exports = offset
