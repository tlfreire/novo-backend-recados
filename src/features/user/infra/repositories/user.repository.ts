import { UserEntity } from "../../../../core/infra";
import { User } from "../../domain/models/user.model";


export default class UserRepository {
  private readonly teste = "";

  async getUsers(): Promise<User[]> {
    const users = await UserEntity.find();

    return users.map((user) => {
      return {
        uid: user.uid,
        email: user.email,
        password: user.password
      } as User;
    });
  }

  async getUser(uid: string): Promise<User | undefined> {
    const user = await UserEntity.findOne(uid);

    if (!user) return undefined;

    return {
      uid: user.uid,
      email: user.email,
      password: user.password
    };
  }

  async create(params: User): Promise<User> {
    const { email, password } = params;

    const user = await UserEntity.create({
      email,
      password
    }).save();

    return Object.assign({}, params, user);
  }

  async update(id: string, params: User) {
    const { email, password } = params;

    const result = await UserEntity.update(id, {
      email,
      password
    });

    return Object.assign({}, params, result);
  }

  async delete(id: string) {
    return await UserEntity.delete(id);
  }
}
