//Dependenciessss
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//Express stuff
var app = express();
var PORT = process.env.PORT || 3000;
//Express is handling data with this???
app.use(bodyParser.urlencoded({ extended: false }));
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

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));    
});

app.get("/reserve", function(req, res) {
	res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});


app.get('/api/all', function(req, res) {
    return res.json(customers)
});


app.get('/api/tables', function(req, res) {
    return res.json(customers.slice(0, 4))
});

app.get('/api/waitlist', function(req, res) {
    return res.json(customers.slice(5))
})
app.post('/api/new', function(req, res) {
    var table = req.body;
    customers.push(table);

    console.log(table);
    return res.json(table);
})

// app.post("/api/remove/:id", function(req, res) {
// 	customers.filter(function(obj) {
// 		return ide.id == 
// 	}
// });
//The server is a good listener
app.listen(PORT, function() {
    console.log("App listening on port: " + PORT);
});


