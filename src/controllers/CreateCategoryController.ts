import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryServices";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        // pegar os dados que iraõ receber do body
        const { name, description } = request.body;

        // chama o service
        const service = new CreateCategoryService();

        // passar parametros para o service
        const result = await service.execute({ name, description });

        // se for um erro mostra stats 400
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        // se sucesso mostra retorna um json
        return response.json(result);
    }
}


