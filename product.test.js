const { resetProducts, addProduct, removeProduct, getProducts, getProductById, updateProduct } = require('./product')

beforeEach(() => {
    resetProducts()
})

describe("addProduct", () => {
    it("should add a product", () => {
        addProduct("Manzana", 2);
        const products = getProducts();
        expect(products.length).toBe(1);
        expect(products[0]).toEqual({ id: 1, name: "Manzana", price: 2 });
    })

    it("should increment the id when adding a product", () => {
        addProduct("Manzana", 2)
        addProduct("Pera", 3)
        const products = getProducts()
        expect(products[0].id).toBe(1)
        expect(products[1].id).toBe(2)
    })

    it("should throw an error if name or price is missing", () => {
        expect(() => addProduct().toThrow("The name and the price are required"))
        expect(() => addProduct("", 2).toThrow("The name and the price are required"))
        expect(() => addProduct("Manzana",).toThrow("The name and the price are required"))
    })

    it("should throw an error if the product already exists", () => {
        addProduct("Manzana", 2)
        expect(() => addProduct("Manzana", 2).toThrow("The product already exists"))
    })
})


describe("removeProduct", () => {
    it("should remove a product by id", () => {
        addProduct("Manzana", 2)
        addProduct("Pera", 3)
        removeProduct(1)
        products = getProducts()
        expect(products[0].name).toBe("Pera")
    })
})

describe("getProductById", () => {
    it("should return a product by id", () => {
        const product = addProduct("Manzana", 2)
        const id = product.id
        const productById = getProductById(id)
        expect(productById.name).toBe("Manzana")
        expect(productById.price).toBe(2)
    })

    it("should throw an error if the product does not exist", () => {
        expect(() => getProductById(999)).toThrow("Product not found")
    })
})

describe("updateProduct", () => {
    it("should update a product by id", () => {
        const product = addProduct("Manzana", 2)
        const updatedProduct = updateProduct(product.id, "Manzana Verde", 3)

        expect(updatedProduct.name).toBe("Manzana Verde")
        expect(updatedProduct.price).toBe(3)
    })
})