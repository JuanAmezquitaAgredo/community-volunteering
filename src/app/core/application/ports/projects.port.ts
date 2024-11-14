export interface PProjects{
    /**
     * Get all projects
     * @returns {Promise<IProjectsResponse>}Register response
     */

    getProjects({size, page}: IProjectsRequest): Promise<IProjectsResponse>
    
}   