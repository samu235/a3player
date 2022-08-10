
export default async function getSitesServices() {
    try {
        let response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/sites")
        let data = await response.json();
        return data;
    } catch (error) {
        console.log("ERROR -- getSites -- ",error)
        return []
    }

}

