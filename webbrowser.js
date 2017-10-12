var book = require('./grader/lib/grades').book; // get the exports object "book" from grades.js and store it in book variable
const express = require('express');             // get the express module
var app = express();                            // express is exporting a function which we name "app"

// when someone tries to 'get' the root of the website
// I want the app to respond in a certain way
app.get("/", function(request, respond){
  // second parameter is a function that takes two parameters,
  // request (is the incoming request, what the browser is sending me)
  // which we can inspect to find out what type of browser it is
  // and other similar information.
  // respond is what I want to respond to the web browser with
  respond.send("Hello World!");
  // in this case "Hello World!"

});

// if we would like to enter grades into the webbrowser
// we would write "localhost:3000/grade?grades=100, 90, 80, 70"
// the question mark creates a query string. Everything after this mark
// is this string, so the query string would be grades with the values 100, 90, 80, 70
app.get("/grade", function(req, res){
  // we ask req for the query string and then split it:
  // "1, 2, 3".split(",") => ["1", "2", "3"]
  var grades = req.query.grades.split(",");

  // loop through the input array
  for (var i = 0; i < grades.length; i++) {
    book.addGrade(parseInt(grades[i]));
  }

  // get average letter and number
  var averageLetter = book.getAverageGradeLetter();
  var average = book.getAverage();

  // and now we respond with the average points and average grade letter to the browser
  res.send("Your average is: " + average + " Average grade letter: " + averageLetter);
});


// set app to listen for a connection on port 3000.
// this tells the application to hook itself up to port 3000
// on this computer, and if there are any connections made over the
// network to that port, try to respond to them:
app.listen(3000);
console.log("Server is ready...");

// after this go into a webbrowser and type in "localhost:3000" (alias for this computer)
// and if we don't declare a function called "get"
// we will get "Cannot GET /", which means:
// "Sorry, you've requested the root of this website (the root path), and I don't know
// how to respond", because we haven't told express what to do.
