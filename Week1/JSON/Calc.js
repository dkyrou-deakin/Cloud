const express = require("express");
const res = require("express/lib/response");
const app = express();
const add= (n1, n2) => {
    return n1 + n2
}
const subtract= (n1, n2) => {
    return n1 - n2
}
const divide= (n1, n2) => {
    return n1 / n2
}
const multiply= (n1, n2) => {
    return n1 * n2
}
app.get("/add", (req, res) =>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        
        if(isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result = add(n1,n2);
        res.status(200).json({statuscocde:200, data: result});
        } catch(error) {
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString() })
          }
});
app.get("/subtract", (req, res) =>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        
        if(isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result = subtract(n1,n2);
        res.status(200).json({statuscocde:200, data: result});
        } catch(error) {
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString() })
          }
});
app.get("/divide", (req, res) =>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        
        if(isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result = divide(n1,n2);
        res.status(200).json({statuscocde:200, data: result});
        } catch(error) {
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString() })
          }
});
app.get("/multiply", (req, res) =>{
    try{
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if(isNaN(n1)) {
            throw new Error("n1 incorrectly defined");
        }
        
        if(isNaN(n2)) {
            throw new Error("n2 incorrectly defined");
        }

        const result = multiply(n1,n2);
        res.status(200).json({statuscocde:200, data: result});
        } catch(error) {
            console.error(error)
            res.status(500).json({statuscocde:500, msg: error.toString() })
          }
});
const port = 3041;
var a= add(8, 2);
var b = subtract(8, 2);
var c = divide(8, 2 );
var d = multiply(8, 2);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
app.listen(port,()=> {
    console.log("hello i'm listening to port " + port);
})