package step;

import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import funcionalidades.MercadoLivreFuncionalidade;

public class MercadoLivreStep {
	MercadoLivreFuncionalidade mercadoLivreFuncionalidade = new MercadoLivreFuncionalidade();

	@Dado("^que eu acesse o site do mercado livre$")
	public void que_eu_acesse_o_site_do_mercado_livre() throws Throwable {
		mercadoLivreFuncionalidade.acessarMercadoLivre();
	}

	@Quando("^eu realizar uma pesquisa no site$")
	public void que_eu_tenha_realizado_uma_pesquisa_no_site(DataTable data) throws Throwable {
		mercadoLivreFuncionalidade.realizarPesquisa(data);
		Thread.sleep(5000);
	}

	@Entao("^obtenho o titulo e o valor dos (\\d+) primeiros resultados$")
	public void obtenho_o_titulo_e_o_valor_dos_primeiros_resultados(String arg) throws Throwable {
		mercadoLivreFuncionalidade.resultadoBusca(arg);
	}

	@Entao("^localizar o penultimo resultado da pagina (\\d+)$")
	public void localizar_o_penultimo_resultado_da_pagina(int arg1) throws Throwable {
		mercadoLivreFuncionalidade.localizarPenultimoItem(arg1);
	}

}
