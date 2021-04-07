const http = require('http')
const autoPull = require('./clone')

http
  .createServer((req, res) => {
    const { url, method } = req
    if (url === '/push' && method?.toLowerCase() === 'post') {
      const chunks = []
      req.on('data', data => chunks.push(data))
      req.on('end', () => {
        const json = JSON.parse(Buffer.concat(chunks))
        autoPull(json)
        res.end('ok')
      })
      return
    }
    res.end(Date.now().toString())
  })
  .listen(9999)