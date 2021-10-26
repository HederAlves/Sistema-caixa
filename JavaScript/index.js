
	var valorHTML = document.querySelector('[data-painel-valor]');
	var gerarNotaHTML = document.querySelector('[data-gerar-nota]');
	var comprovantePagamento = document.querySelector('[data-comprovante-pagamento]');
	var resetaComprovante = document.querySelector('[data-comprovante-pagamento]');
	var movimentoDiario = document.querySelector('[data-movimento-diario]');
	
	function dataHoraComprovante() {
	
		var data = new Date();
		data = "Data: " +  corrigir(data.getDate()) + "/" + corrigir(data.getMonth()+1) + "/" + 
		corrigir(data.getFullYear()) + "<br>" + "Horário: " + corrigir(data.getHours()) + ":" + 
		corrigir(data.getMinutes());
		return data;
	}

	function corrigir(numero) {
		if(numero <10) {
			numero = '0' + numero;
	}
		return numero;
	}

	var compra = {

	caixa: 0,

	movimentacao: [],
	movimentoTotal: [],

	valorRecebido: function() {

		var valor = Number(valorHTML.value);
		this.caixa += valor.toFixed(2);
		this.movimentacao.push("Valor recebido R$: " + valor.toFixed(2));
		this.movimentoTotal.push("Valor recebido R$: " + valor.toFixed(2));
		valorHTML.value = "";
		valorHTML.focus();
	},

	valorPagamento: function() {

		var valor = Number(valorHTML.value);

		if(valor>this.caixa) {
			alert("Valor recebido é menor do que o de pagamento!");

		} else {

			this.caixa -= valor.toFixed(2);
			this.movimentacao.push("Valor do pagamento R$: " + valor.toFixed(2) + "<br>");
			this.movimentoTotal.push("Valor do pagamento R$: " + valor.toFixed(2) + "<br>");

			this.movimentacao.push("Valor do troco R$: " + this.caixa.toFixed(2) + 
				"<br><br>" + "Obrigado pela preferência!" + "<br>" + dataHoraComprovante());
			this.movimentoTotal.push("Valor do troco R$: " + this.caixa.toFixed(2) +
				 "<br><br>" + dataHoraComprovante() + "<br>---------------------<br>");
	}
		valorHTML.value = "";
		gerarNotaHTML.focus();

	},

	comprovantePagamento: function() {

		comprovantePagamento.innerHTML = "** Nota para Retirada de Produto **" + "<br><br>";

		for(i=0; i<=this.movimentacao.length-1; i++) {
			comprovantePagamento.innerHTML += this.movimentacao[i] + "<br>";
	}
	},

	resetaComprovante: function() {

		comprovantePagamento.innerHTML = "";
		this.movimentacao.splice(0,5);
		valorHTML.value = " ";
		valorHTML.focus();
		this.caixa = 0;
	},

	movimentoDiario:function() {
		
		movimentoDiario.innerHTML = "** Movimento Diário **" + "<br><br>";
		for(i=0; i<=this.movimentoTotal.length-1; i++) {
			movimentoDiario.innerHTML += this.movimentoTotal[i] + "<br>";
	}
}
}
