import { config } from 'dotenv'
import path from 'path'

config({ path: path.join(__dirname, '..', `/.env.${process.env.NODE_ENV}`) })

const configEnv = {
  PORT: process.env.PORT
}

export default configEnv
