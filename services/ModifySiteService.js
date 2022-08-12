export default async function ModifySiteService(id,path,description,publicPath,key,name) {
    const url = process.env.NEXT_PUBLIC_API_URL + "/site/"+id

    let response = {}

    try {
        response = await fetch(url, {
            method: 'PUT',
            //body: fromdata,
            body:JSON.stringify({
                "path":path,
                "description":description,
                "publicPath":publicPath,
                "key":key,
                "name":name
            }),
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    } catch (error) {
        console.log("ModifySiteService -- " + error)
        return { error: "error" }
    }
    
    return await response.json()
}