function getArchitects(){
    let architects = Array.from(document.getElementsByTagName("a"))
    let all = Array.from(document.querySelectorAll("*"))
    let NonArchitects = all.filter(ele=> !architects.includes(ele))
    return [architects,NonArchitects]
}
function getClassical(){
    let [architects,_] = getArchitects()
    let classicale = architects.filter(ele => ele.classList.contains("classical"))
    let noCalassical = architects.filter(ele => !classicale.includes(ele))
    return [classicale,noCalassical]
}