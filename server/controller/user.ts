import { AppDataSource } from '@/server/db'
import { User } from '@/server/entity/user'

const user = new User()
async function create() {
  AppDataSource.manager.insert(user)
}
AppDataSource.manager.save(user)
