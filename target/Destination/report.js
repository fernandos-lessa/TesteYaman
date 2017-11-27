$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MercadoLivre.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Author: Fernando Lessa"
    },
    {
      "line": 3,
      "value": "#Version: 1.0"
    },
    {
      "line": 4,
      "value": "#Encoding: iso-8859-1"
    }
  ],
  "line": 5,
  "name": "Realizar pesquisa no Site Mercado Livre",
  "description": "",
  "id": "realizar-pesquisa-no-site-mercado-livre",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Realizar persquisa do penultimo item de uma determinada pagina",
  "description": "",
  "id": "realizar-pesquisa-no-site-mercado-livre;realizar-persquisa-do-penultimo-item-de-uma-determinada-pagina",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@ID2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "eu realizar uma pesquisa no site",
  "rows": [
    {
      "cells": [
        "Parametro de busca"
      ],
      "line": 24
    },
    {
      "cells": [
        "\u003cparametroBusca\u003e"
      ],
      "line": 25
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "localizar o penultimo resultado da pagina \u003cN\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "realizar-pesquisa-no-site-mercado-livre;realizar-persquisa-do-penultimo-item-de-uma-determinada-pagina;",
  "rows": [
    {
      "cells": [
        "parametroBusca",
        "N"
      ],
      "line": 29,
      "id": "realizar-pesquisa-no-site-mercado-livre;realizar-persquisa-do-penultimo-item-de-uma-determinada-pagina;;1"
    },
    {
      "cells": [
        "Casa",
        "2"
      ],
      "line": 30,
      "id": "realizar-pesquisa-no-site-mercado-livre;realizar-persquisa-do-penultimo-item-de-uma-determinada-pagina;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 8,
  "name": "que eu acesse o site do mercado livre",
  "keyword": "Dado "
});
formatter.match({
  "location": "MercadoLivreStep.que_eu_acesse_o_site_do_mercado_livre()"
});
formatter.result({
  "duration": 11199798186,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Realizar persquisa do penultimo item de uma determinada pagina",
  "description": "",
  "id": "realizar-pesquisa-no-site-mercado-livre;realizar-persquisa-do-penultimo-item-de-uma-determinada-pagina;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@ID2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "eu realizar uma pesquisa no site",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Parametro de busca"
      ],
      "line": 24
    },
    {
      "cells": [
        "Casa"
      ],
      "line": 25
    }
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "localizar o penultimo resultado da pagina 2",
  "matchedColumns": [
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "MercadoLivreStep.que_eu_tenha_realizado_uma_pesquisa_no_site(DataTable)"
});
formatter.result({
  "duration": 16298296747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 42
    }
  ],
  "location": "MercadoLivreStep.localizar_o_penultimo_resultado_da_pagina(int)"
});
formatter.result({
  "duration": 6443898027,
  "error_message": "org.openqa.selenium.WebDriverException: Element is not clickable at point (740.5, 8.933334350585938). Other element would receive the click: \u003cinput style\u003d\"padding-right: 222px;\" autocomplete\u003d\"off\" aria-owns\u003d\"chs-popover-3\" aria-haspopup\u003d\"true\" aria-autocomplete\u003d\"list\" value\u003d\"casa\" tabindex\u003d\"1\" class\u003d\"nav-search-input\" name\u003d\"as_word\" max-length\u003d\"120\" autocapitalize\u003d\"off\" autocorrect\u003d\"off\" spellcheck\u003d\"false\" placeholder\u003d\"\" type\u003d\"text\"\u003e\nCommand duration or timeout: 82 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027LP1528\u0027, ip: \u002710.51.162.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d47.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 398ee418-4092-4fe2-a199-5d49d4edfbd0\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat pageObjects.MercadoLivroPageObject.acessarPenultimoResultado(MercadoLivroPageObject.java:108)\r\n\tat funcionalidades.MercadoLivreFuncionalidade.localizarPenultimoItem(MercadoLivreFuncionalidade.java:48)\r\n\tat step.MercadoLivreStep.localizar_o_penultimo_resultado_da_pagina(MercadoLivreStep.java:30)\r\n\tat ✽.Entao localizar o penultimo resultado da pagina 2(MercadoLivre.feature:26)\r\n",
  "status": "failed"
});
});