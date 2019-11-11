
# Do Zero à Nuvem: API Restful com NodeJS, Restify e MongoDB

## O que é o Node.JS?
Ambiente gratuito de código aberto server-side. Surgiu em 2009.

## O que é Mongo DB?
O mongo é um tipo de banco de dados orientado a documentos. Com o mongo, os dados que persistimos são livres de estruturas estáticas, dando flexibilidade e agilidade.

### O que são documentos e coleções?
Documentos são objetos que serão compostos por chaves e valores. Chave é o atributo, com valor correspondente.
Os valores podem ser de vários tipos, já as chaves são do tipo string e case sensitive.
Um documento não pode ter chaves duplicadas.
Uma tupla seria equivalente a um documento e uma tabela equivalente a uma coleção.
Uma coleção serve para agrupar vários documentos, ou seja, uma coleção contém schemas dinâmicos.

### Sobre o Object ID
Todo objeto armazenado no MongoDB precisa ter uma prop chamada de _id, que será o identificador único de um documento em uma coleção.
Essa propriedade pode ser de qualquer tipo, mas por padrão ela é do tipo Object ID.
O valor do Object ID é do tipo hexadecimal, ocupando 12 bytes, sendo da seguinte maneira:
- Os primeiros 4 bytes equivalem ao timestamp (unix type)
- Os próximos 3 bytes representam o identificador da máquina (geralmente um hash do hostname), para que máquinas diferentes não gerem números repetidos
- Os próximos 2 bytes representam o número do processo para que não se tenham ids iguais 
- Os próximos 3 bytes representam o incremento dentro do intervalor de 1 segundo e dentro do mesmo processo, garantindo mais de 16 milhões de números únicos dentro de um único processo.

#### Quem gera o object id?
O object id pode ser gerado automaticamente pelo drive que conecta o mongo ou pelo próprio mongo. Isso existe para que a carga de geração seja distribuída entre várias máquinas que não seja o servidor.



## O que é o Restify?
O Restify é uma biblioteca específica para Node, que irá auxiliar na criação da API, para ouvir as suas requisições. É similar ao ExpressJS.
- Trabalha diretamente com JSON
- Trata erros de forma ideal para API
- Já traz um suporte mínimo para mídia

É preciso de três coisas:

1. Criar o server
2. Configurar as rotas
3. Ouvir determinada porta

Se associa as rotas com os métodos http (GET, POST, PUT, DELETE, etc)

### Os três objetos passados na callback: REQUEST, RESPONSE, CALLBACK
- RESPONSE: serve para enviar uma resposta

```javascript
...
resp.status(400)
resp.setHeader('Content-Type', 'application/json')
resp.send({message: 'hello'})
...
```

- REQUEST: informações de quem fez a requisição

```javascript
...
resp.json({
    browser: req.userAgent(),
    method: req.method,
    url: req.url, // ou req.href()
    path: req.path(),
    query: req.query
  })
...
```

- NEXT: é utilizada em três situações:
  - Quando queremos indicar para o Restify que a nossa callback terminou de fazer o que tinha que fazer.
  - Quando temos mais de uma callback associada ao mesmo path de rota (pode se passar um array de callbacks)
  - Quando queremos passar um objeto de erro, para parar o processamento do request, que pode ter algumas propriedades para ser utilizado pelo Restify.


```javascript
...
if(req.userAgent() && req.userAgent().includes('MSIE 7.0')) {
  // resp.status(400)
  // resp.json({ message: 'Please, update your browser' })
  let error: any = new Error()
  error.statusCode = 400
  error.message = 'Please, update your browser'
  return next(false) // Já resolvi o request, não preciso passar para a próxima requisição
}
  return next()

```

## O que é REST?
REST (REPRESENTATIONAL STATE TRANSFER) é um estilo arquetural que define alguns padrões que um serviço deve seguir que usa o protocolo HTTP como forma de comunicação.
- Conjunto de URLs que vão servir para localizar recursos.
  - Recurso é qualquer coisa que pode ter um nome dentro de uma aplicação.
  - Através do id indicamos qual é o recurso alvo daquela solicitação.

## Requisitos de uma API

- Ela deve ser Stateless, ou seja, significa que toda a requisição vai conter todas as informações necessárias para ser processada
- Agnóstica de UI, ou seja, não pode ter nada relativo a interface do usuário (escalabilidade)
- É preciso ter uma interface uniforme, que seria saber identificar unicamente os recursos e permitir sua manipulação através de representações, como por exemplo JSON.
- Deve possuir suporte a hipermídia, que é o fato de incluir links e metadados na representação dos dados, que facilita a aplicação client navegar nos dados.



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