const app = document.querySelector('[data-js="app"]')
const form = document.querySelector('[data-js="form"]')
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

const colorName = ["Azul", "Verde", "Vermelho", "Amarelo", "Roxo"]
const colorCode = ["#0000cc", "#33cc33", "#ff0000", "#ffff00", "#993399"]

const br = document.createElement('br')
const selectList = document.createElement("select")
selectList.id = "choice"
selectList.multiple = true
form.appendChild(br)
form.appendChild(selectList)

colorName.map((name,index) => {
  const option = document.createElement("option")
  option.value = colorCode[index]
  option.text = name
  selectList.appendChild(option)
})

const select = document.querySelector('select')

select.addEventListener('change', (e) => {
  const selected = [...select.selectedOptions].map((option) => option.value)

  let colors = document.querySelector('[data-js="colors"]')

  if (colors){
    colors.remove()
  }

  colors = document.createElement('div')
  colors.setAttribute('data-js', 'colors')
  form.appendChild(colors)

  selected.map((option) => {
    const color = document.createElement('div')
    color.setAttribute('data-js', option)
    color.style.backgroundColor = option
    color.style.width = "100px"
    color.style.height = "20px"
    color.textContent = option
    colors.appendChild(color)
  })
})
