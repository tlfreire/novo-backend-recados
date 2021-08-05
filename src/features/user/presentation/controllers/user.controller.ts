import { Request, response, Response } from "express";
import { CacheRepository } from "../../../../core/infra/repositories/cache.repository";
import {
  DataNotFoundError,
  HttpRequest,
  HttpResponse,
  MvcController,
  notFound,
  ok,
  serverError,
} from "../../../../core/presentation";
import UserRepository from "../../infra/repositories/user.repository";

export class UserController implements MvcController {
  readonly #repository: UserRepository;
  readonly #cache: CacheRepository;

  constructor(repository: UserRepository, cache: CacheRepository) {
    this.#repository = repository;
    this.#cache = cache;
  }

  public async index() {
    try {
      const cache = await this.#cache.get("user_:all");
      if (cache) {
        return ok(
          cache.map((user: any) =>
            Object.assign({}, user, {
              cache: true,
            })
          )
        );
      }

      const users = await this.#repository.getUsers();

      await this.#cache.set("user_:all", users);

      return ok(users);
    } catch (error) {
      return serverError();
    }
  }

  async delete(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      const result = await this.#repository.delete(uid);
      return ok(result);
    } catch (error) {
      return serverError();
    }
  }

  async store(request: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.#repository.create(request.body);

      await this.#cache.del("user_:all");

      return ok(result);
    } catch (error) {
      return serverError();
    }
  }

  public async show(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      const cache = await this.#cache.get(`user_:${uid}`);
      if (cache) {
        return ok(Object.assign({}, cache, { cache: true }));
      }

      const user = await this.#repository.getUser(uid);
      if (!user) {
        return notFound(new DataNotFoundError());
      }

      await this.#cache.setex(`user_:${uid}`, user, 20);

      return ok(user);
    } catch (error) {
      return serverError();
    }
  }

  async update(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;
    console.log(request.body);

    try {
      const result = await this.#repository.update(uid, request.body);

      return ok(result);
    } catch (error) {
      console.log(error);
      return serverError();
    }
  }
}
