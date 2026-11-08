const concatenateArrays = <T>(...arrays: T[][]) => {
    return arrays.flat() as T[];
};

console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));