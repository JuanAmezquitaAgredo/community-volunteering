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

    /**
     * Update a project
     * @param {IEditProjectsRequest} - project request
     * @returns {Promise<IEditProjectsRequest>} - project response
     */

    updateProject(id:number, project: IEditProjectsRequest): Promise<IEditProjectsResponse>

    /**
     * Delete a project
     * @param {number} - project id
     * @returns {Promise<IDeleteProjectResponse>} - void response
     */

    deleteProject(id:number): Promise<IDeleteProjectResponse>
    
}   