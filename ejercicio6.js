const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
function swap(array, par1, par2) {
  ;[array[par1], array[par2]] = [array[par2], array[par1]]
  return array
}
console.log(swap(fantasticFour, 1, 3))
