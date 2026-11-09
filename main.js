const produtos = [
    {
      nome: "suite luxo",
      categoria: "luxo",
      quantidade: 1,
      preco: 450.00
    },
    {
        nome: "quarto sol",
      categoria: "starndard",
      quantidade: 1,
      preco: 180.00
    },
    {
        nome: "quarto lua",
      categoria: "stardard",
      quantidade: 1,
      preco: 180.00
    },
    {
        nome: "suite master",
      categoria: "premium",
      quantidade: 1,
      preco: 550.00
    },
    {
        nome: "quarto familia",
      categoria: "familia",
      quantidade: 5,
      preco: 350.00
    },
    {
        nome: "quarto jardim",
      categoria: "executivo",
      quantidade: 1,
      preco: 280.00
    },
    {
        nome: "quarto mar",
      categoria: "economico",
      quantidade: 1,
      preco: 150.00
    },
    {
        nome: "suite imperial",
      categoria: "luxo",
      quantidade: 1,
      preco: 600.00
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }
