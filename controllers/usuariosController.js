const usuarios = [
    { id: 1, nombre: 'Alice', email: 'alice@example.com' },
    { id: 2, nombre: 'Bob',   email: 'bob@example.com' },
];

const obtenerTodos = (req, res) => {
    res.status(200).json(usuarios)
};

const crearUsuario = (req, res) => {
    const { nombre, email } = req.body
    const nuevo = {
        id: usuarios.length + 1,
        nombre,
        email
    }
    usuarios.push(nuevo)
    res.status(201).json(nuevo)
}

module.exports = { obtenerTodos, crearUsuario }