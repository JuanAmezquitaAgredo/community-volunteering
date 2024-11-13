import { RegisterService } from "@/app/infrastructure/services/register.service";
import { NextResponse } from "next/server";

const useRegisterService = new RegisterService()
export async function POST(req: Request) {
    try {
        const body: IRegisterRequest = await req.json();
        const newUser = await useRegisterService.register(body);

        return NextResponse.json(newUser, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}