import { styles } from "./pimp-my-style.data.js"
let position =0
let add = true 
export function pimp(){
   
    let button = document.querySelector('.button')
        if (button.classList.contains('fifteen')){
        button.add('unpimp')
        add =false
    }else if(!button.classList.contains('one') && button.classList.contains('unpimp')){
        button.remove('unpimp')
        add = true
    }
    if (add){
        button.classList.add(styles[position])
        position ++
    }else{
        button.classList.remove(styles[position])
        position--
    }
    }
    
        

