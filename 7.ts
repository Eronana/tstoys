interface BaseEntity {
  id:number;
  created_at:Date;
  updated_at:Date;
}

interface Raw {
  sql:string;
}

type Rawify<T> = {[key in keyof T]:T[key]|Raw}
class BaseStore<E> {
  async insert(...data:Partial<Rawify<E>>[]):Promise<number> {
    return 1;
  }
  async getMany<T extends keyof E>(cond:Partial<Rawify<E>>, ...fields:T[]):Promise<Pick<E, T>[]> {
    return [];
  }
}

// test code
interface UserEntity extends BaseEntity {
  username:string;
  password:string;
}

class UserStore extends BaseStore<UserEntity> { }

async () => {
  const userStore = new UserStore();
  const insertId = await userStore.insert({
    id: {sql: '1+1'},
    username: 'erona',
  })
  
  const result = await userStore.getMany({
    username: 'neko',
    password: 'cat',
  }, 'id', 'username')
}
