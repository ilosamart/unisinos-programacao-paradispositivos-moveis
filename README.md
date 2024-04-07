# Projeto Programação Para Dispositivos Móveis

## Descrição

Aplicativo feito em Ionic e previsto para `deploy` no `Android` que consiste nos seguintes casos de uso:
- UC 01 - Listagem de serviços e produtos de uma empresa gráfica
- UC 02 - Solicitação de orçamentos nos produtos ou serviços
- UC 03 - Listagem dos orçamentos recebidos

## Setup do ambiente de desenvolvimento

### Pré-requisitos

Instalando os pré-requisitos
```sh
## Instale o NVM
## Siga as instruções em https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating

## Instale o node na versão esperada
nvm install v18.19.0
## ative-o
nvm use v18.19.0

## Instale o python 3.8+
## Instale o PDM
## Siga as instruções em https://pdm-project.org/en/latest/#__tabbed_2_3
pipx install pdm
```

### Frontend

- NodeJS v18.19.0
- Ionic

### Backend

- Python 3.8
- PDM para gerenciamento da app
- Docker para execução

### Scripts auxiliares
- `dev-buildapp.sh`
    - faz build do APK
- `dev-buildbackend.sh`
    - faz build do conteiner backend e publica no GitHub
- `dev-runandroidemulator.sh`
   - Executa o emulador Android, parâmetros posicionais do script
        - o nome do AVD, por padrão `Small_Phone_API_33`
- `dev-runappandroid.sh`
    - Executa a aplicação no emulador Android, parâmetros posicionais do script
        - o nome do AVD, por padrão `Small_Phone_API_33`
- `dev-syncclientapi.sh`
    - Cria os stubs da API do backend, parâmetros posicionais do script
        - caminho do JAR do https://github.com/OpenAPITools/openapi-generator, padrão `~/Apps/openapi-generator-cli/openapi-generator-cli.jar`
        - URL do backend, padrão `https://unisinos-ppdm-backend.tramasoli.com/openapi.json`