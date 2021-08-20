const inputName = document.querySelector('[data-js="name"]')

inputName.addEventListener('input', (e) => {
  e.target.value = capitalize(e.target.value)
})

const preps = ['de', 'da', 'do', 'dos', 'De', 'Da', 'Do', 'Dos']

function capitalize(string) {
  const arr = string.split(' ')
  const newArr = arr.map((word) => {
    console.log(word)
    if (!preps.includes(word))
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    else
      return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase()
  })
  return newArr.join(' ')
}
