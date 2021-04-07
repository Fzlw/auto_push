const { exec, execSync } = require('child_process')
const fs = require('fs')
const path= require('path')

module.exports = (payload) => {
  const name = payload.repository.name
  // linux下用户目录process.env.HOME
  const isClone = fs.existsSync(path.join(process.env.HOME, name))
  if (!isClone) {
    execSync(`
      cd ~/ &&
      git clone ${payload.repository.clone_url}
    `)
  }

  exec(`
    cd ~/${name} &&
    git pull
  `)
}