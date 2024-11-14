export interface PProjects{
    /**
     * Get all projects
     * @returns {Promise<IProjectsResponse>}Register response
     */

    getProjects({size, page}: IProjectsRequest): Promise<IProjectsResponse>

    
    /**
     * create a new project
     * @param {IRegisterProjectsRequest} - project request
     * @returns {Promise<IProjectsResponse>} - project response
     */
    createProject(project: IRegisterProjectsRequest): Promise<IProjectsResponse>
    
}   