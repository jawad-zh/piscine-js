function getArchitects(){
    let architects = document.getElementsByTagName("a")
    let all = document.querySelectorAll("*")
    let NonArchitects = all.filter(ele=> !architects.includes(ele))
    return [architects,NonArchitects]
}