
export default async function getTalent(id:any) {
    const response = await fetch(`https://admin.insyncx.co/wp-json/wp/v2/talents/${id}`)

    if (!response.ok) {
        throw new Error('failed to fetch talent')
    }

    return response.json()
}
