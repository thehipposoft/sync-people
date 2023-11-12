

export default async function getFormidableTalents() {
    const response = await fetch('https://sync-staging.thehipposoft.com/wp-json/frm/v2/forms/2/entries')
    console.log(response)
    if (!response.ok) {
        throw new Error('failed to fetch talents')
    }

    const talents = await response.json();
    console.log('formi', talents)

    return talents
}
