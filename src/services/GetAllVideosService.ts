import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class GetAllVideosService {
    
    async execute() {
        // criar repositorio de Categoria
        const repo = getRepository(Video);
        
        // pega toda as categorieas
        const videos = await repo.find({
            relations: ["category"],
        });

        // retornando todas as categorias
        return videos;
    }
}