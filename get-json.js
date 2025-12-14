async function getJSON(path,params){
    if (params){
        let Query = new URLSearchParams(params)
        path += Query
    }
    let respons = await fetch(path)
    if (!respons.ok){
        throw new Error(respons.text)
    }
    let data = await respons.json()
    return data 
}