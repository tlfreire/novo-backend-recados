import { MessageEntity } from "../../../../core/infra";
import { Message } from "../../domain/models/message.model";

export default class MessageRepository {
  async getMessages(): Promise<Message[]> {
    const messages = await MessageEntity.find();

    return messages.map((message) => {
      return {
        uid: message.uid,
        description: message.description,
        detail: message.detail,
        userUid: message.userUid,
      };
    });
  }

  async getMessage(uid: string): Promise<Message | undefined> {
    const message = await MessageEntity.findOne(uid);
    if (!message) {
      return undefined;
    }

    return {
      uid: message.uid,
      description: message.description,
      detail: message.detail,
      userUid: message.userUid,
    };
  }

  async create(params: Message): Promise<Message> {
    const { description, detail, userUid } = params;

    const message = await MessageEntity.create({
      description,
      detail,
      userUid,
    }).save();

    return Object.assign({}, params, message);
  }

  async update(uid: string, params: Message) {
    const { description, detail, userUid  } = params;

    const result = await MessageEntity.update(uid, {
      description,
      detail,
      userUid,
    });
  }

  async delete(uid: string) {
    return await MessageEntity.delete(uid);
  }
}
