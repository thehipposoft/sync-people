
export default async function getTalent(id:any) {
    const response = await fetch(`http://sync-staging.thehipposoft.com/wp-json/wp/v2/talent/${id}`)
    

    if (!response.ok) {
        throw new Error('failed to fetch talent')
    }

    return response.json()
}