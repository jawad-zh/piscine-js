function getAcceleration(test){
    if(test.f !== undefined && test.f!=0 && test.m !== undefined && test.m !=0 ){
        return test.f / test.m
    }else if (test.Δv !== undefined && test.Δv !== 0 && test.Δt!= undefined && test.Δt!= 0 ){
        return Δv / Δt
    }else if (test.t !== undefined  && test.t !== 0 && test.d !== undefined && test.d !== 0 ){
        return 2*test.d / t**2
    }else{
        return "impossible"
    }
}