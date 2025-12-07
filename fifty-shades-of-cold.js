import { colors } from "./fifty-shades-of-cold.data.js"
export function generateClasses(){
    let style = document.createElement('style')
    let css=""
    for (let i =0 ; i < colors.length ; i++ ){
         css +=`
        .${colors[i]}{
        background : ${colors[i]}
        }
        `
       
    }
    style.innerHTML = css
    document.head.append(style)
}
export function generateColdShades(){
    for (let i =0 ; i < colors.length ; i++){
        if (colors[i].includes('aqua')|| colors[i].includes('blue')
        || colors[i].includes('turquoise')
        || colors[i].includes('green')
        || colors[i].includes('cyan')
        || colors[i].includes('navy')
        ||colors[i].includes('purple')
        ){
            let div = document.createElement('div')
            div.classList.add(`${colors[i]}`)
            div.append(`${colors[i]}`)
            document.body.append(div)
        }
    }
}
export function choseShade(shade){
    let allDivs = document.querySelectorAll('div')
    for (let i =0 ; i < allDivs.length ; i++){
        allDivs[i].classList = shade
    }

}