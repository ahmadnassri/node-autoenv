const dotenv = require('dotenv')
const { join } = require('path')

module.exports = function (root = process.cwd()) {
  const env = (process.env.NODE_ENV || 'production').toLowerCase()

  // load from dotenv files
  const environment = dotenv.config({ path: join(root, `.env.${env}`) })
  const general = dotenv.config({ path: join(root, '.env') })

  // re-write process.env
  process.env = {
    ...process.env,
    ...general.parsed,
    ...environment.parsed
  }
}
