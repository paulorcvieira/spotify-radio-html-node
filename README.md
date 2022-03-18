# Spotify Radio

Este é o código inicial do spotify-radio.

Marque esse projeto com uma estrela 🌟

## Preview

<img src="./prints/demo.png" />

## Checklist Features

- Web API
    - [ ] Deve atingir 100% de cobertura de código em testes
    - [ ] Deve ter testes de integração validando todas as rotas da API
    - [x] Deve entregar arquivos estáticos como Node.js Stream
    - [ ] Deve entregar arquivos de música como Node.js Stream
    - [x] Dado um usuário desconectado, não deve quebrar a API
    - [ ] Mesmo que vários comandos sejam desparados ao mesmo tempo, não deve quebrar a API
    - [x] Caso aconteça um erro inesperado, a API deve continuar funcionando
    - [x] O projeto precisa ser executado em ambientes Linux, Mac e Windows

- Web App 
    - Client
        - [x] Deve reproduzir a transmissão
        - [ ] Não deve pausar se algum efeito for adicionado
    - Controller
        - [ ] Deve atingir 100% de cobertura de código em testes
        - [ ] Deve poder iniciar ou parar uma transmissão 
        - [ ] Deve enviar comandos para adicionar audio efeitos à uma transmissão

## Tarefas

- 01: Cobrir as camadas service e route com testes unitários e alcançar 100% de code coverage
- 02: Manter 100% de code coverage e implementar testes e2e para toda a API
- 03: implementar testes unitários para o frontend e manter 100% de code coverage
- **PLUS**: 
    - [ ] disponibilizar um novo efeito
        - [ ] adicionar um botão novo no controlador
        - [ ] adicionar um som de efeito novo para a pasta `audios/fx/`
        - [ ] republicar no heroku

### Camadas do server
- server
  - service = tudo que é regra de negocio ou processamento
  - controller = intermediar a camada de apresentação e a camada de negocio
  - routes = camada de apresentação 
  - server = responsavel por criar o servidor (mas nao instancia)
  - index = instancia o servidor e expoe para a web (lado da infraestrura)
  - config = tudo que for estático do projeto


## FAQ 
- `NODE_OPTIONS` não é um comando reconhecido pelo sistema, o que fazer?
    - Se você estiver no Windows, a forma de criar variáveis de ambiente é diferente. Você deve usar a palavra `set` antes do comando. 
    - Ex: `    "test": "set NODE_OPTIONS=--experimental-vm-modules && npx jest --runInBand",`

- Rodei `npm test` mas nada acontece, o que fazer?
    - Verifique a versão do seu Node.js. Estamos usando na versão 17. Entre no [site do node.js](https://nodejs.org) e baixe a versão mais recente.
