//Dependenciessss
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//Express stuff
var app = express();
var port = process.env.PORT || 3000;
//Express is handling data with this???
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
//DATA
var customers = [
{
    routeName: "customer1",
    name: "Daniel",
    phone: "9802299604",
    email: "blatde91@gmail.com",
    id: "1291"
}
];

var waitList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));    
});

app.get("/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function(req, res) {
	res.sendFile(path.join(__dirname, "table.html"));
});

app.get('/api/tables', function(req, res) {
    return res.json(customers.slice(0, 4))
});

app.get('/api/waitlist', function(req, res) {
    return res.json(customers.slice(5))
})
app.post('api/new', function(req, res) {
    var table = req.body;
    if (table) {
        customers.push(table);
    }
    
    return res.json(table);
}

// app.post("/api/remove/:id", function(req, res) {
// 	customers.filter(function(obj) {
// 		return ide.id == 
// 	}
// });
//The server is a good listener
app.listen(port, function() {
    console.log("App listening on port: " + port);
});

app.post("/api/waitlist", function(req, res) {
    var newcustomer = req.body;
    newcustomer.routeName = newcustomer.name.replace(/\s+/g, "").toLowerCase();
    console.log(newcustomer);
    waitlist.push(newcustomer);
});


