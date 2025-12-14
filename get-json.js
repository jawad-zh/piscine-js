async function getJSON(path,params){
    if (params){
        let Query = new URLSearchParams(params)
        path += '?'+Query
    }
    let respons = await fetch(path)
    if (!respons.ok){
        throw  new Error(respons.statusText)
    }
    let json = await respons.json()
    if (json.error){
        throw new Error(json.error)
    }
    return json.data

}