package funcionalidades;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import pageObjects.MercadoLivroPageObject;
import utils.Resultado;

public class MercadoLivreFuncionalidade {
	MercadoLivroPageObject mercadoLivrePage = new MercadoLivroPageObject();

	public void acessarMercadoLivre() {
		mercadoLivrePage.acessar();
	}

	public void realizarPesquisa(DataTable data) {
		for (Map<String, String> map : data.asMaps(String.class, String.class)) {
			mercadoLivrePage.setBarraBusca(map.get("Parametro de busca"));
		}
		mercadoLivrePage.clickBotaoBusca();
		mercadoLivrePage.clickListaLinha();
		mercadoLivrePage.carregamentoPagina();
	}

	public void resultadoBusca(String arg) throws InterruptedException {

		int n = Integer.parseInt(arg);
		List<Resultado> resultados = mercadoLivrePage.getListaResultados(n);

		for (int i = 0; i < resultados.size(); i++ ) {
			System.out.println("\nTitulo do Resultado: " +i+1+ resultados.get(i).getTitulo());
			System.out.println("\nPreço do Resultado: " +i+1+ resultados.get(i).getPreco() + "\n");
		}
		mercadoLivrePage.fechar();
	}

	public void localizarPenultimoItem(int indicePagina) throws IOException, InterruptedException {
		mercadoLivrePage.navigateToPage(indicePagina);
		mercadoLivrePage.acessarPenultimoResultado();
		mercadoLivrePage.fechar();
	}
}
