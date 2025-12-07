export function generateLetters(){
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let fontSize = 11
    for (let i =1 ; i <= 120 ; i++){
        let index = Math.floor(Math.random() * alphabet.length )
        let div = document.createElement('div')
        div.append(alphabet[index])
        div.style.fontSize = `${fontSize}px`
        fontSize++
        if (i <=40){
            div.style.fontWeight = 300
        }else if (i <= 80){
            div.style.fontWeight = 400
        }else {
            div.style.fontWeight = 600
        }
        document.body.append(div)

    }
}
