import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class CreateVideoService {

    async execute({
        name,
        description,
        duration,
        category_id,
    }: VideoRequest): Promise<Error | Video> {
        // criar repositorio de Video
        const repo = getRepository(Video);
        // criar repositorio da categoria
        const repoCategory = getRepository(Category);


        // verificar se já tem uma categoria com este nome
        if (!(await repoCategory.findOne(category_id ))) {
            return new Error("Category does not exists!");
        }

        // salvar video
        const video = repo.create({
            name,
            description,
            duration,
            category_id,
        });

        await repo.save(video);

        return video;
    }
}