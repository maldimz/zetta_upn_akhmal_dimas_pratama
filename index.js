const book = [
    {
        title: 'The Great Gatsby',
        price: 45000,
        discount: 10
    },
    {
        title: 'The Lord of the Rings',
        price: 50000,
        discount: 20
    },
    {
        title: 'The Hobbit',
        price: 40000,
        discount: 5
    },
    {
        title: 'The Da Vinci Code',
        price: 30000,
        discount: 15
    },
    {
        title: 'The Alchemist',
        price: 20000,
        discount: 10
    },
]

function purchase(params) {
    const {title, price, discount} = params
    const discountPrice = price * (discount / 100)
    const tax = (price - discountPrice) * 0.1

    console.log(`Title: ${title}`)
    console.log(`Price: ${price}`)
    console.log(`Discount: ${discount}`)
    console.log(`Price After Discount: ${price - discountPrice}`)
    console.log(`Tax: ${tax}`)
    console.log(`Total: ${price - discountPrice + tax}`)
}

console.log(book)
console.log(purchase(book[0]))