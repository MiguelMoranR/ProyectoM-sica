const albumes = [
    { id: 1, nombre: 'Tropical', precio: 25000 },
    { id: 2, nombre: 'Romántico',  precio: 45000  },
]

// Controlador: obtener todos los productos
const obtenerTodos = (req, res) => {
    res.status(200).json(albumes)
}

// Controlador: crear un producto
const crearAlbumes = (req, res) => {
    const { nombre, precio } = req.body    // Datos del body
    const nuevo = {
        id: albumes.length + 1,
        nombre,
        precio
    }
    albumes.push(nuevo)
    res.status(201).json(nuevo)
}

module.exports = { obtenerTodos, crearAlbumes }