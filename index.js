const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // corregido el nombre

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://noelalfonsoobando:xjUVLcawugkvKGyC@mundoencantado.futis07.mongodb.net/?retryWrites=true&w=majority&appName=mundoEncantado', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB atlas'))
.catch(err => console.error('Error conectando a MongoDB:', err));

const Evento = mongoose.model('Evento', {
    name: String,
    cumpleañero: String,
    contacto: String,
    edad: String,
    fecha: String,
    hora: String,
    direccion: String,
    tematica: String,
    extra: String,
    });

app.get('/eventos', async (req, res) => {
    const eventos = await Evento.find(); // corregido el nombre y método
    res.json(eventos);
});

app.post('/eventos', async (req, res) => {
    console.log(req.body)
    const evento = new Evento( req.body );
    await evento.save(); // corregido
    res.json(evento);
});

app.listen(3000, () => { // corregido el puerto
    console.log('backend escuchando en http://localhost:3000');
});