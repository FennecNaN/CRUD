const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let usuarios = [
    { id: 1, nombre: 'Ryu', edad: 32, lugarProcedencia: 'Japón' },
    { id: 2, nombre: 'Chun-Li', edad: 29, lugarProcedencia: 'China' },
    { id: 3, nombre: 'Guile', edad: 35, lugarProcedencia: 'Estados Unidos' },
    { id: 4, nombre: 'Dhalsim', edad: 45, lugarProcedencia: 'India' },
    { id: 5, nombre: 'Blanka', edad: 32, lugarProcedencia: 'Brasil' },
];

//obtener todos los jugadores
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

//encontrar un jugador en concreto
app.get('/usuarios/:nombre', (req, res) => {
    const playerName = req.params.nombre;
    const usuario = usuarios.find(player => player.nombre === playerName);
    res.json(usuario);

});

//añadir un nuevo objeto al array (jugador nuevo)
app.post('/usuarios', (req, res) => {
    const newPlayer = req.body;
    usuarios.push(newPlayer);
    res.send('Jugador creado exitosamente')
});

//borrar un jugador 
app.delete('/usuarios/:nombre', (req, res) => {
    const playerName = req.params.nombre;
    usuarios = usuarios.filter(user => user.nombre !== playerName);
    res.send("Jugador eliminado");
});


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});