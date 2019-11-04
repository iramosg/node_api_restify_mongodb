
# Do Zero à Nuvem: API Restful com NodeJS, Restify e MongoDB

## O que é o Node.JS?
Ambiente gratuito de código aberto server-side. Surgiu em 2009.

## Arquitetura
- LIBUV: portar o Node para ambientes não Unix
- V8: Mesma Engine usada pelo Chrome para interpretar javascript
- JS Modules: podem chamar inclusive módulos em C++

> Para verificar a versão do Node, use o comando: **node -v**.

## Modo REPL - Repeat, Evaluate, Print Loop
O Node irá verificar se o comando for válido, será impresso no console o resultado.
> Para sair do REPL, dar **ctrl + c** duas vezes.

## O que são módulos?
Cada arquivo JS de uma aplicação Node é considerado um módulo e cada módulo tem um escopo que o isola de outros módulos.
As variáveis, funções e outros objetos são só acessíveis naquele escopo.]
Core/Built-in são os módulos do Node.

## Quem o Node carrega primeiro?
Tudo que está dentro do **package.json**

## O que é um pacote?
O pacote pode ser uma ferramenta de linha de comando, ou mesmo um módulo que instalamos dentro da nossa aplicação.


### CommonJS Spec
Determina que o módulo deve exportar ou não.
> Utilizar **require('nome_module')** para chamar o módulo.

## Comandos
**node - p "process.versios":** versão de todos os processos Node.

**.editor**: pode utilizar multiplas linhas no console, ao dar enter, ele não irá executar o código automáticamente. O comando **ctrl + d** sai do modo editor.

**node [nome do arquivo]**: executa o código na linha de comando.

## Geral

- O objeto análogo ao *window* é o *global*. Não tem sentido ter "janelas" no server-side.
- O process faz a ponte entre o script e o ambiente de execução. Através do process, dá pra saber o diretório onde foi executado o script, ouvir eventos, ele herda do eventemitter.