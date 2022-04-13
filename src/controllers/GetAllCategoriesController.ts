import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

export class GetAllCategoriesController {
    async handle(request: Request, response: Response) {
        
        // chama o service
        const service = new GetAllCategoriesService();

        const categories = await service.execute();

        return response.json(categories);
    }
}


