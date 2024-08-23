import { neon } from '@neondatabase/serverless';

const url = process.env.EXPO_PUBLIC_DATABASE_URL

export async function POST(request: Request) {
    try {
    const sql = neon(`${url}`);
        const { name, email, clerkId } = await request.json();
        if(!name || !email || !clerkId) {
            return Response.json(
                { error: 'Missing required fields'}, { status: 400 }
            )
        }
        
        const response = await sql`
            INSERT INTO users (
                name,
                email,
                clerk_id
            )
    
            VALUES (
                ${name},
                ${email},
                ${clerkId}
            )
        `;
        
    return new Response(JSON.stringify({
        data: response
    }), { status : 201 })
    }catch(err) {
        return Response.json({error: err}, { status: 500 })
    }
}