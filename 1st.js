function doubleArray(arr,callback){
    const doubledArr = arr.map((num) =>{
        return callback(num);
    });
    return doubledArr;
}

const originalArray = [1,2,3,4];
function callback(num){
    return num*2
}
const doubledArr = doubleArray(originalArray,callback);
console.log(doubledArr); // output :[2,4,6,8]