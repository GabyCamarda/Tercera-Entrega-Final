const productos = [];

function getAll(req, res) {
    let product = req.body;
    product.createdAt = Date.now();
    productos.push(product)

    return res.status(201).json(product);
}

module.exports = { getAll, save};