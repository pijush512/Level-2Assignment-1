const multiplyValue = (value: number, multiplier?: number ): number => {
    if(multiplier === undefined){
        return value * 2;
    }
    else{
        return value * multiplier;
    }
}
// console.log(multiplyValue(10))
