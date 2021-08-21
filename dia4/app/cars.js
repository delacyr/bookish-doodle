const form = document.querySelector('[data-js="form"]')
const tbody = document.querySelector('[data-js="tbody"]')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const imagem = document.querySelector('[data-js="url"]')
  const marca = document.querySelector('[data-js="marca"]')
  const ano = document.querySelector('[data-js="ano"]')
  const placa = document.querySelector('[data-js="placa"]')
  const cor = document.querySelector('[data-js="cor"]')

  const tr = document.createElement('tr')
  const tdImagem = document.createElement('td')
  const tdMarca = document.createElement('td')
  const tdAno = document.createElement('td')
  const tdPlaca = document.createElement('td')
  const tdCor = document.createElement('td')

  tdImagem.innerHTML =
  `<img src="${imagem.value}" alt="${marca.value}" width="100px" height="100px">`
  tdMarca.innerHTML = marca.value
  tdAno.innerHTML = ano.value
  tdPlaca.innerHTML = placa.value
  tdCor.innerHTML = cor.value

  tr.appendChild(tdImagem)
  tr.appendChild(tdMarca)
  tr.appendChild(tdAno)
  tr.appendChild(tdPlaca)
  tr.appendChild(tdCor)

  tbody.appendChild(tr)

  imagem.value = ''
  marca.value = ''
  ano.value = ''
  placa.value = ''
  cor.value = ''

  imagem.focus()
})
