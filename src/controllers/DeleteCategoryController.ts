import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        // pegar os dados que iraõ receber do body
        const { id } = request.params;

        // chama o service
        const service = new DeleteCategoryService();

        const result = await service.execute(id);

        // se for um erro mostra stats 400
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}


