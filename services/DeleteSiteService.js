export default async function DeleteSiteService(id) {
    const url = process.env.NEXT_PUBLIC_API_URL + "/site/" + id
    let response = {}

    try {
        response = await fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            credentials: 'same-origin',
        })
    } catch (error) {
        console.log("DeleteSiteService -- " + error)
        return { error: "error" }
    }

    return await response.json()
}