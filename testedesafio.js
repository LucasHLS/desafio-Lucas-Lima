class CaixaDaLanchonete {
    constructor() {
        this.cardapio = [
            { codigo: 'cafe', descricao: 'Café', valor: 300 },
            { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 150 },
            { codigo: 'suco', descricao: 'Suco Natural', valor: 620 },
            { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 650 },
            { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 200 },
            { codigo: 'salgado', descricao: 'Salgado', valor: 725 },
            { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 950 },
            { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 750 }
        ];
        this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
    }
    calcularValorDaCompra(formaDePagamento, itens) {
        if (pedido.itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let valorDaCompra = 0;

        for (const venda of pedido.itens) {
            for (const produto of cardapio) {
                if (produto.codigo === venda.codigo) {
                    valorDaCompra += venda.quantidade * produto.valor;
                }
            }
        }
        if (formasDePagamento === "dinheiro") {
            valorDaCompra *= 0.95;
        } else if (formasDePagamento === "credito") {
            valorDaCompra *= 1.03;
        } else if (formasDePagamento !== "debito") {
            return "Forma de pagamento inválida!";
        }
    }
}


for (const venda of pedido.itens) {
    const produto = cardapio.find(item => item.codigo === venda.codigo);

    if (!produto) {
        return "Item inválido!";
    }

    if (venda.quantidade === 0) {
        return "Quantidade inválida!";
    }

    if (produto.descricao.includes("extra") && !pedido.itens.some(item => item.codigo === produto.codigo.replace('extra', ''))) {
        return "Item extra não pode ser pedido sem o principal.";
    }

    console.log(`Valor do seu pedido: R$ ${(valorDaCompra / 100).toFixed(2)}`);
}

const pedido = {
    codigoPedido: 1,
    itens: [
        { codigo: "cafe", quantidade: 2 },
        { codigo: "chantily", quantidade: 1 }
    ],
};

calcularValorDaCompra(pedido);
