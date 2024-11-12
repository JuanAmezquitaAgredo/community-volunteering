'use client'
import Button from "@/ui/atoms/button";
import { signOut } from "next-auth/react";

export default function DashboardPage(){

    const handleLogout = async () => {
        await signOut();
    }

    return (
        <>
        <h1>Dashboard Page</h1>
        <Button label="salir" onClick={handleLogout}/>
        </>
    )
}