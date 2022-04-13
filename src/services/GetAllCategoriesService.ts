import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class GetAllCategoriesService {
    
    async execute() {
        // criar repositorio de Categoria
        const repo = getRepository(Category);
        
        // pega toda as categorieas
        const categories = await repo.find();

        // retornando todas as categorias
        return categories;
    }
}