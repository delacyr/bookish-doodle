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

let selectList = document.createElement("select");
selectList.id = "mySelect";
form.appendChild(selectList);

colorName.map((name,index) => {
  const option = document.createElement("option");
  option.value = colorCode[index];
  option.text = name;
  selectList.appendChild(option);
})

selectList.addEventListener('change', (e) => {
  document.querySelector('body').style.background = e.target.value;
})
