export function getArchitects(){
    let result = []
    let architects = Array.from(document.querySelectorAll('a'))
    let noArchitects = Array.from(document.querySelectorAll('span'))
    result.push(architects)
    result.push(noArchitects)
    return result
}
export function getClassical(){
    let result =[]
    let classical = Array.from(document.querySelectorAll('a.classical'))
    let noclassical = Array.from(document.querySelectorAll('a:not(.classical)'))
    result.push(classical)
    result.push(noclassical)
    return result
}
export function getActive(){
    let result = []
    let classicalActive = Array.from(document.querySelectorAll('a.classical.active'))
    let classicalNotActiv = Array.from(document.querySelectorAll('a:not(.classical.active)'))
    result.push(classicalActive)
    result.push(classicalNotActiv)
    return result
}
export function getBonannoPisano(){
    let result = []
    let bonannoPisano = document.getElementById('BonannoPisano')
    let rest = Array.from(document.querySelectorAll('a.classical.active')).filter(a=> a.id != 'BonannoPusano')
  result.push(bonannoPisano)
  result.push(rest)
  return result
}