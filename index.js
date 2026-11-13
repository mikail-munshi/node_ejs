// npm i ejs --> install ejs

const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// if view is not in the same folder where index.js is stored
// then we have to set the view with directory name  - path.join(__dirname ,("view") );
//

    // app.use(express.static("/public")); // to link folders and files on it
   app.use(express.static(path.join(__dirname, "public"))); // onno folder theke server start korleo kaj korar jonno path.join()
     
    app.use(express.static(path.join(__dirname, "/public/css"))); 
     app.use(express.static(path.join(__dirname, "/public/js"))); 

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "/views"));

// express requires ejs automatically, 
// so we don't need to require it if we keep view in same foldder
// app.set("view engine", "ejs");

// runs the server
app.listen( port, ()=>{
    console.log(`app is listening on port : ${port}`);
});


app.get("/", (req, res)=>{
   // console.log(`req received for root`);
    res.render("home.ejs");
    // res.render("home"); eita dileo hobe

});


app.get("/hello", (req, res)=>{
   // console.log(`req received for hello`);
    res.send("hello Mikki ");
    // res.get("home.ejs")

});
app.get("/roledice", (req, res)=>{
    //  res.render("roledice.ejs");
    let diceVal = Math.floor(Math.random()*6)+1 ;
    // res.render("roledice.ejs", {num:diceValue});
    res.render("roledice.ejs", {diceVal});
    //  key value object pass kora hoise
    // single value o pass kora jai - diceValue

});

// app.get("/ig/:username", (req, res)=>{  
//     let {username} = req.params;
//     const followers = ["adam", "bob", "samanta" , "shradha"];
//     res.render("instagram.ejs", {username, followers} );
// });

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    // console.log(data);

    if(data) {
    res.render("instagram.ejs", {data});
   // res.render("instagram.ejs", {data: instaData[username]});
    // instaData er username jabe tai username 3rd bracket e rakhsiii
   // console.log(instaData);
   }
   else {
    res.render("error.ejs");
   }
});