#language: pt
#Author: Fernando Lessa
#Version: 1.0
#Encoding: iso-8859-1
Funcionalidade: Realizar pesquisa no Site Mercado Livre

  Contexto: 
    Dado que eu acesse o site do mercado livre

  @ID1
  Esquema do Cenario: realizar pesquisa no mercado livre e exibir somente titulo e valor dos N resultados
    Quando eu realizar uma pesquisa no site
      | Parametro de busca |
      | <parametroBusca>   |
    Entao obtenho o titulo e o valor dos <N> primeiros resultados

    Exemplos: 
      | parametroBusca | N |
      | Casa           | 5 |

  @ID2
  Esquema do Cenario: Realizar persquisa do penultimo item de uma determinada pagina
    Quando eu realizar uma pesquisa no site
      | Parametro de busca |
      | <parametroBusca>   |
    Entao localizar o penultimo resultado da pagina <N>

    Exemplos: 
      | parametroBusca | N |
      | Casa           | 2 |
