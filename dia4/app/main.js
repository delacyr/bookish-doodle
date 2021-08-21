import './style.css'

const url = 'http://localhost:3333/cars'
const form = document.querySelector('[data-js="form"]')
const tbody = document.querySelector('[data-js="tbody"]')

async function handleDelete(e) {
  const button = e.target
  const plate = button.dataset.plate

  const result = await fetch(url, {
     method: 'DELETE',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ plate })
  })

  if (result.error) {
    console.log('erro ao deletar', result.message)
    return
  }

  const tr = document.querySelector(`tr[data-plate="${plate}"]`)
  tbody.removeChild(tr)

  button.removeEventListener('click', handleDelete)
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const imagem = document.querySelector('[data-js="url"]')
  const marca = document.querySelector('[data-js="marca"]')
  const ano = document.querySelector('[data-js="ano"]')
  const placa = document.querySelector('[data-js="placa"]')
  const cor = document.querySelector('[data-js="cor"]')

  const car = {
    image: imagem.value,
    brandModel: marca.value,
    year: ano.value,
    plate: placa.value,
    color: cor.value
  }

  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .catch(e => ({ error: true, message: e.message }))

  if (result.error) {
    console.log('Erro ao cadastrar carro', result.message)
    return
  }

  const tr = document.createElement('tr')
  tr.dataset.plate = placa.value

  const button = document.createElement('button')
  button.textContent = 'Excluir'
  button.dataset.plate = car.plate

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
  tr.appendChild(button)

  tbody.appendChild(tr)

  button.addEventListener('click', handleDelete)

  const noCar = document.querySelector('[data-js="nocar"]')
  if (noCar)
    noCar.remove()

  imagem.value = ''
  marca.value = ''
  ano.value = ''
  placa.value = ''
  cor.value = ''

  imagem.focus()
})

async function main() {
  const result = await fetch(url)
    .then(response => response.json())
    .catch(e => ({ error: true, message: e.message }))

  if (result.error) {
    console.log('Erro ao buscar carros', result.message)
    return
  }

  if (result.length === 0) {
    tbody.innerHTML = '<tr><td data-js="nocar" colspan="5">Nenhum carro cadastrado</td></tr>'
    return
  }

  result.forEach(car => {
    const tr = document.createElement('tr')
    tr.dataset.plate = car.plate

    const button = document.createElement('button')
    button.textContent = 'Excluir'
    button.dataset.plate = car.plate

    tr.innerHTML = `
      <td><img src="${car.image}" alt="${car.brandModel}" width="100px" height="100px"></td>
      <td>${car.brandModel}</td>
      <td>${car.year}</td>
      <td>${car.plate}</td>
      <td>${car.color}</td>
    `
    tr.appendChild(button)
    tbody.appendChild(tr)

    button.addEventListener('click', handleDelete)
  })


}

main()

