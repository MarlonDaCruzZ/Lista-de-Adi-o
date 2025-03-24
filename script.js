let valorOrcamento = 0
let totalGasto = 0
let listaItens = []


function adicionarItem() {
  const item = document.getElementById('itemInserido').value
  const gasto = parseFloat(document.getElementById('valorItem').value)
  const orcamento = parseFloat(document.getElementById('orcamentoTotal').value)


  if (!item || isNaN(gasto) || gasto < 0) {
    alert('Por favor inserir corretamente o valor do item')
  }

  totalGasto += gasto
  if (isNaN(orcamento) || orcamento < 0 || totalGasto > orcamento || isNaN(gasto)) {
    alert('Orçamento estourado')
    return
  } else {
    listaItens.push({ item, gasto })
  }


  atualizarLista(item, gasto, listaItens.length - 1)

  document.getElementById("itemInserido").value = ' '
  document.getElementById("valorItem").value = ' '

  item.focus()
}

function atualizarLista(item, gasto, id) {
  const itens = document.createElement('li')
  const lista = document.getElementById("listaItens")
  const valor = parseFloat(document.getElementById('orcamentoTotal').value)


  itens.innerHTML = `<h3>Item: ${item} R$ ${gasto}</h3><button id="btn-remover"onclick= "removerItem(${id})">Remover</button>`

  lista.appendChild(itens)
  console.log(listaItens)

  const total = valor - totalGasto
  document.getElementById("saldoRestante").innerText = `Saldo Restante: ${total}`

}

function removerItem(id) {
  // Remover item da listaItens
  listaItens = listaItens.filter((_, index) => index !== id)

  // Atualizar a lista na página
  const lista = document.getElementById("listaItens")
  lista.innerHTML = ''
  listaItens.forEach((item, index) => atualizarLista(item.item, item.gasto, index)) // Recriar a lista

  console.log(listaItens)
}


