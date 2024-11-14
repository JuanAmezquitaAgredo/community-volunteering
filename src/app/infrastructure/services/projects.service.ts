import { PProjects } from "@/app/core/application/ports/projects.port";
import { HttpClient } from "../utils/client-http";

export class ProjectsServices implements PProjects{
    private clientHttp: HttpClient;

    constructor(){
        this.clientHttp = new HttpClient();
    }

    async getProjects({size, page}: IProjectsRequest): Promise<IProjectsResponse>{
        try {
            const response = this.clientHttp.get<IProjectsResponse>(`projects?page=${page}&size=${size}`);
            return response;
          } catch (error) {
            console.log(error);
            throw error;
          }
    }
}