const { exec, execSync } = require('child_process')
const fs = require('fs')
const path= require('path')

module.exports = (payload) => {
  const name = payload.repository.name
  const isClone = fs.existsSync(path.resolve(`~/${name}`))
  if (!isClone) {
    execSync(`
      cd ~/${name} &&
      git clone ${payload.clone_url}
    `)
  }

  exec(`
    cd ~/${name} &&
    git pull
  `)
}