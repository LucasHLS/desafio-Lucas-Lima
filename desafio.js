const cardapio = [
    { codigo: 'cafe', descricao: 'Café', valor: 300 },
    { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 150 },
    { codigo: 'suco', descricao: 'Suco Natural', valor: 620 },
    { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 650 },
    { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 200 },
    { codigo: 'salgado', descricao: 'Salgado', valor: 725 },
    { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 950 },
    { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 750 }
];
function totalDoPedido(pedido) {
    if (pedido.itens.length === 0) {
        return "Ainda não tem nenhum pedido, fique à vontade para pedir"
    }

    let valorDaCompra = 0;
    let totalPorItem = 0;
    for (const venda of pedido.itens) {

        for (const produto of cardapio) {
            if (produto.codigo === venda.codigo) {
                totalPorItem = venda.quantidade * produto.valor;
                valorDaCompra += totalPorItem;
            }
        }
    }
    if (pedido.formaDePagamento === "dinheiro") {
        valorDaCompra *= 0.95;
    } else if (pedido.formaDePagamento === "credito") {
        valorDaCompra *= 1.03;
    } else {
        valorDaCompra
    }
    console.log(`Valor do seu pedido: R$ ${(valorDaCompra / 100).toFixed(2)}`)
}

const pedido = {
    codigoPedido: 1,
    itens: [{
        codigo: "cafe",
        quantidade: 2
    }, {
        codigo: "chantily",
        quantidade: 1
    }],
    formaDePagamento: "dinheiro"
}
totalDoPedido(pedido)