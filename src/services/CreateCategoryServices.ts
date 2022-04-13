import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService {
    
    async execute({
        name,
        description,
    }: CategoryRequest): Promise<Category | Error> {
        // criar repositorio de Categoria
        const repo = getRepository(Category);
        
        
        // verificar se já tem uma categoria com este nome
        // findOne = SELECT * FROM CATEGORIES WHERE NAME = "NAME" LIMIT 1
        if (await repo.findOne({ name })) {
            return new Error("Category already exists");
        }

        // salvar categoria
        const category = repo.create({
            name,
            description,
        });

        await repo.save(category);

        return category;
    }
}