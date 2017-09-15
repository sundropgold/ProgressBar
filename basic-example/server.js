/* =========== DEPENDENCIES =========== */
var express = require('express');
var path = require('path');

/* =========== EXPRESS APP =========== */
var app = express();
var PORT = process.env.PORT || 3000;

// static directory 'public'
app.use("/public", express.static("./public"));

/* =========== ROUTES =========== */
app.get("/", function(req,res){
	res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

/* =========== START LISTENING =========== */
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});