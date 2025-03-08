import { NextResponse } from "next/server"


interface RequestBody {
    username : string , 
    password : string
}

export async function POST(req: Request): Promise<NextResponse> {
    const json: RequestBody = await req.json()
    console.log(json);
    return NextResponse.json({})
}