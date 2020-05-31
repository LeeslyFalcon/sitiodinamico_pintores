const express = require(`express`);

const hbs = require(`hbs`);

const app = express();

app.set(`view engine`, `hbs`);

hbs.registerPartials(__dirname + `/views/partials`);

app.use(express.static(__dirname + `/public`));

app.get(`/`, (req, res)=>{
    res.render(`index`);
});

app.get(`/edvard`, (req, res)=>{
    res.render(`edvard`);
});

app.get(`/vinci`, (req, res)=>{
    res.render(`vinci`);
});

app.get(`/gogh`, (req, res)=>{
    res.render(`gogh`);
});

app.get(`/picasso`, (req, res)=>{
    res.render(`picasso`);
});

app.get(`/creador`, (req, res)=>{
    res.render(`creador`);
});


app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000");
});