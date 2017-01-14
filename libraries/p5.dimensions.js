

var dimensionalSymbols = ["x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
    "xx","yy","zz","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww"];

p5.prototype.nDist = function (v1, v2) {
    //nDist calculates the euclidean distance between two points(nVector objects), or between 'this' and another point. 
    return Math.sqrt(nDistSq(v1,v2));
}
p5.prototype.nDistSq = function (v1, v2) {
    //nDist calculates the euclidean distance between two points(nVector objects), or between 'this' and another point. 
    if (arguments.length == 1) {
        return nDistSq(this,v1);
    } else {
        var positions = [];
        a1 = Object.keys(v1).map(function(k) { return v1[k] }); //turns v1's values into an array
        a2 = Object.keys(v2).map(function(k) { return v2[k] }); //turns v2's values into an array
        positions = a1.concat(a2); //Joins arrays together
        var total = 0;
        for(var i=0; i < positions.length/2; i++){
            total += Math.pow(positions[i]-positions[i+positions.length/2], 2);
        }
        return total;
    }
}


p5.prototype.nVector = function() {
    //nVector is a constructor function which creates an object with x,y,z, then alphabetically named properties.
    var obj = new Object();
    for (var i = 0; i < arguments.length; i++){
        if (i > dimensionalSymbols.length){
            throw "P5JS ERROR: Too many dimensions were entered!";
        }
        obj[dimensionalSymbols[i]] = arguments[i];
    }
    return obj;

}

p5.prototype.nDot = function(v1,v2) {
    //implement dot product - which is equal to v1.x * v2.x + v1.y * v2.y ...
    var output = 0;
    var dimensionCount = Object.keys(v1).length;
    for (i=0; i<dimensionCount; i++) {
        output += v1[dimensionalSymbols[i]] * v2[dimensionalSymbols[i]];
    }
    return output;
}

p5.prototype.nCross = function(v1,v2) {
    //implement cross product - which is very, very confusing...
}
    


p5.prototype.nAdd = function(v1,v2) {
    //implement add of nVectors
    var output = new nVector();
    var dimensionCount = Object.keys(v1).length;
    for (i=0; i<dimensionCount; i++) {
        output[dimensionalSymbols[i]] = v1[dimensionalSymbols[i]] + v2[dimensionalSymbols[i]];
    }
    return output;
}

p5.prototype.nSub = function(v1,v2) {
    if (arguments.length == 1) {
        return nSub(this,v1);
    } else {
    //implement subtraction of nVectors
    var output = new nVector();
    var dimensionCount = Object.keys(v1).length;
    for (i=0; i<dimensionCount; i++) {
        output[dimensionalSymbols[i]] = v1[dimensionalSymbols[i]] - v2[dimensionalSymbols[i]];
    }
    return output;
    }
}

p5.prototype.nMag = function(v1) {
    //implement magnitude calculation of nVectors
    var dimensionCount = Object.keys(v1).length;
    var origin = new nVector();
    for (i=0; i<dimensionCount; i++) {
        origin[dimensionalSymbols[i]] = 0;
    }
    return nDist(origin,v1);
}

p5.prototype.nMagSq = function(v1) {
    //implement magnitude calculation of nVectors
    var dimensionCount = Object.keys(v1).length;
    var origin = new nVector();
    for (i=0; i<dimensionCount; i++) {
        origin[dimensionalSymbols[i]] = 0;
    }
    return nDistSq(origin,v1);
}