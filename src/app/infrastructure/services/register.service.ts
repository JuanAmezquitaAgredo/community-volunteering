import { PRegister } from "@/app/core/application/ports/register.port";
import { HttpClient } from "../utils/client-http";

export class RegisterService implements PRegister{
    private clientHttp: HttpClient;

    constructor(){
        this.clientHttp = new HttpClient();
    }

    async register(req: IRegisterRequest): Promise<IRegisterResponse>{
        return this.clientHttp.post<IRegisterResponse, IRegisterRequest>(
            `/users`,
            req
        );
    }
}