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
import MessageRepository from "../../infra/repositories/message.repository";

export class MessageController implements MvcController {
  readonly #repository: MessageRepository;
  readonly #cache: CacheRepository;

  constructor(repository: MessageRepository, cache: CacheRepository) {
    this.#repository = repository;
    this.#cache = cache;
  }

  async store(request: HttpRequest): Promise<HttpResponse> {
    try {
      const result = await this.#repository.create(request.body);
      return ok(result);
    } catch (error) {
      return serverError();
    }
  }

  async index(request: HttpRequest): Promise<HttpResponse> {
    try {
      const messages = await this.#repository.getMessages();
      return ok(messages);
    } catch (error) {
      return serverError();
    }
  }

  async show(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      const message = await this.#repository.getMessage(uid);

      if (!message) {
        return notFound(new DataNotFoundError());
      }

      return ok(message);
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

  async update(request: HttpRequest): Promise<HttpResponse> {
    const { uid } = request.params;

    try {
      const result = await this.#repository.update(uid, request.body);
      return ok(result);
    } catch (error) {
      return serverError();
    }
  }
}
