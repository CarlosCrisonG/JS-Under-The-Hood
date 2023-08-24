function mapArray(arr, fn) {
    var newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(
            fn(arr[i])
        );
    }

    return newArray;
};

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = mapArray(arr1, function (item){
    return item < 2
});
// console.log(arr2);

//Let's check if it passes the limit
var limitCheck = function(limiter) {
    return function(limiter, item) {
        return item > limiter;   
    }.bind(this, limiter); 
};

var arr3 = mapArray(arr1, limitCheck(1));

console.log(arr3);