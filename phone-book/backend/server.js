import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Blarfrose14_",
    database: "test"
})

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json("hello this is the backend");
})

app.get("/people", (req, res) => {
    const q = "SELECT * FROM people";
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        else return res.json(data)
    });
})

app.post("/people", (req, res) => {
    const q = "INSERT INTO people (`name`, `phone`, `email`, `priority`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.priority
    ];

    db.query(q,[values], (err, data) => {
        if(err) return res.json(err)
        else return res.json(data)
    });
})

app.delete("/people/:id", (req, res) => {
    const peopleId = req.params.id;
    const q = "DELETE FROM people WHERE id = ?"

    db.query(q, [peopleId], (err, data) => {
        if(err) return res.json(err)
        else return res.json(data)
    })
})

app.put("/people/:id", (req, res) => {
    const peopleId = req.params.id;
    const q = "UPDATE people SET `priority` = ? WHERE id = ?";

    const value = req.body.priority;

    db.query(q, [value, peopleId], (err, data) => {
        if(err) return res.json(err)
        else return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Backend Connected");
})