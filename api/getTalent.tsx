
export default async function getTalent(id:string) {
    const response = await fetch(`https://admin.insyncx.com/wp-json/wp/v2/talents/${id}?acf_format=standard`)

    if (!response.ok) {
        throw new Error('failed to fetch talent')
    }

    return response.json()
}
