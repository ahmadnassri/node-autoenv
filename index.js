'use strict'

const dotenv = require('dotenv')
const fs = require('fs')

function load (file) {
  let readable = true

  try {
    fs.accessSync(file, fs.constants.F_OK | fs.constants.R_OK)
  } catch (e) {
    readable = false
  }

  if (readable) {
    Object.assign(process.env, dotenv.parse(fs.readFileSync(file)))
  }
}

load('.env')
load(`.env.${process.env.NODE_ENV.toLowerCase()}`)
