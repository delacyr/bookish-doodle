import './style.css'

function changeVisibility() {
  let div = document.querySelector('[data-js="app"]')
  div.style.display = div.style.display == 'none' ? 'block' : 'none'
}

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const button = document.querySelector('[data-js="button"]')
button.addEventListener('click', () => changeVisibility(), false)
