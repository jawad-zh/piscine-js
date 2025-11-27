const is = {
    num : (arg)=> typeof(arg) === 'number' ,
    nan :  (arg)=> Number.isNaN(arg) , //
   str :  (arg)=> typeof(arg) === 'string', 
   bool :  (arg)=> typeof(arg) === 'boolean', 
   undef :  (arg)=> typeof(arg) === 'undefined',
   def :  (arg)=> typeof(arg) !== 'undefined' ,
   arr :  (arg)=> Array.isArray(arg)  ,
    obj :  (arg)=> typeof(arg) === ('object')  ,
    fun :  (arg)=> typeof(arg) === 'function' ,
    truthy :  (arg)=> arg === true ,
    falsy :  (arg)=> arg === false ,
}