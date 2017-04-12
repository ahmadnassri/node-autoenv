'use strict'

const dotenv = require('dotenv')
const fs = require('fs')

const constants = {
  F_OK: fs.constants ? fs.constants.F_OK : fs.F_OK,
  R_OK: fs.constants ? fs.constants.R_OK : fs.R_OK
}

function load (file) {
  let readable = true

  try {
    fs.accessSync(file, constants.F_OK | constants.R_OK)
  } catch (e) {
    readable = false
  }

  if (readable) {
    Object.assign(process.env, dotenv.parse(fs.readFileSync(file)))
  }
}

load('.env')
load(`.env.${process.env.NODE_ENV.toLowerCase()}`)
