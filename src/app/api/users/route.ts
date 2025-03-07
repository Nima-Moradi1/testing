//? We set up our handlers and endpoints here (since we don't have real backend)

import { NextResponse } from "next/server";


interface User {
    id: number;
    username: string;
}

export async function GET(req: Request): Promise<NextResponse<User[]>> {
    return NextResponse.json([
        {
            id: 1,
            username: 'Nimooli'
        },
        {
            id: 2,
            username: 'dambooli kosak'
        },
        {
            id: 3,
            username: 'fandogh'
        },
    ]);
}