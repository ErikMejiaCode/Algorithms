// Nesting Arrays

var arr2d = [ [2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];

function isPresent2d(arr2d, value) {
    for (var i = 0; i < arr2d.length; i++){
        for (var j = 0; j < arr2d[i].length; j++) {
            if (arr2d[i][j] === value){
                console.log(true);
                return true;
            }
        }
    }
    console.log(false);
    return false;
}
isPresent2d(arr2d, 7)


// complete the following function
function flatten(arr2d) {
    var flat = [];
    for (var i = 0; i < arr2d.length; i++){
        for (var j = 0; j < arr2d[i].length; j++){
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]



