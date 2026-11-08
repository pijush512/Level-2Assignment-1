const processInput = (value: string | number | boolean): string | number =>{
    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }
    else if(typeof value === "number"){
        return value * 10;
    }
    else if (typeof value === "boolean") {
        if(value === true){
            return "Active"
        }
        else{
            return "Inactive"
        }
    }
    return "";
};

console.log(processInput(false));