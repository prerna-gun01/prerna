import { NextResponse } from "next/server";
import data from "../../page"
export async function GET(){
    return NextResponse.json({
        products: [{
            id: 1,
            name: "Strawberries"
        },
    ],
    })
}

export async function POST(request: Request){
    const data = await request.json()
    return NextResponse.json({
        data,
    })
}