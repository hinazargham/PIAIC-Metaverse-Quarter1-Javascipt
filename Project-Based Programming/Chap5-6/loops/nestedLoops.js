const products = ["Shirt", "Trouser", "Jacket"];
const gifts = ["Pen", "Keychain", "Tie"];

for ( let i = 0; i < products.length; i++){
    // console.log(products[i])
    for (let j = 0; j < gifts.length; j++) {
        console.log(products[i] + " - " + gifts[j])
        
    }
}