const { execSync } = require('child_process')
const fs = require('fs')
const path= require('path')

module.exports = (payload) => {
  const name = payload.repository.name
  // linux下用户目录process.env.HOME
  execSync(`
    rm -rf ~/${name}
    cd ~/ &&
    git clone ${payload.repository.clone_url}
  `)
}