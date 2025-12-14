async function getJSON(path,params){
    if (params){
        let Query = new URLSearchParams(params)
        path += '?'+Query
    }
    let respons = await fetch(path)
    if (!respons.ok){
        throw respons.statusText
    }
    let json = await respons.json()
    if (json.error){
        throw json.error
    }
    return json.data

}