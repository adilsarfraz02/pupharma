import conn from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await conn();
        console.log("✅ MongoDB Connected");
        return new Response("✅ MongoDB Connected",{ status: 200 });
    }
    catch (e) {
        console.log(e);
        return new Response("Error", { status: 500 });
    }
}