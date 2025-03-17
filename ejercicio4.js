//1.
function findArrayIndex(array, text) {
  //Tu codigo
  let contador = 0
  for (const element of array) {
    if (element == text) {
      return contador
    } else {
      contador++
    }
  }
  return -1
}
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
console.log(findArrayIndex(mainCharacters, 'Rey'))
//2.
function removeItem(array, text) {
  let indice = findArrayIndex(array, text)
  if (indice != -1) {
    array.splice(indice, 1)
  }
  return array
}

console.log(removeItem(mainCharacters, 'Han Solo'))
