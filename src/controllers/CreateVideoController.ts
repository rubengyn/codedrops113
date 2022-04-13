import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController {
    async handle(request: Request, response: Response) {
        
        // pegar name, description pelo body
        const { name, description, category_id, duration } = request.body;

        // chamamos o service
        const service = new CreateVideoService();

        // executamos o service
        const result = await service.execute({ name, description, category_id, duration });

        // retornamos mensagem de erro
        if (result instanceof Error) {
            return response.status(400).json(result.message);
            
        }

        // sucesso, retorna um JSON
        return response.json(result);
    }
}