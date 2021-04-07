const http = require('http')
const autoPull = require('./clone')

http
  .createServer((req, res) => {
    const { url, method } = req
    if (url === '/push' && method?.toLowerCase() === 'post') {
      const chunks = []
      req.on('data', data => chunks.push(data))
      req.on('end', () => {
        const str = Buffer.concat(chunks).toString()
        const json = JSON.parse(str)
        autoPull(json)
        res.end('ok')
      })
      return
    }
    res.end(Date.now().toString())
  })
  .listen(9999)