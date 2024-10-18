import { auth } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const { userId } = auth();

        if(!userId) {
            return NextResponse.json({ error: "Unauthorized", status: 401});
        }



        const {nombre, direccion, telefono, correo, fecha_ingreso, id_rol, estatus, fecha_modificacion} = await req.json();

    } catch (error) {
        console.log("ERROR CREATING TASK: ", error);
        return NextResponse.json({ error: "Error creating task", status: 500 });
    }
}

export async function GET(req: Request){
    try {
    } catch (error) {
        console.log("ERROR GETTING TASK: ", error);
        return NextResponse.json({ error: "Error getting task", status: 500 });
    }
}

export async function PUT(req: Request){
    try {
    } catch (error) {
        console.log("ERROR UPDATING TASK: ", error);
        return NextResponse.json({ error: "Error updating task", status: 500 });
    }
}

export async function DELETE(req: Request){
    try {
    } catch (error) {
        console.log("ERROR DELETING TASK: ", error);
        return NextResponse.json({ error: "Error deleting task", status: 500 });
    }
}