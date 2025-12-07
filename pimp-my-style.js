import { styles } from "./pimp-my-style.data.js"
let position = 0
let add = true
export function pimp() {
    let button = document.querySelector('.button')
    if (add) {
        button.classList.add(styles[position])
        position++
        if (position == styles.length) {
            button.classList.add('unpimp')
            add = false
        }

    } else {
        position--
        button.classList.remove(styles[position])
        if (position === 0) {
            button.classList.remove('unpimp')
            add = true
        }
    }
}



