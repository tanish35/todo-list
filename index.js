import express from 'express';
const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const data = {
    'arr': [],
    'done': []
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs", { data: data });
});

app.post("/newitem", (req, res) => {
    console.log(req.body.item);
    data.arr.push(req.body.item);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    console.log(Object.keys(req.body)[0]);
    data.arr = data.arr.filter(item => item.replace(/\s/g, '') !== Object.keys(req.body)[0]);
    res.redirect("/");
});