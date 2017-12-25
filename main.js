require("http").createServer((req,res) => {
	res.writeHead(200);
	const data = {name:"zhangsan"};
	//const cbname = require("url").parse(req.url,true).query;
	//console.log(cbname)
	res.end("getdata("+JSON.stringify(data)+")");
}).listen(8080);