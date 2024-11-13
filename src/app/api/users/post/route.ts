import { RegisterService } from "@/app/infrastructure/services/register.service";
import { NextResponse } from "next/server";

const useRegisterService = new RegisterService()
export async function POST(req: Request) {
    try {
        const formData = await req.formData();  
        const newUser = await useRegisterService.register(formData);

        return NextResponse.json(newUser, { status: 200 });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}