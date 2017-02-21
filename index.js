'use strict'

const dotenv = require('dotenv')

dotenv.config()
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
