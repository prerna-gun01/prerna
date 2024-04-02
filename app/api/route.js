export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request, res) {
    res.status(200).json({ message: 'Hello from Next.js!' })
}