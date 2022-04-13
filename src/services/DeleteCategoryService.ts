import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class DeleteCategoryService {

    async execute(id: string) {
        // criar repositorio de Categoria
        const repo = getRepository(Category);

        // pega categoria id, se não encontrar mostra mensagem erro
        if (!(await repo.findOne(id))) {
            return new Error("Category does not exists!")
        }

        await repo.delete(id);
    }
}