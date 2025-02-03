

let products = []
let id = 0

function resetProducts() {
    products = []
    id = 0
}

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error("The name and the price are required")
    }

    if (products.some(product => product.name === name)) {
        throw new Error("The product already exists")
    }

    id++
    const newProduct = { id, name, price }
    products.push(newProduct)
    return newProduct
}

function removeProduct(id) {
    const index = products.findIndex(product => product.id === id)

    if(index === -1){
        throw new Error("The id does not exists")
    }

    products.splice(index, 1)
}

function getProducts() {
    return products
}

function getProductById(id) {
    const product = products.find(product => product.id === id)
    if (!product) {
        throw new Error("Product not found");
    }
    return product
}

function updateProduct(id, newName, newPrice) {

    const product = products.find(product => product.id === id)

    if (!product) {
        throw new Error("Product not found")
    }

    if (newName !== undefined) {
        product.name = newName;
    }

    if (newPrice !== undefined) {
        product.price = newPrice
    }

    return product
}

module.exports = { resetProducts, addProduct, getProducts, removeProduct, getProductById, updateProduct }