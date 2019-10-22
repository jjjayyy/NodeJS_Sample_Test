var fs = require('fs');
//Sync
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);

//Async
console.log(2);
fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
    console.log(data);
})