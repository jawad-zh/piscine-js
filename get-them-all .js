export function getArchitects(){
    let result = []
    let architects = Array.from(document.querySelectorAll('a'))
    let noArchitects = Array.from(document.querySelectorAll('span'))
    result.push(architects)
    result.push(noArchitects)
    return result
}
export function getClassical(){
    let classical = Array.from(document.querySelectorAll('a.classical'))
    let noclassical = Array.from(document.querySelectorAll('a:not(a.classical)'))
    return [classical,noclassical]
}
export function getActive(){
    let classicalActive = Array.from(document.querySelectorAll('a.classical.active'))
    let classicalNotActiv = Array.from(document.querySelectorAll('a:not(.classical.active)'))
    return [classicalActive,classicalNotActiv]
}
export function getBonannoPisano(){
    let result = []
    let bonannoPisano = document.getElementById('BonannoPisano')
    let rest = Array.from(document.querySelectorAll('a.classical.active'))
  result.push(bonannoPisano,rest)
  return result
}