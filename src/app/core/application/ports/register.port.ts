export interface PRegister{
    /**
     * Register user
     * @param {IRegisterRequest} - Register request
     * @returns {Promise<IRegisterResponse>}Register response
     */

    register(req: IRegisterRequest): Promise<IRegisterResponse>
    
}