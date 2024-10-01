
export default async function getTalents() {
    const response = await fetch('https://admin.insyncx.co/wp-json/wp/v2/talent')
    if (!response.ok) {
        throw new Error('failed to fetch talents')
    }

    const talents = await response.json();
    const cleanTalents = talents.map((t:any) => {
        return {
          ...t.acf,
          id: t.id,
          status: t.status
        }
      })

      console.log(cleanTalents)
    return cleanTalents
}
