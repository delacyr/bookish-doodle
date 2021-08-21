import './style.css'
import './cars'

fetch('http://localhost:3333/cars')
  .then(response => response.json())
  .then(data => fillTables(data))

function fillTables(data) {
  const tbody = document.querySelector('[data-js="tbody"]')

  if (data.length == 0) {
    tbody.innerHTML = '<tr><td colspan="5">Nenhum carro cadastrado</td></tr>'
    return
  }

  data.forEach(car => {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td><img src="${car.image}" alt="${car.brandModel}" width="100px" height="100px"></td>
      <td>${car.brandModel}</td>
      <td>${car.year}</td>
      <td>${car.plate}</td>
      <td>${car.color}</td>
      <td>
        <button data-js="delete" data-id="${car.id}">Excluir</button>
      </td>
    `
    tbody.appendChild(tr)
  })
}
