import * as restify from 'restify'
import { environment } from '../common/environment';
import { Router } from '../common/router'
import * as Mongoose from 'mongoose';
export class Server {

  application: restify.Server

  initializeDb(): Mongoose.MongooseThenable {

    (<any>Mongoose).Promise = global.Promise
    return Mongoose.connect(environment.db.url, {
      useMongoClient: true
    })
  }

  initRoutes(routers: Router[]): Promise<any> {
    return new Promise((resolve, reject) => {
      try {

        this.application = restify.createServer({
          name: 'meat-api',
          version: '1.0.0'
        })
        
        this.application.use(restify.plugins.queryParser())

        // Routes
        for (let router of routers) {
          router.applyRoutes(this.application)
        }
        

        this.application.listen(environment.server.port, () => {
          // console.log('API is running on: http://localhost:3000')
          resolve(this.application)
        })

        
      } catch (error) {
        reject(error)
      }
    })
  }

  bootstrap(routers: Router[] = []): Promise<Server> {
    return this.initializeDb().then(() =>
    this.initRoutes(routers).then(() => this))
  }
}