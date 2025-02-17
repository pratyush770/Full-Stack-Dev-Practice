var url = require('url');
var adr = 'https://imcc.mespune.in/events/jigyasa/'
var q = url.parse(adr, true);  //parse the address:

console.log(q.host);  /*the parse method returns an object containing url properties*/
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;  /*the query property returns an object with all the querystring parameters as properties:*/
console.log(qdata.search);
