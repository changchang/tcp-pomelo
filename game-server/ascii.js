var src = "7b 22 6d 73 67 22 3a 22 68 69 7e 7e 22 7d";

var ts = src.split(" ");

var str = '';

console.log('ts length: %j', ts.length);
for(var i=0; i<ts.length; i++) {
  str += String.fromCharCode(ts[i]);
}

console.log(str);

var route = "connector.helloHandler.hello";

var res = '';
for(var j=0; j<route.length; j++) {
  res += Number(route.charCodeAt(j)).toString(16) + ' ';
}

console.log(res);

var msg = "{\"msg\":\"hello\"}";

var res2 = '';
for(var j=0; j<msg.length; j++) {
  res2 += Number(msg.charCodeAt(j)).toString(16) + ' ';
}

console.log(res2);
