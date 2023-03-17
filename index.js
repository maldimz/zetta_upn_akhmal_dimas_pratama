const book = [
    {
        title: 'The Great Gatsby',
        price: 45000,
        discount: 10,
        stock: 10,
        purchased: 10,
    },
    {
        title: 'The Lord of the Rings',
        price: 50000,
        discount: 20,
        stock: 5,
        purchased: 2,
    },
    {
        title: 'The Hobbit',
        price: 40000,
        discount: 5,
        stock: 0,
        purchased: 1,
    },
    {
        title: 'The Da Vinci Code',
        price: 30000,
        discount: 15,
        stock: 3,
        purchased: 3,
    },
    {
        title: 'The Alchemist',
        price: 20000,
        discount: 10,
        stock: 2,
        purchased: 2,
    },
]

function purchase(params) {

    for (let index = 0; index < params.length; index++) {
        const { title, price, discount, stock, purchased } = params[index]
        const stockAfterPurchase = stock - purchased
        const totalPrice = price * purchased
        const discountPrice = totalPrice * (discount / 100)
        const tax = (totalPrice - discountPrice) * 0.1

        if (stockAfterPurchase < 0) {
            break
        }

        console.log(`Title: ${title}`)
        console.log(`Price: ${price}`)
        console.log(`Discount: ${discount}`)
        console.log(`Price After Discount: ${totalPrice - discountPrice}`)
        console.log(`Tax: ${tax}`)
        console.log(`Total: ${totalPrice - discountPrice + tax}`)

        if (stockAfterPurchase === 0) {
            console.log('Out of Stock')
        } else {
            console.log(`Stock: ${stockAfterPurchase}`)
        }
    }
}


console.log(book)
console.log(purchase(book))