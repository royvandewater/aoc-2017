const ringNumber = (position) => {
  let i = 1

  while (i ** 2 < position) {
    i += 2
    console.log((i - 1) / 2, i, i ** 2)
  }

  return (i - 1) / 2
}

module.exports = ringNumber
