const uuid = require('uuid')



exports.sum = function (...args) {
    return args.reduce((acc,e) => acc + e);
}

exports.makePerson = function (firstName, LastName) {
    return {
        id: uuid(),
        fullName: `${firstName} ${LastName}`,
    }
}

exports.executeIfEven = function(number,callback){
    if (number % 2 ===0){
        callback(number);
        
    }
}