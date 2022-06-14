import { Express } from 'express'
import helloRouter from './hello.routes'
import { userRoutes } from './user.routes'
import { companyRoutes } from './company.routes'
import vacancyRouter from './vacancy.routes'

const registerRouters = (app: Express): void => {
  app.use('/hello', helloRouter)
  app.use('/users', userRoutes())
  app.use('/company', companyRoutes())
  app.use('/vacancy',vacancyRouter)
}

export default registerRouters
