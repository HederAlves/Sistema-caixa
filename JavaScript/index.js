
	var saidaCaixa = document.querySelector('[data-valor-caixa]');
	var comprovantePagamento = document.querySelector('[data-comprovante-pagamento]');
	var valorHTML = document.querySelector('[data-painel-valor]');

	var compra = {

	caixa: 0,

	movimentacao: [],

	valorRecebido: function() {

		this.caixa += Number(valorHTML.value);
		this.movimentacao.push("Valor recebido " + valorHTML.value);
		valorHTML.value = "";
		valorHTML.focus();
	},

	valorPagamento: function() {

		var valor = Number(valorHTML.value);

		if(valor>this.caixa) {
			alert("Valor recebido é menor do que o de pagamento!");

		} else {
			this.caixa -= valor;
			this.movimentacao.push("Valor do pagamento " + valor + "<br>");
	}
		saidaCaixa = this.caixa;
		this.movimentacao.push("Valor do troco " + saidaCaixa + "<br><br>" + "Obrigado pela preferência!");
		valorHTML.value = "";
		valorHTML.focus();

	},

	comprovantePagamento: function() {

		comprovantePagamento.innerHTML = "** Nota para Retirada de Produto **" + "<br><br>";

		for(i=0; i<=this.movimentacao.length-1; i++) {
			comprovantePagamento.innerHTML += this.movimentacao[i] + "<br>";

	}
			
	}

	}
