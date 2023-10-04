import express from 'express';
const app = express();
import { format } from 'date-fns';
const port = 3000;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const data = {
    'arr': [],
    'done': [],
    'date': null
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    const today = new Date();
    const formattedDate = format(today, "do MMMM yyyy");
    data.date = formattedDate;
    res.render("index.ejs", { data: data });
});

app.post("/newitem", (req, res) => {
    if (!(data.arr.includes(req.body.item))) {
        data.arr.push(req.body.item);
    }
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    if (!(data.done.includes(Object.keys(req.body)[0]))) {
        data.done.push(Object.keys(req.body)[0])
    }
    res.redirect("/");
});

app.post("/add", (req, res) => {
    data.done = data.done.filter((item) => item != Object.keys(req.body)[0])
    res.redirect("/");
});

app.patch("/deleteperma", (req, res) => {
    data.arr = data.arr.filter((item) => item != Object.keys(req.body)[0])
    res.redirect("/");
});
