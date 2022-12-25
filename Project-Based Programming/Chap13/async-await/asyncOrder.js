function breakfastorder(item) {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve (`${item} is ready`)
        }, 3000)
    });
};

async function order(item) {
    const order = await breakfastorder(item);
    console.log(order);
}

order("Bread");
order("Omlette");