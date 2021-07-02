import Client from "../../db";

export type User = {
  id: Number;
  firstName: String;
  lastName: String;
}

export class UserStore {

  async index(): Promise<User[] | undefined> {
    try {
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows ;
    }catch(e) {
      console.log(e);
    }
  }
}