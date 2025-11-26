let sign = (n) => { return (n>0) ? 1 : (n<0) ? -1 : 0 }
let sameSign = (n1,n2) => sign(n1) === sign(n2) ? true : false