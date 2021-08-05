import {
  badRequest,
  HttpMiddleware,
  HttpResponse,
  ok,
  RequireFieldsValidator,
} from "../../../../core/presentation";

export class MessageStoreMiddleware {
  async handle(req: HttpMiddleware): Promise<HttpResponse> {
    const { body } = req;

    for (const field of [ "description", "detail", "userUid" ]) {
      const error = new RequireFieldsValidator(field).validate(body);
      if (error) {
        return badRequest(error);
      }
    }

    return ok({});
  }
}

export class MessageUpdateMiddleware {
  async handle(req: HttpMiddleware): Promise<HttpResponse> {
    const { body } = req;

    for (const field of [ "description", "detail", "userUid" ]) {
      const error = new RequireFieldsValidator(field).validate(body);
      if (error) {
        return badRequest(error);
      }
    }

    return ok({});
  }
}
