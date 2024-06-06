import express from "express";
import mysql from "mysql";

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Innocent8621",
    database:"test"
});

app.get("/", (req,res)=>{
    res.json("this is the backend");
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books" 
    db.query(q,(err,data)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (res,req)=>{
    const q = "INSERT INTO books ('title','desc','cover') VALUES (?)";
    const values = [
        "title from backend",
        "desc from backend",
        "cover pic frm backend",
    ];
    
    db.query(q,[values], (err,data)=>{
        if(err)return res.json(err)
        return res.json(data)
})

app.listen(8800, ()=>{
    console.log("connected to backend!")
})