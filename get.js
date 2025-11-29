function get(src,path){
   let splited = path.split(".")
   let key = splited[0]
   if (src[key]=== undefined){
    return undefined
   }
   let left = splited.slice(1)
   if (path.split(".").length > 1){
    return get(src[key],left.join(""))
   }
   return src[key]
}