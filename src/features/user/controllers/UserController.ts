import { Request, Response } from "express";
import { User } from "../../../core/data/database/entities/User";

export default class UserController {
  public async store(req: Request, res: Response) {
    const { email, senha } = req.body;

    try {
      const user = await new User(email, senha).save();
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  public async index(req: Request, res: Response) {
    const users = await User.find();

    return res.json(users);
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params;

    const user = await User.findOne(id);
    if (!user) {
      return res.status(404).json({
        msg: "Usuario não encontrado",
      });
    }

    return res.json(user);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const user = await User.findOne(id);
    if (!user) {
      return res.status(404).json({
        msg: "Usuario não encontrado",
      });
    }

    const result = await User.delete(id);

    return res
      .status(200)
      .json((result.affected as number) > 0 ? "User excluido" : "Não removeu");
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { email, senha } = req.body;

    const user = await User.findOne(id);
    if (!user) {
      return res.status(404).json({
        msg: "Usuario não encontrado",
      });
    }

    const result = await User.update(id, {
      email,
      senha,
    });

    return res.json(result);
  }
}
