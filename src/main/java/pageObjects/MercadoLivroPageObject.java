package pageObjects;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import utils.Resultado;

public class MercadoLivroPageObject {
	public MercadoLivroPageObject() {
		super();
	}

	private static final String URL = "https://www.mercadolivre.com.br";

	public static WebDriver driver;

	public void acessar() {
		System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\firefoxDriver\\geckodriver.exe");
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.navigate().to(URL);
	}

	public WebElement getBarraBusca() {
		WebElement campoBusca;
		return campoBusca = driver.findElement(By.name("as_word"));
	}

	public void setBarraBusca(String parametroBusca) {
		getBarraBusca().sendKeys(parametroBusca);
	}

	public WebElement getBotaoBusca() {
		WebElement lupaBusca;
		return lupaBusca = driver.findElement(By.className("nav-search-btn"));
	}

	public void clickBotaoBusca() {
		getBotaoBusca().click();
	}

	public List<Resultado> getListaResultados(int n) {
		WebElement tableElement = driver.findElement(By.id("searchResults"));
		List<WebElement> listElementsResults = tableElement.findElements(By.className("results-item"));

		List<Resultado> resultados = new ArrayList<Resultado>();

		for (int i = 0; i < n; i++) {
			Resultado resultado = new Resultado();
			resultado.setTitulo(
					listElementsResults.get(i).findElement(By.xpath(".//*[span[@class='main-title']]")).getText());
			resultado.setPreco(
					listElementsResults.get(i).findElement(By.xpath(".//*[span[@class='price-fraction']]")).getText());
			resultados.add(resultado);
		}

		return resultados;
	}

	public void fechar() {
		driver.close();
	}

	public WebElement getBotaoListaLinha() {
		WebElement listaLinha;
		return listaLinha = driver.findElement(By.xpath(".//*[@class='ico view-option-stack']"));
	}

	public void clickListaLinha() {
		getBotaoListaLinha().click();
	}

	public void navigateToPage(int indicePagina) {

		int indicePaginaClick = indicePagina - 1;
		List<WebElement> indexPages = getIndexPages();

		indexPages.get(indicePaginaClick).click();
	}

	private List<WebElement> getIndexPages() {
		WebElement tableElement = driver.findElement(By.xpath("//*[ul[@class='pagination stack u-clearfix']]/ul"));
		List<WebElement> listElementsPages = tableElement.findElements(By.className("pagination__page"));
		System.out.println("TAMANHO DO INDEX DAS PAGINAS: " + listElementsPages.size());
		return listElementsPages;
	}

	private List<WebElement> getListaResultadosAll() {
		WebElement tableElement = driver.findElement(By.id("searchResults"));
		List<WebElement> listElementsResults = tableElement.findElements(By.className("results-item"));
		return listElementsResults;
	}

	public void acessarPenultimoResultado() throws IOException, InterruptedException {
		Thread.sleep(3000);
		List<WebElement> resultados = getListaResultadosAll();
		resultados.get(resultados.size() - 2).findElement(By.xpath(".//*[span[@class='main-title']]")).click();
		Thread.sleep(2000);
	}

	public void carregamentoPagina() {
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}
}
