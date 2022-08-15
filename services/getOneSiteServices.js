
export default async function getOneSiteServices(id) {
    try {
        let response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/site/"+id)
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("ERROR -- getOneSiteServices -- ",error)
        return {}
    }

}

