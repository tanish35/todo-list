import express from 'express';
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const data = {
    'arr': ['hello', 'world'],
    'done': []
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs", { data: data });
});

app.post("/newitem", (req, res) => {
    data.arr.push(req.body.item);
    res.redirect("/");
});