import { Express } from 'express'
import helloRouter from './hello.routes'

const registerRouters = (app: Express): void => {
  app.use('/hello', helloRouter)
}

export default registerRouters
