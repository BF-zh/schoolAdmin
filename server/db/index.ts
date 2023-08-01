import { log } from 'node:console'
import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '00000000',
  database: 'school',
  synchronize: true,
  entities: ['@/server/entity/*{.js,.ts}'],
  logging: true,
})
AppDataSource.initialize()
  .then(() => {
    log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })
