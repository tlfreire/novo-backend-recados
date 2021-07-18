import { Request, Response } from "express";
import { Recado } from "../../../core/data/database/entities/Recado";
import { User } from "../../../core/data/database/entities/User";

export default class RecadoController {
  public async store(req: Request, res: Response) {
    const { userId }: { userId?: string } = req.params;
    const { descricao, detalhe}: { descricao: string, detalhe: string } = req.body;

    const user = await User.findOne(userId);
    if (!user) {
      return res.status(404).json({
        msg: "Usuario não encontrado",
      });
    }
    
    const recado = await new Recado(detalhe, descricao, parseInt(userId)).save();
    
    return res.status(200).json(recado);
  }

  public async index(req: Request, res: Response) {
    const { id }: { id?: string } = req.params;

    const recado = await Recado.find();

    return res.json(recado);
  }

  public async show(req: Request, res: Response) {
    const { id }: { id?: string } = req.params;

    const recado = await Recado.findOne(id);

    return res.json(recado);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const result = await Recado.delete(id);

    return res
      .status(200)
      .json((result.affected as number) > 0 ? "Recado excluido" : "Não removeu");
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { descricao, detalhe } = req.body;

    const recado = await Recado.findOne(id);
    if (!recado) {
      return res.status(404).json({
        msg: "Recado não encontrado",
      });
    }

    const result = await Recado.update(id, {
      descricao,
      detalhe,
    });

    return res.json(result);
  }
}

