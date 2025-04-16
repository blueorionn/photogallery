import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET(request: Request) {
    // Get page number from query string
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page')

    // Default page size
    const pageSize = 12

    // Validate page number
    if(Number.isNaN(Number(page)) || Number(page) < 1) {
        return NextResponse.json({error: 'Invalid page number'}, {status: 400})
    }

    // Validate offset
    const offset = (Number(page) - 1) * pageSize
    
    // Query photos from database
    const photos = await query('SELECT * FROM photos ORDER BY id LIMIT $1 OFFSET $2', [`${pageSize}`, `${offset}`])

    return NextResponse.json({result: photos?.rows, page: page}, {status: 200})
}