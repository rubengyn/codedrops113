import { Request, Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

export class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        // pega o id pela url 
        const { id } = request.params;
        // pegar name, description pelo body
        const { name, description } = request.body;

        // chamamos o service
        const service = new UpdateCategoryService();

        // executamos o service
        const result = await service.execute({ id, name, description });

        // retornamos mensagem de erro
        if (result instanceof Error) {
            return response.status(400).json(result.message);
            
        }

        // sucesso, retorna um JSON
        return response.json(result);
    }
}