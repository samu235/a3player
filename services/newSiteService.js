export default async function newSiteService(fromdata) {
    const url = process.env.NEXT_PUBLIC_API_URL + "/site"

    let response = {}

    try {
        response = await fetch(url, {
            method: 'POST',
            body: fromdata,
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
    } catch (error) {
        console.log("newSiteService -- " + error)
        return { error: "error" }
    }
    
    return await response.json()
}