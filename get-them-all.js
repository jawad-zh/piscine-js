
export function getArchitects(){
let architects = document.querySelectorAll('a')
let noArchitects = document.querySelectorAll('span')
return [architects,noArchitects]
}
export function getClassical(){
let classical = document.querySelectorAll('a.classical')
let noclassical = document.querySelectorAll('a:not(.classical)')
return [classical,noclassical]
}
export function getActive(){
let classicalActive = document.querySelectorAll('a.classical.active')
let classicalNotActiv = document.querySelectorAll('a:not(.classical.active)')
return [classicalActive,classicalNotActiv]
}
export function getBonannoPisano(){
let bonannoPisano = document.getElementById('BonannoPisano')
let rest = (document.querySelectorAll('a.classical.active'))
return [bonannoPisano,rest]
}