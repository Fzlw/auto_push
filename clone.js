const { execSync } = require('child_process')
const fs = require('fs')
const path= require('path')

module.exports = (payload) => {
  const name = payload.repository.name
  const cloneUrl = payload.repository.clone_url
  // linux下用户目录process.env.HOME
  console.log(`name: ${name} url: ${cloneUrl}`)

  execSync(`rm -rf ~/${name}`)
  console.log('rm -rf ok')
  execSync(`cd ~/`)
  console.log('change ok')
  execSync(`git clone ${payload.repository.clone_url}`)
  console.log('clone ok')
}