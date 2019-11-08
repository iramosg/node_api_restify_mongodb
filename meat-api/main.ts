import * as restify from 'restify'

const server = restify.createServer({
  name: 'meat-api',
  version: '1.0.0'
})

server.use(restify.plugins.queryParser())

// Request representa os dados que vem na requisição
// Response é o objeto que utilizamos para dar a resposta
// Next é a função que utilizamos no final da utilização da nossa callback
server.get('/info', [
  (req, resp, next) => {
    if(req.userAgent() && req.userAgent().includes('MSIE 7.0')) {
      // resp.status(400)
      // resp.json({ message: 'Please, update your browser' })
      let error: any = new Error()
      error.statusCode = 400
      error.message = 'Please, update your browser'
      return next(false) // Já resolvi o request, não preciso passar para a próxima requisição
    }
    return next()

}, (req, resp, next) => {
  resp.json({
    browser: req.userAgent(),
    method: req.method,
    url: req.url, // ou req.href()
    path: req.path(),
    query: req.query
  })
  return next()
}])

server.listen(3000, () => {
  console.log('API is running on: http://localhost:3000')
})